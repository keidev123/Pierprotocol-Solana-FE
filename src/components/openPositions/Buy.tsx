import React, { useEffect, useState } from "react";
import Bitcoin from "../../assets/images/bitcoin-ic.svg";
import { PiCaretUpDownFill } from "react-icons/pi";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";

// {
//   id: 7,
//   token: {
//     logo: <Image src={Bitcoin} alt="" />,
//     title: "Bitcoin",
//     subTitle: "BTC",
//   },
//   tokenPrice: "34.844$",
//   tokenAmount: "62,749.00",
//   totalPrice: "57,600.00",
//   seller: "0xffjeeedv",
// },

const Buy:React.FC<{searchWord:string}> = ({ searchWord }) => {
    

    return (
        <>
            <div className="buy-board">
                {/* {
                    filteredBooks.map((item) => {
                        if (item.isActive)
                            return <Card key={`buy${item.id}`} book={item} />
                    })
                } */}
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </>
    );
};

export default Buy;
