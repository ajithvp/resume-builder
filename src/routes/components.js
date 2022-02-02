import React from "react";

export const components = {
    landingPage: React.lazy(() => import("../components/landingPage/Index")),
    createResume: React.lazy(() => import("../components/createResume/Index")),
    viewResume: React.lazy(() => import("../components/viewResume/Index")),
    notFound: React.lazy(() => import("../components/common/PageNotFound")),
};
