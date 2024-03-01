import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { HiOutlineMenu } from "react-icons/hi";


const Header: React.FC = () => {
    const [offcanvasOpen, setOffcanvasOpen] = useState<boolean>(false);
    const [isConnected, setIsConnected] = useState(false);
    const [accounts, setAccounts] = useState([]);

    const toggleOffcanvas = () => {
        setOffcanvasOpen(!offcanvasOpen);
    };

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar_main ${offcanvasOpen ? "offcanvas-open" : ""
                    }`}
            >
                <div className="container">
                    <Link className="logo" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler d-lg-none ms-auto pe-0"
                        type="button"
                        onClick={toggleOffcanvas}
                    >
                        <HiOutlineMenu />
                    </button>

                    <div className={`navbarOffset ${offcanvasOpen ? "show" : ""}`}>
                        <div className="offset-header">
                            <h5 className="offcanvas-title">
                                <img src={logo} alt="logo" />
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={toggleOffcanvas}
                            ></button>
                        </div>
                        <div className="d-lg-flex align-items-center justify-content-center gap-4">
                            <ul className="nav_list ms-auto">
                                <li className="nav-item">
                                    <Link
                                        to="#features"
                                        className="nav-link"
                                        onClick={toggleOffcanvas}
                                    >
                                        Key Features
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#faq" className="nav-link" onClick={toggleOffcanvas}>
                                        FAQ
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://pier-protocol.gitbook.io/pier-protocol/" target="_blank" className="nav-link" onClick={toggleOffcanvas}>
                                        Gitbook
                                    </a>
                                </li>
                            </ul>
                            <div className="nav-btn d-lg-flex align-items-center justify-content-center mt-lg-0 mt-4 ms-auto">
                                <div className="d-flex gap-2 align-items-center justify-content-center mt-4 mt-lg-0">
                                    <a href={"#"} className="btn-lg navbar-btn" >
                                        {isConnected ?
                                            <span>Connected</span> :
                                            <span>Connect Wallet</span>
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${offcanvasOpen ? "show offcanvas-backdrop fade" : ""}`}
                        onClick={toggleOffcanvas}
                    ></div>
                </div>
            </nav>
        </>
    );
};

export default Header;
