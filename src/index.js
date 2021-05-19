import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import Dashboard from './pages/dashboard';
import HeadwayTheme from './themes/headway';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={HeadwayTheme}>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
