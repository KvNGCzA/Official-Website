import Spacing from '../../../../components/Spacing';
import './index.scss';

const uniqueRef2 = (): string => {
	return `ref-${Math.ceil(Math.random() * 10e13)}`;
};

const PARTNERS2: {
	image: string;
	key: string;
}[] = [
	{image: 'lead-wallet.svg', key: uniqueRef()},
	{image: 'unvest.svg', key: uniqueRef()},
	{image: 'gotbit-svg.svg', key: uniqueRef()},
	{image: 'polygon-partner.svg', key: uniqueRef()},
	{image: 'despace.svg', key: uniqueRef()},
	{image: 'dec-ventures.svg', key: uniqueRef()},
	{image: 'oasis-capital.svg', key: uniqueRef()},
	{image: 'averagemenvc-svg.svg', key: uniqueRef()}
];

export const Partners2 = () => {
	return (
		<Spacing
			style={{
				display:        'flex',
				flexDirection:  'column',
				alignItems:     'center',
				justifyContent: 'center'
			}}>
			<p className="section-text__title--small small">Our Partners & Investors</p>
			&nbsp;

			<div className="partner-cont">
				{PARTNERS2.map(partner => <div
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
