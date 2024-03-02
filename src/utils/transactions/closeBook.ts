import { WalletContextState } from '@solana/wallet-adapter-react'
import { Connection, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram, Transaction } from '@solana/web3.js'
import { escrowPubkey, getAnchorProgram, getBookPubkey, getConfigPubkey, getEscrowPubkey, getFriendPubkey, getNewFeePubkey, getSwapPubkey } from '../solanaUtils'
import { TOKEN_PROGRAM_ID, TokenAccountNotFoundError, TokenInvalidAccountOwnerError, createAssociatedTokenAccountInstruction, getAccount, getAssociatedTokenAddressSync } from '@solana/spl-token'
import { BN } from 'bn.js'
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