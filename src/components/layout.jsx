import React from 'react'
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sidebar";

const MainLayout = ({ children, ...rest }) => {

    const styleMainView = {
        display: 'inline-grid',
        gridTemplateColumns: 'auto auto',
        gridColumnGap: '0.75vw',
        height: '100vh'
    }

    return (
        <div>
            <Header/>
            <div style={styleMainView}>
                <SideBar/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;