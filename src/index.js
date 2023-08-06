// React
import React from "react";
// redux
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./store/rootReducer";
// router
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// modal
import Modal from "react-modal";
// Styles
import "./index.css";
import "./styles/App.scss";
// App
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const store = configureStore({
  reducer: rootReducer
});

Modal.setAppElement(rootElement);
    
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
