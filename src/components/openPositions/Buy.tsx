import React, { useEffect, useState } from "react";
import Card from "./Card";
import { tokenInfos } from "../../utils/tokenList";

import { getAnchorProgram } from "../../utils/solanaUtils";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { BookInterface } from "../../utils/interfaces";

const Buy: React.FC<{ searchWord: string }> = ({ searchWord }) => {

    const { connection } = useConnection()
    const wallet = useWallet()

    const [books, setBooks] = useState<BookInterface[]>([])

    const getAllBook = async () => {
        const program = getAnchorProgram(connection, wallet)
        const booksa = await program.account.book.all()
        const _books = []
        for (let book of booksa) {
            if(book.account.state == 1)
            _books.push({
                offeredSymbol: tokenInfos.find((item) => item.address == book.account.offeredMint.toString()).symbol,
                desiredSymbol: tokenInfos.find((item) => item.address == book.account.desiredMint.toString()).symbol,
                offeredAmount: `${book.account.offeredAmount}`,
                desiredAmount: `${book.account.desiredAmount}`,
                creator: book.account.creator.toString(),
                id: `${book.account.id}`
            })
        }
        setBooks(_books)
    }

    useEffect(() => {
        console.log(searchWord)
        const bookInterval = setInterval(() => {
            getAllBook()
        }, 3000)
        getAllBook()
        return () => {
            clearInterval(bookInterval);
        };
    }, [])

    return (
        <>
            <div className="buy-board">
                {
                    books.map((item) => {
                        // if (item.isActive)
                        return <Card key={`buy${item.id}`} book={item} />
                    })
                }
                {/* <Card /> */}
                {/* <Card />
                <Card />
                <Card /> */}
            </div>
        </>
    );
};

export default Buy;
