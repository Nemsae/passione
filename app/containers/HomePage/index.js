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
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { createStructuredSelector } from 'reselect';
import ScrollLock from 'react-scrolllock';
import classNames from 'classnames';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

//  images/icons

//  components
import Footer from 'components/Footer';
import TextWithIcon from 'components/TextWithIcon';
import H1 from 'components/H1';
import H1Hero from 'components/H1Hero';
import FullPageContainer from 'components/FullPageContainer';
import ScrollDown from 'components/ScrollDown';
import SpazzVideo from 'components/SpazzVideo';
import TextTrailEffect from 'components/TextTrailEffect';
import videoTony1 from '../../images/tony-1.mp4';
import videoPSGlitch from '../../images/ps_video_glitch.mp4';
import IconUnderline from '../../icons/underline';
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


export function HomePage({
  warningActive,
  setWarningActive,
  error,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [heroImageActive, setHeroBGImageActive] = useState(false);
  const [video1Active, setVideo1Active] = useState(false);
  const [video2Active, setVideo2Active] = useState(false);
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
        <meta name="We are Passione" content="Make You Feel" />
      </Helmet>
      <HeroContainer>
        {/* <HeroBGImage className={heroImageClsName} /> */}
        {warningActive && (
          <ScrollLock>
            <WarningContainer className="--lock-scroll">
              <p>
                WARNING: This product contains passione. Passione is an
                addictive chemical.
              </p>
              <WarningClose onClick={() => setWarningActive(false)} />
              <HeroButton
                className={buttonClsName}
                onClick={() => setWarningActive(false)}
              >
                <H1 className="--f-f-arial">I understand</H1>
              </HeroButton>
            </WarningContainer>
          </ScrollLock>
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
            <H1Hero>
              Pas
              <br className="mobile-break" />
              sio
              <br className="mobile-break" />
              ne
            </H1Hero>
          </HeroButton>
        </HeroMessageContainer>
        <ScrollDown>
          <img
            className="icon icon--image"
            src={downArrowBlack}
            alt="scroll down"
          />
        </ScrollDown>
      </HeroContainer>
      <FullPageContainer id="section-passion-def" className="center padding">
        {video1Active && (
          <SpazzVideo
            id="video-1"
            className={video1Active ? 'active' : 'inactive'}
            // className={true ? 'active' : 'inactive'}
          >
            <video muted src={videoTony1} autoPlay />
          </SpazzVideo>
        )}
        {video2Active && (
          <SpazzVideo
            id="video-2"
            className={video2Active ? 'active' : 'inactive'}
          >
            <video muted src={videoPSGlitch} autoPlay />
          </SpazzVideo>
        )}
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
              <TextWithIcon
                className="underline bottom-sm"
                onMouseEnter={() => setVideo1Active(true)}
                onClick={() => setVideo1Active(true)}
                onMouseLeave={() => setVideo1Active(false)}
              >
                love
                <IconUnderline className="icon-underline" />
              </TextWithIcon>{' '}
              or{' '}
              <TextWithIcon
                className="underline bottom-sm"
                onMouseEnter={() => setVideo2Active(true)}
                onClick={() => setVideo2Active(true)}
                onMouseLeave={() => setVideo2Active(false)}
              >
                hate
                <IconUnderline className="icon-underline" />
              </TextWithIcon>
              .
              {/* <span className="quote__image">love</span> or{' '}
              <span className="quote__image">hate</span>. */}
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
        <TextTrailEffect />
        {/* <ScrollDown>
          <img
            className="icon icon--image"
            src={downArrowBlack}
            alt="scroll down"
          />
        </ScrollDown> */}
      </FullPageContainer>
      <FullPageContainer id="section-passione-ending" className="center">
        <HeroContainerPassion className="white">
          <div className="word__container">
            <h1 id="farewell-text" className="word --f-w-regular --t-a-center">
              <span className="album-font">Passione N°1</span>
              {/* Passione N°1 */}
              <br /> coming{' '}
              <TextWithIcon className="underline">
                01.25.2020
                <IconUnderline className="icon-underline" />
              </TextWithIcon>
            </h1>
          </div>
        </HeroContainerPassion>
        <Footer />
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
