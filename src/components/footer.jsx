import React from 'react'
import {Navbar} from "react-bootstrap"

const styles = {
    text: {
        display: "flex",
        width: "100%",
        color: "white",
        justifyContent: "flex-end",
        fontFamily: "Ubuntu"
    },
    bold: {
        fontWeight: "bold"
    }
};

export default function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark">
            <div style={styles.text}>
                <span>powered by </span>
                <span style={styles.bold}>&ensp;Tupi</span>
            </div>
        </Navbar>
    )
}