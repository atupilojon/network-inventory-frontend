import React from 'react'
import {Navbar} from "react-bootstrap"
import {MdAccountBalance} from 'react-icons/md'

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><MdAccountBalance/></Navbar.Brand>
        </Navbar>
    )
}