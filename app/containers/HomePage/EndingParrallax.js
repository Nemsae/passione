import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

//  components
import TextWithIcon from 'components/TextWithIcon';
import H1 from 'components/H1';
import IconUnderline from '../../icons/underline';
// import messages from './messages';

import cssVars from '../../cssVariables';
//  ./components
import HeroButton from './HeroButton';
import HeroContainer from './HeroContainer';
import HeroContainerPassion from './HeroContainerPassion';
import HeroBGImage from './HeroBGImage';
import HeroMessageContainer from './HeroMessageContainer';

// export class EndingParrallax extends React.Component {
//   render() {
//     return (
//       <Parallax ref={ref => (this.parallax = ref)} pages={3}>
//         <ParallaxLayer
//           // factor={1}
//           offset={2}
//           speed={1}
//           style={{ backgroundColor: '#805E73' }}
//         >
//           <HeroContainerPassion className="white">
//             <div className="word__container">
//               <h1 id="farewell-text" className="word --f-w-regular --t-a-center">
//                 <span className="album-font">Passione N°1</span>
//                 {/* Passione N°1 */}
//                 <br /> coming{' '}
//                 <TextWithIcon className="underline">
//                   01.25.2020
//                   <IconUnderline className="icon-underline" />
//                 </TextWithIcon>
//               </h1>
//             </div>
//           </HeroContainerPassion>
//         </ParallaxLayer>
//       </Parallax>
//     );
//   }
// }
export class EndingParrallax extends React.Component {
  render() {
    return (
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
    );
  }
}

export default EndingParrallax;
