import { useState, useRef, useEffect } from 'react';
import useWindowSize from '@rehooks/window-size';
import { getRandomInt } from '../../utils';
import RandomPointsInTriangle from './randomPointsInTriangle';

export const COLORS = [
  '#222A68',
  '#3B28CC',
  '#2667FF',
  '#DD503B',
  '#E0607E',
  '#EDAE49',
  '#F3E1BC',
  '#CAD178',
  '#AAF683',
  '#61E8E1',
];

export const VISIBILITY = {
  HIDDEN: 0,
  VISIBLE: 1,
};

export const BLOCK_SIZE = 40;

const useMesh = () => {
  const { innerWidth, innerHeight } = useWindowSize();
  const [mesh, setMesh] = useState([[]]);
  const horizontalBlocks = useRef(0);
  const verticalBlocks = useRef(0);
  const intermediate = useRef(null);
  const maxRandomPoints = innerWidth > 1023 ? 30 : innerWidth > 767 ? 20 : 15;

  const toggleCircle = dot => {
    const { posX, posY, active } = dot;
    mesh[posY][posX].active = !active;

    requestAnimationFrame(() => {
      setMesh(mesh);
    });
  };

  useEffect(
    () => {
      horizontalBlocks.current = Math.ceil(innerWidth / BLOCK_SIZE);
      verticalBlocks.current = Math.ceil(innerHeight / BLOCK_SIZE);

      const newMesh = [...mesh.map(e => [...e])];
      const hasLessRows = newMesh.length < verticalBlocks.current;
      const hasLessColumns = newMesh[0].length < horizontalBlocks.current;

      if (hasLessRows || hasLessColumns) {
        // Scenario - when window is expanded in horizontal/vertical direction
        // Compute new mesh elements in viewport
        for (let i = 0; i < verticalBlocks.current; i++) {
          if (!newMesh[i]) {
            newMesh[i] = [];
          }

          for (let j = 0; j < horizontalBlocks.current; j++) {
            if (!newMesh[i][j]) {
              const colorIndex = getRandomInt(0, COLORS.length - 1);

              newMesh[i][j] = {
                active: false,
                visibility: VISIBILITY.VISIBLE,
                color: COLORS[colorIndex],
                colorIndex,
                posX: j,
                posY: i,
                rotation: Math.random() * 360,
                rotationSpeed: Math.random() * (12 - 8) + 8,
              };
            }
          }
        }
      } else {
        // Scenario - when window is sized down in horizontal/vertical direction
        // Update visibility status of invisible rows/columns
        for (let i = 0; i < newMesh.length; i++) {
          for (let j = 0; j < newMesh[0].length; j++) {
            if (newMesh[i][j]) {
              newMesh[i][j] = {
                ...newMesh[i][j],
                visibility:
                  i >= verticalBlocks.current || j >= horizontalBlocks.current
                    ? VISIBILITY.HIDDEN
                    : VISIBILITY.VISIBLE,
              };
            }
          }
        }
      }

      intermediate.current = newMesh;
      setMesh(newMesh);
    },
    [innerWidth, innerHeight],
  );

  useEffect(() => {
    const randomTrianglePoints = RandomPointsInTriangle(
      [horizontalBlocks.current - 1, 0],
      [horizontalBlocks.current - 1, verticalBlocks.current - 1],
      [0, verticalBlocks.current - 1],
      Math.min(
        maxRandomPoints,
        Math.floor((horizontalBlocks.current * verticalBlocks.current) / 4),
      ),
    );

    randomTrianglePoints.forEach(e => {
      const [x, y] = e;
      intermediate.current[y][x].active = true;
    });

    setMesh(intermediate.current);
    intermediate.current = null;
  }, []);

  return [mesh, toggleCircle];
};

export default useMesh;
