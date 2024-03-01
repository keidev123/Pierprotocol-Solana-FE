import { FC } from "react";
import { BookInterface } from "../../utils/interfaces";
import { tokenInfos } from "../../utils/tokenList";

const Card: FC<{book: BookInterface}> = ({book}) => {
    const sellTokenInfo = tokenInfos.find((item) => item.symbol == book.sellToken)
    const forTokenInfo = tokenInfos.find((item) => item.symbol == book.forToken)
    return (
        <div className="card">
            <div className="summary">
                <div className="token">
                    <img src={sellTokenInfo.logo} width="25px" alt={sellTokenInfo.symbol} />
                    <div>{book.sellAmount.substring(0, book.sellAmount.length - sellTokenInfo.decimals)} {sellTokenInfo.symbol}</div>
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
                        For {book.forAmount.substring(0, book.forAmount.length - forTokenInfo.decimals)}&nbsp;
                        <img src={forTokenInfo.logo} width="25px" alt={forTokenInfo.symbol} />
                    </div>
                    <a>${book.forAmount.substring(0, book.forAmount.length - forTokenInfo.decimals)}</a>
                </div>
            </div>

            <button >Buy Token</button>
        </div>
    );
};

export default Card;
