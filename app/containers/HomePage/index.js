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

// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

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
// import downArrowBlack from '../../images/down_arrow_black.png';
import chibi from '../../images/chibi_800.png';
// import messages from './messages';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';

//  side effects
// import { loadRepos } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

//  ./components
import EndingParrallax from './EndingParrallax';
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

export class HomePage extends React.PureComponent {
  state = {
    heroImageActive: false,
    video1Active: false,
    video2Active: false,
  };

  setHeroBGImageActive = active => {
    this.setState(() => ({
      heroImageActive: active,
    }));
  };

  setVideo1Active = active => {
    this.setState(() => ({
      video1Active: active,
    }));
  };

  setVideo2Active = active => {
    this.setState(() => ({
      video2Active: active,
    }));
  };

  scrollIntoViewById(id) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  }

  render() {
    const { warningActive } = this.props;
    // const { warningActive, setWarningActive } = this.props;
    const { heroImageActive, video1Active, video2Active } = this.state;
    const { setHeroBGImageActive, setVideo1Active, setVideo2Active } = this;
    // useInjectReducer({ key, reducer });
    // useInjectSaga({ key, saga });

    // const [heroImageActive, setHeroBGImageActive] = useState(false);
    // const [video1Active, setVideo1Active] = useState(false);
    // const [video2Active, setVideo2Active] = useState(false);

    const heroImageClsName = heroImageActive ? 'active' : 'inactive';
    // const warningClsName = heroImageActive ? 'inactive' : 'active';
    // const buttonClsName = heroImageActive ? 'active' : 'inactive';
    const buttonClsName = classNames('white', {
      active: heroImageActive,
      inactive: heroImageActive,
    });

    return (
      <Fragment>
        {/* <Parallax ref={ref => (this.parallax = ref)} pages={5}> */}
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
                <WarningClose
                  onClick={() => this.props.setWarningActive(false)}
                />
                <HeroButton
                  className={buttonClsName}
                  onClick={() => this.props.setWarningActive(false)}
                >
                  <H1 className="--f-f-arial">I understand</H1>
                </HeroButton>
              </WarningContainer>
            </ScrollLock>
          )}
          <HeroMessageContainer>
            <HeroButton
              // as={Link}
              // to="/fam"
              className={buttonClsName}
              onClick={() => this.scrollIntoViewById('section-passion-def')}
              // onMouseEnter={() => setHeroBGImageActive(true)}
              // onFocus={() => setHeroBGImageActive(true)}
              // onClick={() => setHeroBGImageActive(true)}
              // onMouseLeave={() => setHeroBGImageActive(false)}
            >
              <H1Hero>
                Pas
                <br className="mobile-break" />
                sio
                <br className="mobile-break" />
                ne
              </H1Hero>
            </HeroButton>
          </HeroMessageContainer>
        </HeroContainer>
        <FullPageContainer id="section-passion-def" className="center padding">
          <SpazzVideo
            id="video-1"
            className={video1Active ? 'active' : 'inactive'}
            // className={true ? 'active' : 'inactive'}
          >
            <video muted src={videoTony1} autoPlay loop />
          </SpazzVideo>
          <SpazzVideo
            id="video-2"
            className={video2Active ? 'active' : 'inactive'}
          >
            <video muted src={videoPSGlitch} autoPlay loop />
          </SpazzVideo>
          <HeroContainerPassion className="white --z-i-2">
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
          <ScrollDown
            className="chibi"
            onClick={() => this.scrollIntoViewById('section-passione-members')}
          >
            <img className="icon icon--image" src={chibi} alt="scroll down" />
          </ScrollDown>
        </FullPageContainer>
        <FullPageContainer
          id="section-passione-members"
          className="center white-mobile"
        >
          <TextTrailEffect />
        </FullPageContainer>
        <FullPageContainer id="section-passione-ending" className="center">
          <EndingParrallax />
          <Footer />
        </FullPageContainer>
      </Fragment>
    );
  }
}

const withReducer = injectReducer({ key, reducer });
const withSaga = injectSaga({ key, saga });

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
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
    setWarningActive: active => dispatch(setWarningActive(active)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo,
)(HomePage);
