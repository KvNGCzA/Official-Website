import {PhotoSlider, Slide} from '../../components/PhotoSlider';
import {Accessibility} from './components/Accessibility';
import {Aggregator} from './components/Aggregator';
import {ContactForm} from '../../components/ContactForm';
import {Introduction} from './components/Introduction';
import {Partners} from './components/Partners';
import {PlayToEarn} from './components/PlayToEarn';
import Typist from "react-typist";
import {PrivateAccessPad} from './components/PrivateAccessPad';
import './index.scss';
import {useEffect, useState} from 'react';

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

const SECTION_TITLES = [
  'an Africa-focused crypto incubator and launchpad',
  'a market data aggregator built for crypto traders, investors, enthusiasts and researchers',
  'an index funds provide exposure to alternative chains that are not available elsewhere',
  'a metaverse gaming platform (Metacurse)',
];

export const Home = () => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div>
      <div className="section-text__title-wrapper">
        {count ?
          <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
            <p className="section-text__title">
              Deftify is {SECTION_TITLES[0]}
              <Typist.Backspace count={SECTION_TITLES[0].length} delay={800} />
              {SECTION_TITLES[1]}
              <Typist.Backspace count={SECTION_TITLES[1].length} delay={800} />
              {SECTION_TITLES[2]}
              <Typist.Backspace count={SECTION_TITLES[2].length} delay={800} />
            </p>
          </Typist> : null
        }
      </div>

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
      <Accessibility />

      <div
        className="stroked-background" style={{backgroundPosition: 'center 247px'}}>
        <ContactForm />
      </div>
    </div>
  );
};
