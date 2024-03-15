import Home from '../pages/Home.tsx'
import Dashboard from '../pages/Dashboard.tsx'
import About from '../pages/About.tsx'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/Dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      path: "/About",
      component: About,
      name: "About",
    }
];

export default routes