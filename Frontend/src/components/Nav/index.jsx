import React, {useState} from 'react'
import Brochure from '../../assets/pdf/P&O.pdf'
import Logo from '../../assets/logo.png';
import RightArrow from '../../assets/icon_rightArrow.svg';
import '../../styles/Nav/index.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const [nav, setNav] = useState(true)

    !nav ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    const handleNav = () => {
        setNav(!nav)
    }

    const handleOverflow = () => {
        setNav(true)
    }

    return (
        <nav className='navbar'>
            <div className='navbar__left'>
                <img className='navbar__left-logo' src={Logo} alt='Logo' />
            </div>
            <ul className='navbar__mid'>
                <li className='navbar__mid-list'>
                    <a className='navbar__mid-list-links' href='/'>
                        Home
                    </a>
                    <a className='navbar__mid-list-links' href='/about-us'>
                        About us
                    </a>
                    <a className='navbar__mid-list-links' href='/services'>
                        Services
                    </a>
                    <a className='navbar__mid-list-links' href='/photos'>
                        Gallery
                    </a>
                    <a href={Brochure} className='navbar__mid-list-links' download>Brochure</a>
                </li>
            </ul>
            <a href='/contact' className='navbar__btn c-btn arrow-anim animHover'>
                <span className='c-btn_text'>Contact us</span>
                <img
                    className='c-btn_icon'
                    width={18}
                    height={18}
                    src={RightArrow}
                    alt='right-arrow'
                />
            </a>

            <button className='navbar__hamburger' onClick={handleNav}>
                {nav ?
                    <GiHamburgerMenu /> : <RxCross2 />}
            </button>
            {!nav && (<ul className='navbar__responsiveNav'>
                <li className='navbar__mid-list'>
                    <a className='navbar__mid-list-links' href='/'>
                        Home
                    </a>
                    <a className='navbar__mid-list-links' href='/about-us'>
                        About us
                    </a>
                    <a className='navbar__mid-list-links' href='/services'>
                        Services
                    </a>
                    <a className='navbar__mid-list-links' href='/photos'>
                        Photos
                    </a>
                    <a className='navbar__mid-list-links' href='/contact'>
                        Contact
                    </a>
                    <a href={Brochure} className='navbar__mid-list-links' download>Brochure</a>
                </li>
            </ul>)}

        </nav>
    )
}

export default Nav
