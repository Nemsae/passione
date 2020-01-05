import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <NavBar>
      <HeaderLink to="/">P</HeaderLink>
      <HeaderLink to="/fam">
        <FormattedMessage {...messages.fam} />
      </HeaderLink>
    </NavBar>
  );
}

export default Header;
