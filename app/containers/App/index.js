/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Cursor from 'containers/Cursor';

import HomePage from 'containers/HomePage/Loadable';
import ChatPage from 'containers/ChatPage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;

  display: grid;
  /* grid-template-rows: 0 1fr; */
  grid-template-rows: 100%;
  grid-template-columns: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="Passione" defaultTitle="Passione">
        <meta name="description" content="Passione - " />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/fam" component={ChatPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
      {/* <Cursor /> */}
    </AppWrapper>
  );
}
