import {PhotoSlider, Slide} from '../../../../components/PhotoSlider';
import Spacing from '../../../../components/Spacing';
import './index.scss';

const uniqueRef = (): string => {
	return `ref-${Math.ceil(Math.random() * 10e13)}`;
};

const aggregatorImages = [
	{
		image: '/images/instant-watch-2.svg',
		style: {marginRight: '44px'},
		key:   uniqueRef()
	}, {
		image: '/images/instant-watch.svg',
		key:   uniqueRef()
	}
];

const slides: Slide[] = aggregatorImages.map(aggregator => ({image: aggregator.image}));

export const Aggregator = () => {
	return (
		<Spacing className="aggregator-wrapper">
			<p className="section-text__title title">
				Instant Watch
			</p>
			<p className="section-text__description description">
				Deftify's Instant Watch is a powerful resource for traders who are looking for a deeper understanding of the
				cryptocurrency market and want to analyze specific events. Deftify will provide huge resources under its Market
				Data Aggregator platform
			</p>

			<Spacing
				className="aggregator-images">
				{aggregatorImages.map(aggregator => <img
					src={aggregator.image}
					alt={''}
					style={aggregator.style}
					key={aggregator.key}
				/>)}
			</Spacing>

			<div className="photo-slider">
				<PhotoSlider slides={slides} />
			</div>
		</Spacing>
	);
};
