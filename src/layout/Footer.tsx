import React from 'react';
import logo from "../assets/images/logo.svg"
import { Link } from 'react-router-dom';
import TwitterIcon from '../assets/icons/TwitterIcon';
import EvenoddIcon from '../assets/icons/EvenoddIcon';
// import TwitterIcon from '../assets/icons/TwitterIcon';
// import EvenoddIcon from '../assets/icons/EvenoddIcon';

const Footer: React.FC = () => {
    return (
        <footer className='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-content">
                            <Link to="" className="footer-logo">
                                <img src={logo} alt="logo" />
                            </Link>
                            <div className="footer-nav">
                                <Link to="#features">Key Features</Link>
                                <Link to="#faq">Faq</Link>
                                <a href="https://pier-protocol.gitbook.io/pier-protocol/" target="_blank">Gitbook</a>
                            </div>
                            <div className="footer-social">
                                <a href="https://twitter.com/protocolpier" target="_blank">
                                    <TwitterIcon />
                                </a>
                                {/* <Link href=""><DiscordIcon/></Link> */}
                                <a href="https://t.me/PierProtocolERC" target="_blank">
                                    <EvenoddIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
