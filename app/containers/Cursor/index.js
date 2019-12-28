/**
 *
 * Cursor
 *
 */

import React, { createRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCursor from './selectors';
import reducer from './reducer';

const CursorWrapper = styled.span`
  position: absolute;
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 50%;
  top: -40px;
  left: -40px;
  z-index: 1;
/* 
  position:absolute;
  width:40px;
  height:40px;
  background:#000;
  border-radius:50%;
  top:-40px;
  left:-40px;
  z-index:1; */
`;

export function Cursor() {
  useInjectReducer({ key: 'cursor', reducer });

  const cursorRef = createRef();

  useEffect(() => {
    document.body.onmousemove = e => {
      console.log('cursorRef: ', cursorRef); //  eslint-disable-line no-console
      const { current: cursor } = cursorRef;

      /* Adjust the cursor position */
      if (cursor) {
        cursor.style.left = `${e.clientX - 20}px`;
        cursor.style.top = `${e.clientY - 20}px`;
      }

      const inverts = document.getElementsByClassName('--invert');
      const invertsExists = Boolean(inverts && inverts.length);
      console.log('inverts: ', inverts); //  eslint-disable-line no-console
      console.log('invertsExists: ', invertsExists); //  eslint-disable-line no-console

      /* Adjust the clip-path */
      if (invertsExists) {
        Array.from(inverts).forEach(i => {
          const p = i && i.getBoundingClientRect();
          i.style.setProperty('--x', `${e.clientX - p.top}px`);
          i.style.setProperty('--y', `${e.clientY - p.left}px`);
        });
      }
    };
  });

  return <CursorWrapper ref={cursorRef} id="cursor" />;
}

Cursor.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cursor: makeSelectCursor(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cursor);
