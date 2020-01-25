import React from 'react';
import { FormattedMessage } from 'react-intl';

//  utils
import { scrollIntoViewById } from 'utils/window';

// import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

import logoSrc from '../../images/logo-192x192.png';

function Header() {
  return (
    <NavBar>
      <HeaderLink
        to="/"
        onClick={() => scrollIntoViewById('landing-container')}
      >
        <Img src={logoSrc} alt="Passione Phruit Logo" />
      </HeaderLink>
      {/* <HeaderLink to="/fam">
        <FormattedMessage {...messages.fam} />
      </HeaderLink> */}
    </NavBar>
  );
}

export default Header;
