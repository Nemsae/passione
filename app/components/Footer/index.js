import React from 'react';
import { FormattedMessage } from 'react-intl';

import ButtonSocial from 'components/ButtonSocial';

// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
// import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <ButtonSocial
        target="_blank"
        href="https://www.facebook.com/Passionephruit/"
      >
        <i className="fab fa-facebook" />
      </ButtonSocial>
      <ButtonSocial
        className="primary"
        target="_blank"
        href="https://www.instagram.com/passionephruit/"
      >
        <i className="fab fa-instagram" />
      </ButtonSocial>
      <ButtonSocial
        target="_blank"
        href="https://www.twitter.com/Passionephruit/"
      >
        <i className="fab fa-twitter" />
      </ButtonSocial>
      {/* <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section> */}
    </Wrapper>
  );
}

export default Footer;
