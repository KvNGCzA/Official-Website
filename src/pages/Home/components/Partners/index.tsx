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
			<div class="col-md-3">
			<a href="https://news.bitcoin.com/lead-wallet-launches-its-super-simple-application-even-your-grandma-would-be-able-to-use-it" target="_blank" style="color: black;">
			<img src="news/Image 106.png" style="max-width: 50%; margin-bottom:15px" alt="">
			<p>LEAD Wallet Launches Its Super Simple Application; Even Your Grandma Would Be Able to Use It</p>
			</a>
			</div>
			<div class="col-md-3">
			<a href="https://nairametrics.com/2020/09/01/lead-wallet-an-exclusive-defi-access-and-multi-cryptocurrency-management-application" target="_blank" style="color: black;">
			<img src="news/Group 4550.png" style="max-width: 50%; margin-bottom:15px" alt="">
			
			<p>Lead Wallet: An exclusive DeFi access and multi-cryptocurrency management application</p>
			</a>
			</div>
			<div class="col-md-3">
			<a href="https://btcpeers.com/lockdowns-and-social-distancing-a-promising-outlook-for-crypto-mainstream-adoption" target="_blank" style="color: black;">
			<img src="news/Image 108.png"  style="max-width: 50%; margin-bottom:15px"alt="">
			
			<p>Lockdowns and Social Distancing: A Promising Outlook for Crypto Mainstream Adoption</p>
			</a>
			</div>
			<div class="col-md-3">
			<a href="https://hackernoon.com/who-will-benefit-most-from-the-upcoming-bitcoin-halving-k23932g9" target="_blank" style="color: black;">
			<img src="news/hn-logo.png" style="max-width: 60%; margin-bottom:10px" alt="">
			
			<p cla> The cryptocurrency market is once again seeing volatility after Bitcoin started to crash after last week's surge </p>
			</a>
			</div>
		</Spacing>
	);
};
