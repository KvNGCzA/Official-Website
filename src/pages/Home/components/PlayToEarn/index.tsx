import RegularButton from '../../../../components/Button/Regular';
import Spacing from '../../../../components/Spacing';
import './index.scss';

export const PlayToEarn = () => {
	return (
		<Spacing className="play-to-earn-wrapper">
			<p className="section-text__title--small small">
				PLAY2EARN metaverse with a twist
			</p>
			<p className="section-text__title title">
				Introducing Deftify’s MetaCurse
			</p>
			<p className="section-text__description description">
				Deftify’s first incubated project is its own gaming project, MetaCurse - this is a P2E metaverse where you
				will need to stake Deftify token (DFTY) to use the NFT characters. You will then be able to earn MetaCurse
				token which serves as in-game currency.
			</p>
			<RegularButton
				background={'rgba(25, 28, 30, 1)'}
				color={'#FFFFFF'}
				fontFamily="Gilroy"
				fontWeight={800}
			>Coming Soon</RegularButton>
		</Spacing>
	);
};
