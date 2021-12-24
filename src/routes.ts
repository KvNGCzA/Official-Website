interface routeType {
	name: string;
	path: string;
}

const routes: Array<routeType> = [
	{
		name: 'Home',
		path: 'https://deftify.io' 
	},
	{
		name: 'Instant Watch',
		path: '/' //path: "/instant-watch" <= supposedly, will edit when the platform is ready
	},
	{
		name: 'Indexes',
		path: '/' //path: "/deftify-indexes" <= supposedly, will edit when the platform is ready
	},
	{
		name: 'MetaCurse',
		path: '/' //path: "/play-n-earn" <= supposedly, will edit when the platform is ready
	},
	{
		name: 'Private  Access Pad',
		path: '/' //path: "/private-access-pad" <= supposedly, will edit when the platform is ready
	},
	{
		name: 'Staking',
		path: '/' //path: ""/staking" <= supposedly, will edit later
	},
	{
		name: 'Pitch Deck',
		path: 'https://docsend.com/view/vex4z4hgqzsftzvi' //path: ""/docs" <= supposedly, will edit later
	},
	{
		name: 'Team',
		path: '/team'
	}
];

export default routes;
