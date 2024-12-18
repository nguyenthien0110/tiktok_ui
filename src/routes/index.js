import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import UpLoad from "../pages/UpLoad";
import HeaderOnly from "../components/Layout/HeaderOnly";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: UpLoad, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
