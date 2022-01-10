interface routeType {
	name: string;
	path: string;
}

const routes: Array<routeType> = [
	{
		name: 'Home',
		path: '/' 
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
		path: 'https://metacurse.gg/' 
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
		name: 'Team',
		path: '/team'
	}
];

export default routes;
