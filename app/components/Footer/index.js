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
        href="https://www.instagram.com/passionephruit/"
      >
        ig
      </ButtonSocial>
      <ButtonSocial
        target="_blank"
        href="https://www.facebook.com/Passionephruit/"
      >
        fb
      </ButtonSocial>
      <ButtonSocial
        target="_blank"
        href="https://www.twitter.com/Passionephruit/"
      >
        tw
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
