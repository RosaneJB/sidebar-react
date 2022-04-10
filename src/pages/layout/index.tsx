import { useState } from "react";
import './style.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {TiMessages} from 'react-icons/ti'
import {IoMdPhotos, IoMdSettings} from 'react-icons/io'
import { Link } from "react-router-dom";

export const Layout = ({ children }: { children: JSX.Element }) => {
    const [navigationIsOpen, setNavigationIsOpen] = useState(true)
    const toggleNavigation = () => {
        setNavigationIsOpen(!navigationIsOpen)
    }
    const toggleActiveLink = (event: any) => {
        event.target.parentElement.parentElement.parentElement.childNodes.forEach((child: any) => child.classList.remove('active'))
        event.target.parentElement.parentElement.classList.toggle('active')

    }

    return (
        <>
        <div id="wrapper">
        <div className={`navigation ${navigationIsOpen ? 'open' : ''}`}>
                <div className="menuToggle" onClick={toggleNavigation}></div>
                <ul>
                    <li className="list" onClick={(event) => toggleActiveLink(event)}>
                        <Link to="/">
                            <span className="icon home-bg" style={{ ['--clr' as any]: '#f44336' }}><AiFillHome /></span>
                            <span className="text home-bg">Home</span>
                        </Link>
                    </li>
                    <li className="list" onClick={(event) => toggleActiveLink(event)}>
                        <Link to="/about">
                            <span className="icon person-bg" style={{ ['--clr' as any]: '#ffa117' }}><BsFillPersonFill/></span>
                            <span className="text person-bg">About</span>
                        </Link>
                    </li>
                    <li className="list" onClick={(event) => toggleActiveLink(event)}>
                        <Link to="/messages">
                            <span className="icon chatBoxes-bg" style={{ ['--clr' as any]: '#0fc70f' }}><TiMessages /></span>
                            <span className="text chatBoxes-bg">Messages</span>
                        </Link>
                    </li>
                    <li className="list" onClick={(event) => toggleActiveLink(event)}>
                        <Link to="/photos">
                            <span className="icon camera-bg" style={{ ['--clr' as any]: '#2196f3' }}><IoMdPhotos /></span>
                            <span className="text camera-bg">Photos</span>
                        </Link>
                    </li>
                    <li className="list" onClick={(event) => toggleActiveLink(event)}>
                        <Link to="/settings">
                            <span className="icon settings-bg" style={{ ['--clr' as any]: '#b145e9' }}><IoMdSettings /></span>
                            <span className="text settings-bg">Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </div>
        </>
    )
}