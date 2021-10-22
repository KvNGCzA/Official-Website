interface routeType {
  name: string;
  path: string;
}

const routes: Array<routeType> = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Instant Watch",
    path: "/instant-watch",
  },
  {
    name: "Deftify Indexes",
    path: "/deftify-indexes",
  },
  {
    name: "Play n’Earn",
    path: "/play-n-earn",
  },
  {
    name: "Private  Access Pad",
    path: "/private-access-pad",
  },
  {
    name: "Staking",
    path: "/staking",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export default routes;
