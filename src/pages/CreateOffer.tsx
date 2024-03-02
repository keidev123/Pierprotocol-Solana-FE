import { useEffect, useRef, useState } from 'react'
import { networkSvgs } from '../utils/svg';
// import { defaultTokenInfos } from '@/utils/tokenList';
import { networks } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import OtherHeader from '../layout/OtherHeader';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, increment } from "../redux/appSlice";
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { getAnchorProgram } from '../utils/solanaUtils';
import { getMint } from '@solana/spl-token';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { tokenInfos } from '../utils/tokenList';
import { createBookTx } from '../utils/transactions/createBook';
import { initConfigTx } from '../utils/transactions/initConfig';

export default function CreateOffer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const wallet = useWallet()
    const { connection } = useConnection()

    const [network, setNetwork] = useState<string>("Solana");

    const [tabStatus, setTabStatus] = useState('network');

    const [sellingToken, setSellingToken] = useState<string>("Select");
    const [forToken, setForToken] = useState<string>("Select");

    const [isNetworkOpen, setIsNetworkOpen] = useState(false);
    const networkDropdownRef = useRef<HTMLDivElement>(null);

    const [isSellingTokenOpen, setIsSellingTokenOpen] = useState(false);
    const sellingTokenDropdownRef = useRef<HTMLDivElement>(null);

    const [isForTokenOpen, setIsForTokenOpen] = useState(false);
    const forTokenDropdownRef = useRef<HTMLDivElement>(null);

    const [sellTokenAmount, setSellTokenAmount] = useState<string>();
    const [forTokenAmount, setForTokenAmount] = useState<string>();

    const networkToggleDropdown = () => setIsNetworkOpen(!isNetworkOpen);
    const sellingTokenToggleDropdown = () => setIsSellingTokenOpen(!isSellingTokenOpen);
    const forTokenToggleDropdown = () => setIsForTokenOpen(!isForTokenOpen);

    const [booking, setBooking] = useState<boolean>(false);

    const handleClickOutside = (event: any) => {
        if (networkDropdownRef.current && !networkDropdownRef.current.contains(event.target)) {
            setIsNetworkOpen(false);
        }
        if (sellingTokenDropdownRef.current && !sellingTokenDropdownRef.current.contains(event.target)) {
            setIsSellingTokenOpen(false);
        }
        if (forTokenDropdownRef.current && !forTokenDropdownRef.current.contains(event.target)) {
            setIsForTokenOpen(false);
        }
    };

    const sellToken = async () => {
        const sellMint = tokenInfos.find((item) => item.symbol == sellingToken).address;
        const forMint = tokenInfos.find((item) => item.symbol == forToken).address;
        const txn = await createBookTx({connection, wallet, sellMint, forMint, sellAmount: sellTokenAmount, forAmount: forTokenAmount});
        await wallet.sendTransaction(txn, connection);
        navigate("/dashboard")
    }

    const initConfig = async () => {
        const txn = await initConfigTx({connection, wallet, feeWallet: wallet.publicKey})
        await wallet.sendTransaction(txn, connection)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <main id="other-wrapper" className='list-wrapper'>
                <OtherHeader comingSoon={false} />
                <div className='create-offer'>
                    <div className='title'>
                        <span onClick={initConfig}>CREATE OFFER</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7492" cy="11.55" r="11.55" fill="url(#paint0_linear_0_1)" />
                            <path d="M12.9202 16.4024L10.174 16.4024L6.16023 6.84336L9.16394 6.84336L11.5207 13.1545L11.3755 13.0554L11.7254 13.0554L11.5735 13.1545L13.9369 6.84336L16.934 6.84336L12.9202 16.4024Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_0_1" x1="26.4242" y1="11.4172" x2="-3.60078" y2="11.4172" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#5200FF" />
                                    <stop offset="1" stopColor="#58ADFE" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='body'>
                        <div className='steps'>
                            <div className='step1'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="url(#paint0_linear_0_1)" />
                                    <path d="M17.0916 8.36364V20H14.6314V10.6989H14.5632L11.8984 12.3693V10.1875L14.7791 8.36364H17.0916Z" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_1" x1="34.0584" y1="14.8276" x2="-4.93507" y2="14.8276" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#5200FF" />
                                            <stop offset="1" stopColor="#58ADFE" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>Network & Sell</span>
                            </div>
                            <div className='step-line'></div>
                            <div className='step2'>
                                {
                                    tabStatus == 'network' ?
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#D9D9D9" fillOpacity="0.05" />
                                            <circle cx="15" cy="15" r="14.5" stroke="white" strokeOpacity="0.1" />
                                            <path d="M11.4041 20V18.2273L15.5462 14.392C15.8984 14.0511 16.1939 13.7443 16.4325 13.4716C16.675 13.1989 16.8587 12.9318 16.9837 12.6705C17.1087 12.4053 17.1712 12.1193 17.1712 11.8125C17.1712 11.4716 17.0935 11.178 16.9382 10.9318C16.7829 10.6818 16.5708 10.4905 16.3018 10.358C16.0329 10.2216 15.728 10.1534 15.3871 10.1534C15.031 10.1534 14.7204 10.2254 14.4553 10.3693C14.1901 10.5133 13.9856 10.7197 13.8416 10.9886C13.6977 11.2576 13.6257 11.5777 13.6257 11.9489H11.2905C11.2905 11.1875 11.4628 10.5265 11.8075 9.96591C12.1522 9.4053 12.6352 8.97159 13.2564 8.66477C13.8776 8.35795 14.5935 8.20455 15.4041 8.20455C16.2375 8.20455 16.9628 8.35227 17.5803 8.64773C18.2015 8.93939 18.6844 9.3447 19.0291 9.86364C19.3738 10.3826 19.5462 10.9773 19.5462 11.6477C19.5462 12.0871 19.459 12.5208 19.2848 12.9489C19.1143 13.3769 18.8094 13.8523 18.37 14.375C17.9306 14.8939 17.3113 15.517 16.5121 16.2443L14.8132 17.9091V17.9886H19.6996V20H11.4041Z" fill="white" />
                                        </svg> :
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="url(#paint0_linear_0_1)" />
                                            <path d="M11.4041 20V18.2273L15.5462 14.392C15.8984 14.0511 16.1939 13.7443 16.4325 13.4716C16.675 13.1989 16.8587 12.9318 16.9837 12.6705C17.1087 12.4053 17.1712 12.1193 17.1712 11.8125C17.1712 11.4716 17.0935 11.178 16.9382 10.9318C16.7829 10.6818 16.5708 10.4905 16.3018 10.358C16.0329 10.2216 15.728 10.1534 15.3871 10.1534C15.031 10.1534 14.7204 10.2254 14.4553 10.3693C14.1901 10.5133 13.9856 10.7197 13.8416 10.9886C13.6977 11.2576 13.6257 11.5777 13.6257 11.9489H11.2905C11.2905 11.1875 11.4628 10.5265 11.8075 9.96591C12.1522 9.4053 12.6352 8.97159 13.2564 8.66477C13.8776 8.35795 14.5935 8.20455 15.4041 8.20455C16.2375 8.20455 16.9628 8.35227 17.5803 8.64773C18.2015 8.93939 18.6844 9.3447 19.0291 9.86364C19.3738 10.3826 19.5462 10.9773 19.5462 11.6477C19.5462 12.0871 19.459 12.5208 19.2848 12.9489C19.1143 13.3769 18.8094 13.8523 18.37 14.375C17.9306 14.8939 17.3113 15.517 16.5121 16.2443L14.8132 17.9091V17.9886H19.6996V20H11.4041Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_0_1" x1="34.0584" y1="14.8276" x2="-4.93507" y2="14.8276" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#5200FF" />
                                                    <stop offset="1" stopColor="#58ADFE" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                }
                                <span>Amount & Sell</span>
                            </div>
                        </div>
                        {
                            tabStatus == 'network' ?
                                <div className='network'>
                                    <div className='description'>
                                        On which network you want to sell your coins?
                                    </div>
                                    <div>
                                        Network
                                    </div>
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
                                                    <li key={network} onClick={() => { setIsNetworkOpen(false); setNetwork(network); if(network != "Solana") window.location.assign(`https://pierprotocol.com/create-offer?network=${network}`)}}>
                                                        <div className='logo'>
                                                            {networkSvgs[network]}
                                                        </div>
                                                        <span>{network}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className='navigate-button'>
                                        <button className='back' onClick={() => navigate("/dashboard")}>
                                            Back
                                        </button>
                                        <button className='next' onClick={() => setTabStatus('token')}>
                                            Next
                                        </button>
                                    </div>
                                </div>
                                :
                                <div className='network'>
                                    <div className='description'>
                                        How many you want to sell?
                                    </div>

                                    <div className='sell'>
                                        <div className='label'>Selling</div>
                                        <div className='input-area'>
                                            <input placeholder='Enter amount' onChange={(e) => setSellTokenAmount(e.target.value)} type='number' value={sellTokenAmount} />
                                            <div className='selling-dropdown'>
                                                <div className='token-dropdown' onClick={sellingTokenToggleDropdown}>
                                                    <span>
                                                        {sellingToken}
                                                    </span>
                                                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L5.5 6L10 1" stroke="#FEFEFE" strokeOpacity="0.1" stroke-linecap="round" />
                                                    </svg>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='for'>
                                        <div className='label'>For</div>
                                        <div className='input-area'>
                                            <input placeholder='Enter amount' onChange={(e) => setForTokenAmount(e.target.value)} type='number' value={forTokenAmount} />
                                            <div className='for-dropdown'>
                                                <div className='for-dropdown'>
                                                    <div className='token-dropdown' onClick={forTokenToggleDropdown}>
                                                        <span>
                                                            {forToken}
                                                        </span>
                                                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1L5.5 6L10 1" stroke="#FEFEFE" strokeOpacity="0.1" stroke-linecap="round" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        booking ?
                                            // <div className='navigate-button'>
                                            //     <button className='back' onClick={() => setTabStatus('network')}>
                                            //         Back
                                            //     </button>
                                            //     <button className='next' onClick={sellToken}>
                                            //         Sell
                                            //     </button>
                                            // </div> :
                                            <div className='navigate-button'>
                                                <button className='back' onClick={() => setTabStatus('network')} disabled>
                                                    {/* <div className='spin'>
                                                    </div> */}
                                                    Back
                                                </button>
                                                <button className='next' onClick={sellToken} disabled>
                                                    {/* <div className='spin'>loading...</div> */}
                                                    Sell
                                                </button>
                                            </div>
                                            : <div className='navigate-button'>
                                                <button className='back' onClick={() => setTabStatus('network')}>
                                                    Back
                                                </button>
                                                <button className='next' onClick={sellToken}>
                                                    Sell
                                                </button>
                                            </div>
                                    }
                                </div>
                        }
                        {isSellingTokenOpen &&
                            (
                                <div className='select-token'>
                                    <div className='select-token-modal' ref={sellingTokenDropdownRef}>
                                        <h5 className="select-token-title">Select Token</h5>
                                        {/* <div className='custom-token'>
                                            <input placeholder='Custom token address' onChange={(e) => { setCustomSellTokenAddress(e.target.value) }} />
                                        </div> */}
                                        <ul className="select-token-list">
                                            {tokenInfos.map((item) => (
                                                <li key={item.symbol} onClick={() => {
                                                    sellingTokenToggleDropdown()
                                                    setSellingToken(item.symbol)
                                                    setForToken(tokenInfos.find((jtem) => jtem.symbol != item.symbol).symbol)
                                                }}>
                                                    <span>{item.symbol}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            )}
                        {isForTokenOpen &&
                            (
                                <div className='select-token'>
                                    <div className='select-token-modal' ref={forTokenDropdownRef}>
                                        <h5 className="select-token-title">Select Token</h5>
                                        {/* <div className='custom-token'>
                                            <input placeholder='Custom token address' onChange={(e) => { setCustomForTokenAddress(e.target.value) }} />
                                        </div> */}
                                        <ul className="select-token-list">
                                            {tokenInfos.map((item) => (
                                                <li key={item.symbol} onClick={() => {
                                                    forTokenToggleDropdown()
                                                    setForToken(item.symbol)
                                                    setSellingToken(tokenInfos.find((jtem) => jtem.symbol != item.symbol).symbol)
                                                }}>
                                                    <span>{item.symbol}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </main>
        </>
    )
}
