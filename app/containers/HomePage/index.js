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
import classNames from 'classnames';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import greta1 from 'images/greta1.jpg';

//  images/icons

//  components
import H1 from 'components/H1';
import H1Hero from 'components/H1Hero';
import FullPageContainer from 'components/FullPageContainer';
import ScrollDown from 'components/ScrollDown';
import TextTrailEffect from 'components/TextTrailEffect';
import downArrowBlack from '../../images/down_arrow_black.png';
// import messages from './messages';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';

//  side effects
import { loadRepos } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

//  ./components
import HeroButton from './HeroButton';
import HeroContainer from './HeroContainer';
import HeroContainerPassion from './HeroContainerPassion';
import HeroBGImage from './HeroBGImage';
import HeroMessageContainer from './HeroMessageContainer';
import Section from './Section';
import WarningClose from './WarningClose';
import WarningContainer from './WarningContainer';

import { setWarningActive } from './actions';
import { selectWarningActive } from './selectors';

const key = 'home';
const dataTextTrail = [
  {
    id: 'bunny',
    name: 'Bunny',
    text: 'Bunny',
  },
  {
    id: 'jean',
    name: 'Jean',
    text: 'Jean',
  },
  {
    id: 'noct',
    name: 'Noct',
    text: 'Noct',
  },
  {
    id: 'ethan',
    name: 'Ethan',
    text: 'Ethan',
  },
  // {
  //   id: 'shogun',
  //   name: 'Shogun',
  //   text: 'Shogun',
  // },
];

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
  // const buttonClsName = heroImageActive ? 'active' : 'inactive';
  const buttonClsName = classNames('white', {
    active: heroImageActive,
    inactive: heroImageActive,
  });

  return (
    <Fragment>
      <Helmet>
        <title>We are Passione</title>
        <meta name="We are Passione" content="The Vision of Passione" />
      </Helmet>
      <HeroContainer>
        {/* <HeroBGImage className={heroImageClsName} /> */}
        {warningActive && (
          <WarningContainer>
            <p>
              WARNING: This product contains passione. Passione is an addictive
              chemical.
            </p>
            <WarningClose onClick={() => setWarningActive(false)} />
            <HeroButton
              className={buttonClsName}
              onClick={() => setWarningActive(false)}
            >
              <H1>I understand</H1>
            </HeroButton>
          </WarningContainer>
        )}
        {/* <Section>
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
        </Section> */}
        <Section>
          <HeroMessageContainer>
            <HeroButton
              // as={Link}
              // to="/fam"
              className={buttonClsName}
              // onMouseEnter={() => setHeroBGImageActive(true)}
              // onFocus={() => setHeroBGImageActive(true)}
              // onClick={() => setHeroBGImageActive(true)}
              // onMouseLeave={() => setHeroBGImageActive(false)}
            >
              {/* <H1Hero>
                Passio<sup className="exponent">n</sup>e
              </H1Hero> */}
              <H1Hero>Passione</H1Hero>
            </HeroButton>
          </HeroMessageContainer>
        </Section>
        <ScrollDown>
          <img
            className="icon icon--image"
            src={downArrowBlack}
            alt="scroll down"
          />
        </ScrollDown>
      </HeroContainer>
      <FullPageContainer id="section-passion-def" className="center">
        <HeroContainerPassion className="white">
          <div className="word__container">
            {/* <div className="word__scroller">
              <h1 className="word word--current">pas·sion</h1>
              <h1 className="word">열정</h1>
            </div> */}
            <h1 className="word word--current">pas·sion</h1>
            <h2 className="phonetics">/ˈpaSHən/</h2>
          </div>
          <div className="definition__container">
            <p className="label">noun</p>
            <p className="definition">
              1. any powerful or compelling emotion or feeling, as{' '}
              <span className="quote__image">love</span> or{' '}
              <span className="quote__image">hate</span>.
            </p>
          </div>
        </HeroContainerPassion>
        <ScrollDown>
          <img
            className="icon icon--image"
            src={downArrowBlack}
            alt="scroll down"
          />
        </ScrollDown>
      </FullPageContainer>
      <FullPageContainer id="section-passione-members" className="center white">
        <TextTrailEffect data={dataTextTrail} />
        <ScrollDown>
          <img
            className="icon icon--image"
            src={downArrowBlack}
            alt="scroll down"
          />
        </ScrollDown>
      </FullPageContainer>
      <FullPageContainer id="section-passione-ending" className="center">
        <HeroContainerPassion className="white">
          <div className="word__container">
            <h1 className="word --f-w-regular --t-a-center">
              P1 coming 01.25.2020
            </h1>
            {/* <h2 className="phonetics">/ˈpaSHən/</h2> */}
          </div>
        </HeroContainerPassion>
      </FullPageContainer>
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
