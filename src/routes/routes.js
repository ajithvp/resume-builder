import PublicRoute from "./PublicRoute";
import { components } from "./components";

export const RBRoutes = [
    {
        path: "/",
        name: "landingPage",
        exact: true,
        component: components.landingPage,
        route: PublicRoute,
    },
    {
        path: "/create-resume",
        name: "createResume",
        exact: true,
        component: components.createResume,
        route: PublicRoute,
    },
    {
        path: "/view-resume",
        name: "viewResume",
        exact: true,
        component: components.viewResume,
        route: PublicRoute,
    },
    {
        path: "*",
        name: "All",
        exact: true,
        component: components.notFound,
        route: PublicRoute,
    },
];