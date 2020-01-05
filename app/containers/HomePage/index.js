/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Fragment, useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import greta1 from 'images/greta1.jpg';
import H1Hero from 'components/H1Hero';
// import messages from './messages';
import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

//  ./components
import HeroButton from './HeroButton';
import HeroContainer from './HeroContainer';
import HeroBGImage from './HeroBGImage';
import HeroMessageContainer from './HeroMessageContainer';
import Section from './Section';
import WarningClose from './WarningClose';
import WarningContainer from './WarningContainer';

import { setWarningActive } from './actions';
import { selectWarningActive } from './selectors';

const key = 'home';

export function HomePage({
  warningActive,
  setWarningActive,
  error,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [heroImageActive, setHeroBGImageActive] = useState(false);
  // const [warningActive, setWarningActive] = useState(true);

  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load repos
  //   if (username && username.trim().length > 0) onSubmitForm();
  // }, []);

  // const reposListProps = {
  //   loading,
  //   error,
  //   repos,
  // };

  const heroImageClsName = heroImageActive ? 'active' : 'inactive';
  // const warningClsName = heroImageActive ? 'inactive' : 'active';
  const buttonClsName = heroImageActive ? 'active' : 'inactive';

  return (
    <Fragment>
      <Helmet>
        <title>We are Passione</title>
        <meta name="We are Passione" content="The Vision of Passione" />
      </Helmet>
      <HeroContainer className="white">
        <HeroBGImage src={greta1} alt="bunny" className={heroImageClsName} />
        {warningActive && (
          <WarningContainer>
            <p>WARNING: This product contains passione.</p>
            <p>Passione is an addictive chemical.</p>
            <WarningClose onClick={() => setWarningActive(false)} />
          </WarningContainer>
        )}
        <Section>
          <HeroMessageContainer>
            <HeroButton
              // as={Link}
              // to="/fam"
              className={buttonClsName}
              onMouseEnter={() => setHeroBGImageActive(true)}
              onFocus={() => setHeroBGImageActive(true)}
              onClick={() => setHeroBGImageActive(true)}
              onMouseLeave={() => setHeroBGImageActive(false)}
            >
              <H1Hero className="--invert" data-text="Passione">
                Passione
              </H1Hero>
            </HeroButton>
          </HeroMessageContainer>
        </Section>
      </HeroContainer>
    </Fragment>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  warningActive: PropTypes.bool,
  setWarningActive: PropTypes.func,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  warningActive: selectWarningActive,
});

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    setWarningActive: active => dispatch(setWarningActive(active)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
