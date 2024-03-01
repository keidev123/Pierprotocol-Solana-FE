import { WalletContextState } from '@solana/wallet-adapter-react'
import { Connection, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram, Transaction } from '@solana/web3.js'
import { escrowPubkey, getAnchorProgram, getBookPubkey, getConfigPubkey, getLastConfigId } from '../solanaUtils'
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync } from '@solana/spl-token'
import { BN } from 'bn.js'
import { tokenInfos } from '../tokenList'

export const createBookTx = async ({
    connection,
    wallet,
    sellMint,
    forMint,
    sellAmount,
    forAmount
}: {
    connection: Connection,
    wallet: WalletContextState,
    sellMint: string,
    forMint: string,
    sellAmount: string,
    forAmount: string
}) => {
    const id = await getLastConfigId(connection, wallet)
    const txn = new Transaction()
    const program = getAnchorProgram(connection, wallet)
    txn.add(
        await program.methods.initializeBook().accounts({
            creator: wallet.publicKey,
            config: getConfigPubkey(),
            book: getBookPubkey(id),
            systemProgram: SystemProgram.programId,
        }).instruction()
    )

    const offeredMint = new PublicKey(sellMint)
    const desiredMint = new PublicKey(forMint)

    txn.add(
        await program.methods.initializeEscrow().accounts({
            creator: wallet.publicKey,
            offeredMint,
            book: getBookPubkey(id),
            escrow: escrowPubkey(id),
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
            rent: SYSVAR_RENT_PUBKEY,
        }).instruction()
    )

    txn.add(
        await program.methods.createBook(
            new BN(sellAmount.padEnd(tokenInfos.find((item) => item.address == sellMint).decimals + sellAmount.length, '0')), 
            new BN(forAmount.padEnd(tokenInfos.find((item) => item.address == forMint).decimals + forAmount.length, '0')))
        .accounts({
            creator: wallet.publicKey,
            creatorAtaOffered: getAssociatedTokenAddressSync(offeredMint, wallet.publicKey),
            offeredMint,
            desiredMint,
            book: getBookPubkey(id),
            escrow: escrowPubkey(id),
            tokenProgram: TOKEN_PROGRAM_ID
        }).instruction()
    )
    return txn
}