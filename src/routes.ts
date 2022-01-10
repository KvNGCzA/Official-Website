interface routeType {
	name: string;
	path: string;
  type?: 'external';
}

const routes: routeType[]  = [
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
    type: 'external',
		name: 'MetaCurse',
		path: 'https://metacurse.gg/' //path: "/play-n-earn" <= supposedly, will edit when the platform is ready
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