import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import greta1 from 'images/greta1.jpg';
import greta3 from 'images/greta3.jpg';
// import john1 from 'images/john1.jpg';
import john2 from 'images/john2.jpg';
import jahan2 from 'images/jahan2.jpg';
import ethan1 from 'images/ethan1.jpg';

const getImageURL = dataKey => {
  let backgroundURL;
  switch (dataKey) {
    case 'bunny':
      backgroundURL = greta3;
      break;
    case 'jean':
      backgroundURL = john2;
      break;
    case 'noct':
      backgroundURL = jahan2;
      break;
    case 'kuro':
      backgroundURL = ethan1;
      break;
    default:
      break;
  }

  return backgroundURL;
};

export const HeroImage = ({ dataKey, children, ...restProps }) => {
  const imageURL = getImageURL(dataKey);

  const HeroImagePrimitive = styled.div`
    background-image: url(${imageURL});
  `;

  return <HeroImagePrimitive {...restProps}>{children}</HeroImagePrimitive>;
};

HeroImage.propTypes = {
  dataKey: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default HeroImage;
