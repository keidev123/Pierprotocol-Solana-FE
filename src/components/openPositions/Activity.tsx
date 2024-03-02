import React, { useEffect, useState } from "react";
import { PiCaretUpDownFill } from "react-icons/pi";

const Activity:React.FC<{searchWord:string}> = ({ searchWord }) => {
    const [filteredActivitys, setFilteredActivitys] = useState([]);
    useEffect(() => {
        console.log(searchWord)
        setFilteredActivitys([])
    }, [])
    return (
        <>
            {filteredActivitys &&
                <div className="table-responsive dashboard-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th
                                    scope="col"
                                    className="cursor"
                                // onClick={() => sortByColumn("token.title")}
                                >
                                    Token <PiCaretUpDownFill />
                                </th>
                                <th
                                    scope="col"
                                    className="cursor"
                                // onClick={() => sortByColumn("tokenAmount")}
                                >
                                    Token Amount <PiCaretUpDownFill />
                                </th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Seller</th>
                                <th scope="col">Buyer</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {filteredActivitys.map((item, index) => (
                                <tr key={`activity${index}`} className={`${index % 2 == 1 ? "odd" : ""} tr`}>
                                    <td>
                                        {item.bookId}
                                    </td>
                                    <td className="table-title">
                                        <img src={item.sellTokenInfo.logo} width={35} />
                                        <span>{item.sellTokenInfo.name}</span>
                                        <span className="subTitle">{item.sellTokenInfo.symbol}</span>
                                    </td>
                                    <td>{item.sellTokenAmount}</td>
                                    <td>{item.forTokenAmount}</td>
                                    <td className="seller-text">{item.seller.substring(0, 8)}</td>
                                    <td className="seller-text">{item.buyer.substring(0, 8)}</td>
                                    <td>
                                        {item.category === "buy" && (
                                            <button className="btn-completed">Completed</button>
                                        )}
                                        {item.category === "book" && (
                                            <button className="btn-listed">Listed</button>
                                        )}
                                    </td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
};

export default Activity;
