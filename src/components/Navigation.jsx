import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import { useEffect, useState } from 'react';

const Navigation = (props) => {
    const [closedNavIcon, setClosedNavIcon] = useState(true)


    const clickTogglelNav = () => {
        setClosedNavIcon((toggle) => toggle = !toggle);
    }

    const closeNavHandler = () => {
        setClosedNavIcon((toggle) => toggle = !toggle);
    }

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setClosedNavIcon(true);
        })
    }, [])

    return (
        <>
            <header className="site-header">
                <div className="header-first">
                    <Link to='/' >
                        <div className="logo">Galina.Baleva</div>
                    </Link>
                    <div className="social">
                        <ul role="list">
                            <li>
                                <a href="https://github.com/GalinaBaleva" target="_blank">
                                    <i className="fa-brands fa-github" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/galina-baleva-4a4019bb/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/baleva1990/" target="_blank">
                                    <i className="fa-brands fa-gitlab" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-second">
                    <div className="navbar-closed">
                        <i className="fa-solid fa-bars" onClick={clickTogglelNav} />
                    </div>
                    <nav id="navbar" className={closedNavIcon ? 'inactive-toggle-nav' : 'active-toggle-nav'}>
                        <ul role="list" className="nav-list-items">
                                <>
                                    <li>
                                        <NavLink to='/portfolio'
                                            onClick={closeNavHandler}
                                        >Potfolio
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/certificates'
                                            onClick={closeNavHandler}
                                        >Certificates
                                        </NavLink>
                                    </li>
                                </>
                        </ul>
                    </nav>
                </div>
            </header >
        </>
    )
}

export default Navigation;