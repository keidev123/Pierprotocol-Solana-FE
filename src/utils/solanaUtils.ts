import { Connection, PublicKey } from '@solana/web3.js'
import { Piersol } from './piersol'
import { AnchorProvider, Program } from '@project-serum/anchor'
import { WalletContextState } from '@solana/wallet-adapter-react'
import idl from './piersol.json'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

export const programId = new PublicKey(idl.metadata.address)
let program: Program<Piersol>

export const getAnchorProgram = (connection: Connection, wallet: WalletContextState) => {
    if (program) return program
    const provider = new AnchorProvider(connection, wallet, { preflightCommitment: 'processed' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    program = new Program(idl as any, programId, provider)
    return program
}
