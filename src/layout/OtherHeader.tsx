import { Link } from "react-router-dom"
import React, { useState, useRef, useEffect } from "react";
import { networkSvgs } from '../utils/svg';
import logo from "../assets/images/logo.png";
import { networks } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, increment } from "../redux/appSlice";
import { RootState } from "../redux/store";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const OtherHeader: React.FC<{ comingSoon: boolean }> = ({ comingSoon }) => {
    const count = useSelector((state: RootState) => state.app.count);
    const [network, setNetwork] = useState<string>("Solana")
    const networkDropdownRef = useRef<HTMLDivElement>(null);
    const networkToggleDropdown = () => setIsNetworkOpen(!isNetworkOpen);
    const [isNetworkOpen, setIsNetworkOpen] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const { setVisible, visible } = useWalletModal();

    const handleClickOutside = (event: any) => {
        if (networkDropdownRef.current && !networkDropdownRef.current.contains(event.target)) {
            setIsNetworkOpen(false);
        }
    };

    const connectSolana = () => { setVisible(true) }

    useEffect(() => {
        console.log(visible)
    }, [visible])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="other-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="other-content">
                            {
                                !comingSoon &&
                                <>
                                    <Link to="/">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                    <div className='config'>
                                        <div className='network-config'>
                                            <div ref={networkDropdownRef} className='select-network'>
                                                <div className='selected-network' onClick={networkToggleDropdown}>
                                                    <div className='logo'>
                                                        {networkSvgs[network]}
                                                    </div>
                                                    <span>{network}</span>
                                                </div>
                                                {isNetworkOpen && (
                                                    <ul>
                                                        {networks.map(network => (
                                                            <li key={network} onClick={() => { setIsNetworkOpen(false); setNetwork(network); if(network != "Solana") window.location.assign(`https://pierprotocol.com/dashboard?network=${network}`) }}>
                                                                <div className='logo'>
                                                                    {networkSvgs[network]}
                                                                </div>
                                                                <span>{network}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                        <a href="#" className="btn-lg navbar-btn connect-wallet" onClick={connectSolana}>
                                            {isConnected ?
                                                <span>Connected</span> :
                                                <span>Connect Wallet</span>
                                            }
                                        </a>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OtherHeader;
