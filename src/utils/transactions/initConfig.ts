import { WalletContextState } from '@solana/wallet-adapter-react'
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { getFeePubkey, getAnchorProgram, getConfigPubkey, getFriendPubkey } from '../solanaUtils.ts'
import { tokenInfos } from '../tokenList.ts'

export const initConfigTx = async ({
    connection,
    wallet,
    feeWallet
}: {
    connection: Connection,
    wallet: WalletContextState,
    feeWallet: PublicKey
}) => {
    const txn = new Transaction()
    const program = getAnchorProgram(connection, wallet)

    txn.add(
        await program.methods.initializeConfig().accounts({
            creator: wallet.publicKey,
            config: getConfigPubkey(),
            systemProgram: SystemProgram.programId,
        }).instruction()
    )

    txn.add(
        await program.methods.initializeFee(feeWallet).accounts({
            creator: wallet.publicKey,
            config: getConfigPubkey(),
            fee: getFeePubkey(),
            systemProgram: SystemProgram.programId,
        }).instruction()
    )

    tokenInfos.map(async (token) => {
        txn.add(
            await program.methods.initializeFriend(0).accounts({
                creator: wallet.publicKey,
                friendMint: new PublicKey(token.address),
                config: getConfigPubkey(),
                friend: getFriendPubkey(new PublicKey(token.address)),
                systemProgram: SystemProgram.programId,
            }).instruction()
        )
    })
   return txn
}