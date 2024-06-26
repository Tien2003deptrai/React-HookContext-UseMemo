import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemContext';

const Header = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff' }}>
                <div className="container-fluid">
                    <Link className={`navbar-brand ${theme === 'dark' ? 'text-white' : ''}`} >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" >Action</Link></li>
                                    <li><Link className="dropdown-item" >Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" tabIndex={-1} aria-disabled="true">Disabled</Link>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-outline-dark' onClick={toggleTheme}>Toggle Theme</button>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;
