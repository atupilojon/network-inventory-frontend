import React from 'react'
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar";

const MainLayout = ({ children, ...rest }) => {
    return (
        <div id='screen'>
            <Header/>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'screen'}/>
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout;