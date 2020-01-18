import React from 'react';
import PropTypes from 'prop-types';

// import greta1 from '../../images/greta1.JPG';

import Ul from './Ul';
import Wrapper from './Wrapper';

function TextTrailEffect({ text, ...restProps }) {
  return (
    <Wrapper>
      <div className="content__slide">
        <div className="content__img">
          <div
            className="content__img-inner"
            // style={{
            //   backgroundImage: `url(${greta1})`,
            // }}
          />
        </div>
        <div className="content__text-wrap">
          <span className="content__text">
            <span className="content__text-inner content__text-inner--stroke">
              Kobun
            </span>
          </span>
          <span className="content__text">
            <span className="content__text-inner">Kobun</span>
          </span>
          <span className="content__text content__text--full">
            <span className="content__text-inner content__text-inner--stroke">
              Kobun
            </span>
          </span>
          <span className="content__text">
            <span className="content__text-inner content__text-inner--stroke">
              Kobun
            </span>
          </span>
          <span className="content__text">
            <span className="content__text-inner">Kobun</span>
          </span>
          <span className="content__text content__text--full">
            <span className="content__text-inner">Kobun</span>
          </span>
          <span className="content__text">
            <span className="content__text-inner content__text-inner--bottom">
              Kobun
            </span>
          </span>
          <span className="content__text">
            <span className="content__text-inner">Kobun</span>
          </span>
          <span className="content__text content__text--full">
            <span className="content__text-inner content__text-inner--stroke">
              Kobun
            </span>
          </span>
          <span className="content__text">
            <span className="content__text-inner content__text-inner--stroke content__text-inner--bottom">
              Kobun
            </span>
          </span>
          <span className="content__text">
            <span className="content__text-inner">Kobun</span>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

TextTrailEffect.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextTrailEffect;
