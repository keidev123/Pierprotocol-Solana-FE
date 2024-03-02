import { WalletContextState } from '@solana/wallet-adapter-react'
import { Connection, PublicKey, Transaction } from '@solana/web3.js'
import { escrowPubkey, getAnchorProgram, getBookPubkey, getFriendPubkey } from '../solanaUtils'
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync } from '@solana/spl-token'
import { BookInterface } from '../interfaces'
import { tokenInfos } from '../tokenList'

export const closeBookTx = async ({
    connection,
    wallet,
    book,
    percent
}: {
    connection: Connection,
    wallet: WalletContextState,
    book: BookInterface,
    percent: number
}) => {
    const txn = new Transaction()
    
    const program = getAnchorProgram(connection, wallet)
    const offeredMint = new PublicKey(tokenInfos.find((item) => item.symbol == book.offeredSymbol).address)
    const desiredMint = new PublicKey(tokenInfos.find((item) => item.symbol == book.desiredSymbol).address)
    const creator = new PublicKey(book.creator)
    const id = BigInt(book.id)
    

    txn.add(
        await program.methods.closeBook(percent).accounts({
            creator: creator,
            taker: wallet.publicKey,
            offeredMint,
            desiredMint,
            offeredFriend: getFriendPubkey(offeredMint),
            desiredFriend: getFriendPubkey(desiredMint),
            creatorAtaOffered: getAssociatedTokenAddressSync(offeredMint, creator),
            creatorAtaDesired: getAssociatedTokenAddressSync(desiredMint, creator),
            takerAtaOffered: getAssociatedTokenAddressSync(offeredMint, wallet.publicKey),
            takerAtaDesired: getAssociatedTokenAddressSync(desiredMint, wallet.publicKey),
            book: getBookPubkey(id),
            escrow: escrowPubkey(id),
            tokenProgram: TOKEN_PROGRAM_ID
        }).instruction()
    )
   return txn
}