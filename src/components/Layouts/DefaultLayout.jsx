import React from "react";
import "./DefaultLayout.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Topbar />
            <div className="body">
                <div className="nav">
                    <Sidebar />
                </div>

                <div className="component">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
