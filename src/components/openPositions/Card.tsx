import { FC } from "react";
import { BookInterface } from "../../utils/interfaces";
import { tokenInfos } from "../../utils/tokenList";
import { useNavigate } from "react-router-dom";

const Card: FC<{ book: BookInterface }> = ({ book }) => {
    const navigate = useNavigate()
    console.log(book)
    const sellTokenInfo = tokenInfos.find((item) => item.symbol == book.offeredSymbol)
    const forTokenInfo = tokenInfos.find((item) => item.symbol == book.desiredSymbol)
    return (
        <div className="card">
            {forTokenInfo &&
                <>
                    <div className="summary">
                        <div className="token">
                            <img src={sellTokenInfo.logo} width="25px" alt={sellTokenInfo.symbol} />
                            <div>{book.offeredAmount.substring(0, book.offeredAmount.length - sellTokenInfo.decimals)} {sellTokenInfo.symbol}</div>
                        </div>
                        <div className="seller">
                            <div>Seller</div>
                            <a>{book.creator.substring(0, 10)}</a>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="unit">
                            <div>Price(/Token)</div>
                            <div>$1 USD</div>
                        </div>
                        <div className="total">
                            <div className="for-token">
                                For {book.desiredAmount.substring(0, book.desiredAmount.length - forTokenInfo.decimals)}&nbsp;
                                <img src={forTokenInfo.logo} width="25px" alt={forTokenInfo.symbol} />
                            </div>
                            <a>${book.desiredAmount.substring(0, book.desiredAmount.length - forTokenInfo.decimals)}</a>
                        </div>
                    </div>

                    <button onClick={() => navigate(`/buy?id=${book.id}`)}>Buy Token</button>
                </>
            }
        </div>
    );
};

export default Card;
