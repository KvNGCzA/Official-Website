import Spacing from '../../../../components/Spacing';
import './index.scss';

const uniqueRef = (): string => {
	return `ref-${Math.ceil(Math.random() * 10e13)}`;
};

const PARTNERS: {
	image: string;
	key: string;
}[] = [
	{image: 'lead-wallet.svg', key: uniqueRef()},
	{image: 'race-capital.svg', key: uniqueRef()},
	{image: 'jump-capital.svg', key: uniqueRef()},
	{image: 'solana-foundation.svg', key: uniqueRef()},
	{image: 'race-capital.svg', key: uniqueRef()},
	{image: 'social-capital.svg', key: uniqueRef()},
	{image: 'jump-capital.svg', key: uniqueRef()},
	{image: 'solana-foundation.svg', key: uniqueRef()}
];

export const Partners = () => {
	return (
		<Spacing
			style={{
				display:        'flex',
				flexDirection:  'column',
				alignItems:     'center',
				justifyContent: 'center'
			}}>
			<p className="section-text__title--small small">Our Partners</p>

			<p className="section-text__description description">List of our partners</p>

			<div className="partner-cont">
				{PARTNERS.map(partner => <div
					className="partner"
					key={partner.key}
					style={{
						background:     `url('./images/${partner.image}') no-repeat center center`,
						backgroundSize: '69% auto'
					}}
				>
				</div>)}
			</div>
		</Spacing>
	);
};
