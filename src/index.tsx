import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import ReactDOM from "react-dom"

import { store } from './store';
import App from './App';
import i18next from './i18n/config';

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next} >
      <Provider store={store} >
        <App />
      </Provider>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
