import {PhotoSlider, Slide} from '../../components/PhotoSlider';
import {Accessibility} from './components/Accessibility';
import {Aggregator} from './components/Aggregator';
import {ContactForm} from './components/ContactForm';
import {Introduction} from './components/Introduction';
import {Partners} from './components/Partners';
import {PlayToEarn} from './components/PlayToEarn';
import {PrivateAccessPad} from './components/PrivateAccessPad';
import './index.scss';

export const slides: Slide[] = [
	{
		caption: 'Deftify’s Private Access Pad will grant access to untapped markets, especially in Africa',
		image:   './images/slide-one.svg'
	}, {
		caption: 'Deftify’s Market Data Aggregator will help you to analyze and compare DeFi projects across different chains',
		image:   './images/slider-02.svg'
	},
	{
		caption: 'Introducing MetaCurse, Deftify incubated game bla bla',
		image:   './images/slider-03.svg'
	}, {
		caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
		image:   './images/slide-two.svg'
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
			<Accessibility />

			<div
				className="stroked-background" style={{backgroundPosition: 'center 247px'}}>
				<ContactForm />
			</div>
		</div>
	);
};
