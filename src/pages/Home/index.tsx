import {PhotoSlider, Slide} from '../../components/PhotoSlider';
import {Accessibility} from './components/Accessibility';
import {Aggregator} from './components/Aggregator';
import {ContactForm} from '../../components/ContactForm';
import {Introduction} from './components/Introduction';
import {Partners} from './components/Partners';
import {PressReleases} from './components/PressReleases';
import {PlayToEarn} from './components/PlayToEarn';
import {PrivateAccessPad} from './components/PrivateAccessPad';
import './index.scss';

export const slides: Slide[] = [
  {
    caption: 'Deftify’s Private Access Pad grants access to untapped markets, especially in Africa',
    image:   './images/slide-one.svg'
  }, {
    caption: 'Deftify’s Instant Watch helps traders to analyze DeFi projects across different networks',
    image:   './images/slider-02.svg'
  },
  {
    caption: 'Deftify Indexes present opportunities on altcoins from alternative chains',
    image:   './images/slider-04.svg'
  }, {
    caption: 'Introducing Metacurse, Deftify’s own metaverse P2E game that will utilize Deftify token (DFTY)',
    image:   './images/slider-03.svg'
  }
];

export const Home = () => {
  return (
    <div>
      <div className="stroked-background">
        <Introduction />
        <PhotoSlider slides={slides} />
      </div>

      <PrivateAccessPad />

      <div className="stroked-background" style={{backgroundPosition: 'center 170px'}}>
        <PlayToEarn />
      </div>

      <Aggregator />
      <Partners />
      <PressReleases/>
      <Accessibility />

      <div
        className="stroked-background" style={{backgroundPosition: 'center 247px'}}>
        <ContactForm />
      </div>
    </div>
  );
};
