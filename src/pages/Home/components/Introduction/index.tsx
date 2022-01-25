import {useEffect, useState } from 'react';
import {PlayIcon} from '../../../../assets/Icons';
import OutlinedButton from '../../../../components/Button/Outlined';
import RegularButton from '../../../../components/Button/Regular';
import Flex from '../../../../components/Flex';
import Spacing from '../../../../components/Spacing';
import Typist from "react-typist";
import './index.scss';

const SECTION_TITLES = [
  'a metaverse gaming platform (Metacurse)',
  'a Private Access Pad for founders and investors',
  'a market data aggregator built for crypto traders, investors, enthusiasts and researchers'
]

export const Introduction = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Spacing margin="auto" padding="0 20px 20px" className="intro-wrapper">
      <div className="section-text__title-wrapper">
        {count ?
          <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
            <p className="section-text__title">
              Deftify is - {SECTION_TITLES[0]}
            <Typist.Backspace count={SECTION_TITLES[0].length} delay={800} />
              {SECTION_TITLES[1]}
            <Typist.Backspace count={SECTION_TITLES[1].length} delay={800} />
              {SECTION_TITLES[2]}
            <Typist.Backspace count={SECTION_TITLES[2].length} delay={800} />
            </p>
          </Typist> : null
        }
      </div>

      <p className="section-text__description description">
        The world’s first Africa-focused crypto incubator and launchpad offering investors private round
        access to
        cutting-edge African innovation. In addition, our diverse index funds and integrated portfolio management tools
        give investors an edge not available on other launchpads
      </p>

      {/*buttons*/}
      <Spacing>
        <Flex flexDirectionSm="column">
          <a
            href="./docs/deftify_whitepaper.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <RegularButton stretch mr="40px" marginRightSm="0px" marginBottomSm="20px">
              Whitepaper
            </RegularButton>
          </a>

          <Spacing>
            <a
              href="./docs/deftify_pitchdeck.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <OutlinedButton backgroundColor="transparent">
                <PlayIcon style={{marginRight: 10}} />
                Pitch Deck
              </OutlinedButton>
            </a>
          </Spacing>
        </Flex>
      </Spacing>
      {/*end of buttons*/}
    </Spacing>
  );
};
