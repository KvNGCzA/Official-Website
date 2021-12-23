interface routeType {
	name: string;
	path: string;
}

const routes: Array<routeType> = [
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
		name: 'Docs',
		path: '/' //path: ""/docs" <= supposedly, will edit later
	},
	{
		name: 'Team',
		path: '/team'
	},
	{
		name: 'Contact Us',
		path: '/' //path: ""/contact-us" <= supposedly, will edit later
	}
];

export default routes;
