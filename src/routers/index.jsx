import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import PrivateRouters from "./PrivateRouters";

import Dashboard from "../pages/dashboard";
import Team from "../pages/team";
import Invoices from "../pages/invoices";
import Contacts from "../pages/contacts";
import Bar from "../pages/bar";
import Form from "../pages/form";
import Line from "../pages/line";
import Pie from "../pages/pie";
import FAQ from "../pages/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Calendar from "../pages/calendar/calendar";
import Login from "../pages/login/Login";

export const publicRouters = [
    {
        path: "/login",
        name: "login",
        component: Login,
        layout: null,
    },
    {
        path: "/error",
        name: "error",
        component: Error,
        layout: null,
    },
];

export const privateRouters = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        layout: DefaultLayout,
    },
    {
        path: "/team",
        name: "team",
        component: Team,
        layout: DefaultLayout,
    },
    {
        path: "/invoices",
        name: "invoices",
        component: Invoices,
        layout: DefaultLayout,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: Contacts,
        layout: DefaultLayout,
    },
    {
        path: "/bar",
        name: "bar",
        component: Bar,
        layout: DefaultLayout,
    },
    {
        path: "/form",
        name: "form",
        component: Form,
        layout: DefaultLayout,
    },
    {
        path: "/line",
        name: "line",
        component: Line,
        layout: DefaultLayout,
    },
    {
        path: "/pie",
        name: "pie",
        component: Pie,
        layout: DefaultLayout,
    },
    {
        path: "/FAQ",
        name: "FAQ",
        component: FAQ,
        layout: DefaultLayout,
    },
    {
        path: "/calendar",
        name: "calendar",
        component: Calendar,
        layout: DefaultLayout,
    },
];

//Scroll Top when clicked another page
function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}

export const RouterComponents = () => {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <div className="App">
                        <ScrollToTop />
                        <Routes>
                            {publicRouters.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                            <Route exact path="/" element={<PrivateRouters />}>
                                {privateRouters.map((route, index) => {
                                    const Page = route.component;
                                    let Layout = DefaultLayout;
                                    if (route.layout) {
                                        Layout = route.layout;
                                    } else if (route.layout === null) {
                                        Layout = Fragment;
                                    }
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            }
                                        />
                                    );
                                })}
                            </Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
         </ColorModeContext.Provider>
    );
};
