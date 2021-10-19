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
    name: "Private Arena",
    path: "/private-arena",
  },
  {
    name: "Staking",
    path: "/staking",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export default routes;
