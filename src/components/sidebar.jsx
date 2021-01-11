import React, { useState} from 'react'
import {GoCircuitBoard} from 'react-icons/go'
import {GoThreeBars} from 'react-icons/go'

export default function SideBar() {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(prevState => !prevState)
        console.log(show)
    }

    const style = {
        menu: {
            fontSize: '3rem',
            paddingLeft: '0.75vw'
        }
    }

    const collapsed = <GoCircuitBoard style={style.menu} type='button' onClick={handleShow}/>
    const listMenu = <GoThreeBars style={style.menu} type='button' onClick={handleShow}/>

    return (
        <div>
            { show ?
                (collapsed)
                :
                (listMenu)
            }
        </div>
    )
}