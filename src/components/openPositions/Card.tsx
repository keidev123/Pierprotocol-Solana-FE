const Card = () => {


    return (
        <div className="card">
            {/* <div className="summary">
                <div className="token">
                    <img src={book.sellTokenInfo.logo} width="25px" alt={book.sellTokenInfo.symbol} />
                    <div>{book.sellTokenAmount} {book.sellTokenInfo.symbol}</div>
                </div>
                <div className="seller">
                    <div>Seller</div>
                    <a>{book.book[0].substring(0, 10)}</a>
                </div>
            </div> */}
            <div className="detail">
                <div className="unit">
                    <div>Price(/Token)</div>
                    <div>$1 USD</div>
                </div>
                <div className="total">
                    {/* <div className="for-token">
                        For {book.forTokenAmount}&nbsp;
                        <img src={book.forTokenInfo.logo} width="25px" alt={book.forTokenInfo.symbol} />
                    </div>
                    <a>${book.forTokenAmount}</a> */}
                </div>
            </div>

            <button >Buy Token</button>
        </div>
    );
};

export default Card;
