import {PlayIcon} from '../../../../assets/Icons';
import OutlinedButton from '../../../../components/Button/Outlined';
import RegularButton from '../../../../components/Button/Regular';
import Flex from '../../../../components/Flex';
import Spacing from '../../../../components/Spacing';
import './index.scss';

export const Introduction = () => (
	<Spacing margin="auto" padding="0 20px 20px" className="intro-wrapper">
		{/* Intro text */}
		<p className="section-text__title">
			Deftify - crypto without compromise
		</p>

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
