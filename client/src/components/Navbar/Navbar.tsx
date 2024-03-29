import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const activeStyle = {
    color: 'rgb(var(--accent-blue))',
    textShadow: 'rgb(var(--accent-blue)) 1px 0 10px'
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    let activeUrl:string = window.location.href

    return (
        <nav>
            <img src="../src/assets/phoenixv5.png" alt="Phoenix Logo, KR" id={styles.logo} onClick={() => navigate('/')} className='p-[0.35rem] scale-1 hover:scale-[1.1] hover:drop-shadow-accent-blue'/>
            <ul id={styles.links}>
                <li className='transition-transform scale-x-100 hover:scale-x-[1.1] hover:drop-shadow-accent-blue'><Link to={'/'} style={activeUrl == 'http://localhost:5174/' ? activeStyle : {}}>Home</Link></li>
                <li className='transition-transform scale-x-100 hover:scale-x-[1.1] hover:drop-shadow-accent-blue'><Link to={'/about'} style={activeUrl == 'http://localhost:5174/about' ? activeStyle : {}}>About Me</Link></li>
                <li className='transition-transform scale-x-100 hover:scale-x-[1.1] hover:drop-shadow-accent-blue'><Link to={'/work'} style={activeUrl == 'http://localhost:5174/work' ? activeStyle : {}}>My Work</Link></li>
                <li className='transition-transform scale-x-100 hover:scale-x-[1.1] hover:drop-shadow-accent-blue'><Link to={'/contact'} style={activeUrl == 'http://localhost:5174/contact' ? activeStyle : {}}>Contact</Link></li>
            </ul>
            <div id={styles.menu}>
                <img src="../src/assets/menu-icon.png" alt="menu icon" className='w-[100%] object-contain object-right transition-transform duration-200 scale-y-100 hover:scale-y-125' id={styles.menuIcon} onClick={() => setOpen(prev => !prev)}/>
                {
                    open && <ul id={styles.linkMenu} className='w-[100%]' style={{right: !open ? '0px' : '5vw'}}>
                        <li className='w-[100%]'><Link to={'/'} style={activeUrl == 'http://localhost:5174/' ? activeStyle : {}} onClick={() => setOpen(false)}>Home</Link></li>
                        <li className='w-[100%]'><Link to={'/about'} style={activeUrl == 'http://localhost:5174/about' ? activeStyle : {}} onClick={() => setOpen(false)}>About Me</Link></li>
                        <li className='w-[100%]'><Link to={'/work'} style={activeUrl == 'http://localhost:5174/work' ? activeStyle : {}} onClick={() => setOpen(false)}>My Work</Link></li>
                        <li className='w-[100%]'><Link to={'/contact'} style={activeUrl == 'http://localhost:5174/contact' ? activeStyle : {}} onClick={() => setOpen(false)}>Contact</Link></li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar
