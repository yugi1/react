import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
export const AuthContext = createContext({});

function AuthProvider (props) {
const [state, setState] = useState
  return (
    <AuthContext.Provider value={{
      ...state,
      setState
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider>
    <Router>
    <App />
    </Router>
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
