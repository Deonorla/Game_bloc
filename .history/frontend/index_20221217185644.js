// React
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// NEAR
import { GameBloc } from './near-interface';
import { Wallet } from './near-wallet';
import { UserContext, UserProvider } from './Context/UserContext';


// const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME })
// const gamebloc = new GameBloc({ contractId: process.env.CONTRACT_NAME, walletToUse: wallet });


const root = ReactDOM.createRoot(document.getElementById('root'));

// window.onload = async () => {
//   const { wallet } = useContext(UserContext);
//   const isSignedIn = await wallet.startUp()
//     if (isSignedIn) {
//         // await gamebloc.initializeContract(localStorage.getItem("near_app_wallet_auth_key"));
//        }
  root.render(
    <React.StrictMode>
      <UserProvider>
        <App  />
      </UserProvider>
    </React.StrictMode>
  );
// }