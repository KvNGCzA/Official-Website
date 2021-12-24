import {ReactComponent as Polygon} from '../../../../assets/Icons/polygon.svg';
import {ReactComponent as Wave} from '../../../../assets/images/wave.svg';
import Spacing from '../../../../components/Spacing';
import Text from '../../../../components/Typography';
import './index.scss';

export const Accessibility = () => {
	return (
		<Spacing className="accessibility-wrapper">
			<p className="section-text__title--small small">BUILT FOR ACCESSIBILITY</p>

			<Text className="powered-by-text">
				<span>Powered by</span> <a href="https://polygon.technology/"><Polygon /></a>
			</Text>

			<p className="section-text__description description">
				Deftify is utilizing Polygon’s fast blockchain. Deftify will benefit from Polygon’s low cost transaction and
				ultra fast transaction speed.
			</p>

			<Wave className="wave" />
		</Spacing>
	);
};
