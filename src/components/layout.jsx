import React from 'react'

const MainLayout = ({ children, ...rest }) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout;