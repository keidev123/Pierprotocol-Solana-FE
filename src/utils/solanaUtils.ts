import { Connection, PublicKey } from '@solana/web3.js'
import { Piersol } from './piersol'
import { AnchorProvider, Program } from '@project-serum/anchor'
import { WalletContextState } from '@solana/wallet-adapter-react'
import idl from './piersol.json'

export const programId = new PublicKey(idl.metadata.address)
let program: Program<Piersol>

export const getAnchorProgram = (connection: Connection, wallet: WalletContextState) => {
    if (program) return program
    const provider = new AnchorProvider(connection, wallet, { preflightCommitment: 'processed' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    program = new Program(idl as any, programId, provider)
    return program
}

export const getSwapPubkey = (taker: PublicKey) => {
    const [swapPubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('swap'), taker.toBuffer()], programId
    )
    return swapPubkey
}

export const getEscrowPubkey = (taker: PublicKey) => {
    const [escrowPubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('escrow'), taker.toBuffer()], programId
    )
    return escrowPubkey
}

export const getNewFeePubkey = () => {
    const [newFeePubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('feewallet')], programId
    )
    return newFeePubkey;
}

export const getNewBookPubkey = (owner: PublicKey) => {
    const [newBookPubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('initbook'), owner.toBuffer()], programId
    )

    return newBookPubkey
}

export const getConfigPubkey = () => {
    const [configPubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('config')], programId
    )

    return configPubkey;
}

export const getBookPubkey = (id: bigint) => {
    const idBuffer = Buffer.alloc(8); 
    idBuffer.writeBigUInt64LE(id); 
    // const idBuffer = Buffer.from(new Uint8Array([(id >> 24) & 0xff, (id >> 16) & 0xff, (id >> 8) & 0xff, id & 0xff]));
    const [bookPubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('book'), idBuffer], programId
    )
    console.log(bookPubkey)
    return bookPubkey
}

export const escrowPubkey = (id: bigint) => {
    const idBuffer = Buffer.alloc(8); 
    idBuffer.writeBigUInt64LE(id); 
    const [escrowPubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('escrow'), idBuffer], programId
    )
    return escrowPubkey
}

export const getFeePubkey = () => {
    const [feePubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('fee')], programId
    )
    return feePubkey;
}

export const getFriendPubkey = (friend: PublicKey) => {
    const [friendPubkey] = PublicKey.findProgramAddressSync(
        [Buffer.from('friend'), friend.toBuffer()], programId
    )
    return friendPubkey;
}

export const getLastConfigId = async (connection: Connection, wallet: WalletContextState) => {
    const program = getAnchorProgram(connection, wallet)
    const config = await program.account.config.all()
    console.log(BigInt(config[0].account.lastOfferedId.toString()))
    return BigInt(config[0].account.lastOfferedId.toString())
}
