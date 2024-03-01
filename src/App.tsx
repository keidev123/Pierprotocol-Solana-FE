import Router from './router/Router'
import "./styles/main_style.scss"
import "./App.css"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { useMemo, FC } from 'react'
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

const App: FC = () => {
    const solNetwork = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
    // const endpoint = 'https://api.devnet.solana.com'
    const wallets = useMemo(
        () => {
            return [
                new PhantomWalletAdapter(),
                new SolflareWalletAdapter()
            ]
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletModalProvider>
                    <Provider store={store}>
                        <Router />
                    </Provider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

    )
}

export default App
