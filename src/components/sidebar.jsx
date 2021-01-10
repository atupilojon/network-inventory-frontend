import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default function SideBar() {
    return (
        <Menu>
            <a className='menu-item'>
                Devices
            </a>
            <a className='menu-item'>
                Connections
            </a>
            <a className='menu-item'>
                IP Addresses
            </a>
        </Menu>
    )
}