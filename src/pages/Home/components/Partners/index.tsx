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
	{image: 'unvest.svg', key: uniqueRef()},
	{image: 'gotbit-svg.svg', key: uniqueRef()},
	{image: 'polygon-partner.svg', key: uniqueRef()},
	{image: 'despace.svg', key: uniqueRef()},
	{image: 'dec-ventures.svg', key: uniqueRef()},
	{image: 'oasis-capital.svg', key: uniqueRef()},
	{image: 'averagemenvc-svg.svg', key: uniqueRef()}
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
			<p className="section-text__title--small small">Our Partners & Investors</p>
			&nbsp;

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
			&nbsp;
			<p className="section-text__title--small small">Deftify On The Media</p>
			&nbsp;
			<div className="row">
			<div className="column">
			<a href="https://www.marketwatch.com/press-release/deftify-builds-the-first-africa-focused-crypto-incubator-and-launchpad-2022-01-04" target="_blank" rel="noreferrer">
			<img src="images/marketwatch.png" alt="marketwatch"></img>
			<p className="section-text__description description">Deftify Builds the First Africa-Focused Crypto Incubator and Launchpad</p>
			</a>
  </div>
  <div className="column">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
  <div className="column">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  <div className="column">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
  </div>
			
		</Spacing>
	);
};
