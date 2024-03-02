import { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch, connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import OtherHeader from '../layout/OtherHeader';
import ProgressCircle from '../components/buy/ProgressiveCircle';
import ProgressBar from '../components/buy/ProgressiveBar';
import { useLocation } from 'react-router-dom';

import { getAnchorProgram } from "../utils/solanaUtils";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { tokenInfos } from '../utils/tokenList';
import { BookInterface } from '../utils/interfaces';
import { closeBookTx } from '../utils/transactions/closeBook';

const Buy: FC = () => {
    const network = "Solana";

    const { connection } = useConnection()
    const wallet = useWallet()

    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [isConnected, setIsConnected] = useState(false);

    const [id, setId] = useState<string>();

    const [percent, setPercent] = useState(50);

    const [book, setBook] = useState<BookInterface>();
    const [sellTokenInfo, setSellTokenInfo] = useState<any>();
    const [forTokenInfo, setForTokenInfo] = useState<any>();
    const [forAmount, setForAmount] = useState<number>();
    const [sellAmount, setSellAmount] = useState<number>();

    const handleProgressChange = (newValue) => {
        setPercent(newValue);
    };

    const navigate = useNavigate()

    const connectWallet = async () => {
    };

    const buy = async () => {
        if(book){
            const txn = await closeBookTx({connection, wallet, book, percent})
            wallet.sendTransaction(txn, connection)
        }
    }

    useEffect(() => {
        if (book) {
            const _forTokenInfos = tokenInfos.find((item) => item.symbol == book.desiredSymbol)
            const _sellTokenInfos = tokenInfos.find((item) => item.symbol == book.offeredSymbol)
            setSellTokenInfo(_sellTokenInfos)
            setForTokenInfo(_forTokenInfos)
            setForAmount(parseInt(`${book.desiredAmount}`.substring(0, `${book.desiredAmount}`.length - _forTokenInfos.decimals)))
            setSellAmount(parseInt(`${book.offeredAmount}`.substring(0, `${book.offeredAmount}`.length - _sellTokenInfos.decimals)))
        }
    }, [book, setBook])

    useEffect(() => {
        const getAllBook = async () => {
            const program = getAnchorProgram(connection, wallet)
            const books = await program.account.book.all()
            console.log(id, parseInt(books[0].account.id))
            const booka = books.find((item) => `${parseInt(item.account.id)}` == id)
            if(!booka){
                navigate("/dashboard")
            }
            setBook(() => {
                return {
                    offeredSymbol: tokenInfos.find((item) => item.address == booka.account.offeredMint.toString()).symbol,
                    desiredSymbol: tokenInfos.find((item) => item.address == booka.account.desiredMint.toString()).symbol,
                    offeredAmount: `${booka.account.offeredAmount}`,
                    desiredAmount: `${booka.account.desiredAmount}`,
                    creator: booka.account.creator.toString(),
                    id: `${booka.account.id}`
                }
            }
            )
        }

        if (id)
            getAllBook()
    }, [id])

    let query = new URLSearchParams(useLocation().search)
    useEffect(() => {
        setId(query.get('id'))
    }, [])
    return (
        <>
            <main id="other-wrapper" className='list-wrapper'>
                <OtherHeader comingSoon={false} />
                {
                    sellAmount &&
                    <div className='buy-card'>
                        <div className='back-to-market' onClick={() => navigate('/dashboard')}>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1L1 5.5L6 10" stroke="#FEFEFE" stroke-opacity="0.2" stroke-linecap="round" />
                            </svg>
                            Back to market
                        </div>
                        <div className='body'>
                            <div className='token-info'>
                                <div className='symbol'>
                                    <img src={sellTokenInfo.logo} width={85} height={85} />
                                    <div className='name-and-address'>
                                        <span className='no'>#{id}</span>
                                        <span className='name'>{sellTokenInfo.symbol}</span>
                                        <span className='address'>
                                            <span>
                                                {sellTokenInfo.address.slice(0, 8)}
                                            </span>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.90002 7.55005V10.05C9.90002 11.5665 8.66652 12.8 7.15002 12.8H3.15002C1.63352 12.8 0.400024 11.5665 0.400024 10.05V6.05005C0.400024 4.53355 1.63352 3.30005 3.15002 3.30005H5.65002C6.06452 3.30005 6.40002 3.63555 6.40002 4.05005C6.40002 4.46455 6.06452 4.80005 5.65002 4.80005H3.15002C2.46102 4.80005 1.90002 5.36105 1.90002 6.05005V10.05C1.90002 10.739 2.46102 11.3 3.15002 11.3H7.15002C7.83902 11.3 8.40002 10.739 8.40002 10.05V7.55005C8.40002 7.13555 8.73552 6.80005 9.15002 6.80005C9.56452 6.80005 9.90002 7.13555 9.90002 7.55005ZM10.65 0.800049H8.15002C7.73552 0.800049 7.40002 1.13555 7.40002 1.55005C7.40002 1.96455 7.73552 2.30005 8.15002 2.30005H9.83952L4.61952 7.51955C4.32652 7.81205 4.32652 8.28755 4.61952 8.58005C4.76602 8.72655 4.95802 8.79955 5.15002 8.79955C5.34202 8.79955 5.53402 8.72655 5.68052 8.58005L10.9 3.36055V5.05005C10.9 5.46455 11.2355 5.80005 11.65 5.80005C12.0645 5.80005 12.4 5.46455 12.4 5.05005V2.55005C12.4 1.58505 11.615 0.800049 10.65 0.800049Z" fill="#D5D5D5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className='percent'>
                                    <ProgressCircle progress={percent} />
                                </div>
                            </div>
                            <div className='price-setting'>
                                <div className='prices'>
                                    <div className='offer'>
                                        <img src={sellTokenInfo.logo} width={30} />
                                        <span>{sellAmount}</span>
                                        <span>Offer</span>
                                    </div>
                                    <div className='for'>
                                        <img src={forTokenInfo.logo} width={30} />
                                        <span>{forAmount}</span>
                                        <span>For</span>
                                    </div>
                                    <div className='price'>
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_405_13644)">
                                                <path d="M14.5 0C6.50446 0 0 6.50446 0 14.5C0.728625 33.7101 28.275 33.7052 29 14.5C29 6.50446 22.4955 0 14.5 0ZM15.7083 20.5417V21.75C15.7023 23.3305 13.2977 23.3293 13.2917 21.75V20.5417H12.9678C11.6785 20.5417 10.475 19.8481 9.82858 18.7304C9.49388 18.1516 9.69204 17.4133 10.2684 17.0798C10.8472 16.7427 11.5867 16.9433 11.919 17.5196C12.1353 17.8942 12.5365 18.125 12.9666 18.125H15.7071C16.9118 18.2035 17.4508 16.2521 16.1373 15.9983L12.4628 15.3857C8.23117 14.6015 9.14225 8.43417 13.2905 8.45833V7.25C13.2977 5.6695 15.7011 5.67071 15.7071 7.25V8.45833H16.031C17.3203 8.45833 18.5238 9.15313 19.1702 10.2708C19.5049 10.8484 19.3068 11.5867 18.7304 11.9214C18.1504 12.2561 17.4121 12.058 17.0798 11.4804C16.8635 11.107 16.4623 10.8762 16.0322 10.8762H13.2917C12.087 10.7977 11.5493 12.7491 12.8615 13.0029L16.536 13.6155C20.7676 14.3997 19.8565 20.5658 15.7083 20.5417Z" fill="#FCE837" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_405_13644">
                                                    <rect width="29" height="29" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>$1</span>
                                        <span>Price / Token</span>
                                    </div>
                                </div>
                                <div className='buy'>
                                    <div className='description'>
                                        <span>BUY AMOUNT</span>
                                        <img src={sellTokenInfo.logo} width={27} />
                                    </div>
                                    <div className='amount'>
                                        {sellAmount * percent / 100}
                                    </div>
                                    <div className='value-setting'>
                                        <ProgressBar max={100} value={percent} setValue={setPercent} onChange={handleProgressChange} />
                                        <div className='value'>
                                            <span>
                                                {Math.ceil(percent)}%
                                            </span>
                                            <svg onClick={() => setPercent(100)} width="31" height="10" viewBox="0 0 31 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.86519 0.545454H3.33039L5.93408 6.89773H6.04488L8.64857 0.545454H11.1138V10H9.17485V3.84624H9.09637L6.64964 9.95384H5.32932L2.88259 3.82315H2.80411V10H0.86519V0.545454ZM14.3903 10H12.2483L15.5121 0.545454H18.0881L21.3473 10H19.2053L16.837 2.70597H16.7632L14.3903 10ZM14.2564 6.28374H19.3161V7.8441H14.2564V6.28374ZM24.3596 0.545454L26.2662 3.76776H26.3401L28.2559 0.545454H30.5134L27.6281 5.27273L30.578 10H28.279L26.3401 6.77308H26.2662L24.3273 10H22.0375L24.9967 5.27273L22.0929 0.545454H24.3596Z" fill="url(#paint0_linear_405_13587)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_405_13587" x1="35.1937" y1="4.90803" x2="-5.09957" y2="4.90803" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#5200FF" />
                                                        <stop offset="1" stop-color="#58ADFE" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='pay'>
                                    <div className='description'>
                                        <span>PAY AMOUNT</span>
                                    </div>
                                    <div className='amount'>
                                        <span>
                                            {forAmount / 100 * percent}
                                        </span>
                                        <img src={forTokenInfo.logo} alt={forTokenInfo.symbol} width={30} />
                                    </div>
                                    <div className='value-setting'>
                                        ${forAmount / 100 * percent}
                                    </div>
                                </div>
                                <button onClick={buy}>
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </main>
        </>
    )
}

export default Buy;