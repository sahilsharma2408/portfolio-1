import React from 'react';
import useWindowSize from '@rehooks/window-size';
import styled from 'styled-components/macro';
import Row from './row';
import GitHubIcon from '../assets/icons/github-icon.js';
import NPMIcon from '../assets/icons/npm-icon.js';
import TwitterIcon from '../assets/icons/twitter-icon.js';

const Div = styled.div`
  html.wf-active & {
    font-family: 'Fira Mono', monospace;
  }

  .app__link {
    text-align: left;
    padding: 8px 10px;
  }

  @media screen and (min-width: 768px) {
    .app__link {
      padding: 5px 10px;
    }
  }
`;

export default React.memo(function ProfileLinks() {
  let { innerWidth } = useWindowSize();
  const isMobile = innerWidth < 768;
  const iconWidth = isMobile ? 30 : 16;

  return (
    <Div className="animated fadeInUp faster">
      <Row className="app__link disp-i-block">
        <GitHubIcon width={iconWidth} style={{ verticalAlign: 'sub' }} />{' '}
        {isMobile ? null : (
          <a
            href="https://github.com/ganapativs"
            target="_blank"
            rel="noopener noreferrer">
            ganapativs
          </a>
        )}
      </Row>
      <Row className="app__link disp-i-block">
        <TwitterIcon width={iconWidth} style={{ verticalAlign: 'sub' }} />{' '}
        {isMobile ? null : (
          <a
            href="https://twitter.com/ganapativs"
            target="_blank"
            rel="noopener noreferrer">
            @ganapativs
          </a>
        )}
      </Row>
      <Row className="app__link disp-i-block">
        <NPMIcon width={iconWidth} style={{ verticalAlign: 'sub' }} />{' '}
        {isMobile ? null : (
          <a
            href="https://www.npmjs.com/~ganapativs"
            target="_blank"
            rel="noopener noreferrer">
            ~ganapativs
          </a>
        )}
      </Row>
    </Div>
  );
});
