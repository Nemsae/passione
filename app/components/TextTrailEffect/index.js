import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import greta1 from '../../images/greta1.JPG';

//  !
import { initialize } from './demo1';

import CoDrops from './CoDrops';
import HeroImage from './HeroImage';
import Wrapper from './Wrapper';

function Slides({ data }) {
  return data.map(({ id, name, text }) => (
    <div key={id} className={`content__slide content__slide--${id}`}>
      <div className="content__img">
        <HeroImage className="content__img-inner" dataKey={id} />
      </div>
      <div className="content__text-wrap">
        <span className="content__text">
          <span className="content__text-inner content__text-inner--stroke">
            {name}
          </span>
        </span>
        <span className="content__text">
          <span className="content__text-inner">{name}</span>
        </span>
        <span className="content__text content__text--full">
          <span className="content__text-inner content__text-inner--stroke">
            {name}
          </span>
        </span>
        <span className="content__text">
          <span className="content__text-inner content__text-inner--stroke">
            {name}
          </span>
        </span>
        <span className="content__text">
          <span className="content__text-inner">{name}</span>
        </span>
        <span
          id="content__nav-button--next"
          className="content__text content__text--full"
        >
          <span className="content__text-inner">{name}</span>
        </span>
        <span className="content__text">
          <span className="content__text-inner content__text-inner--bottom">
            {name}
          </span>
        </span>
        <span className="content__text">
          <span className="content__text-inner">{name}</span>
        </span>
        <span className="content__text content__text--full">
          <span className="content__text-inner content__text-inner--stroke">
            {name}
          </span>
        </span>
        <span className="content__text">
          <span className="content__text-inner content__text-inner--stroke content__text-inner--bottom">
            {name}
          </span>
        </span>
        <span className="content__text">
          <span className="content__text-inner">{name}</span>
        </span>
      </div>
    </div>
  ));
}

/**
 * This will run the code needed to initialize the slide show
 * @param {*} param
 */
function TextTrailEffect({ data, ...restProps }) {
  console.log('data: ', data); //  eslint-disable-line no-console

  useEffect(() => {
    initialize();
  }, []);

  return (
    <CoDrops className="content">
      <Slides data={data} />
      <nav className="content__nav">
        <button
          type="button"
          className="content__nav-button content__nav-button--prev"
        >
          Prev
        </button>
        <button
          type="button"
          className="content__nav-button content__nav-button--next"
        >
          Next
        </button>
      </nav>
    </CoDrops>
  );
}

TextTrailEffect.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextTrailEffect;
