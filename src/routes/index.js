import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import UpLoad from "../pages/Upload";
import Search from "../pages/Search";
import HeaderOnly from "../components/Layout/DefaultLayout/HeaderOnly";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: UpLoad, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
