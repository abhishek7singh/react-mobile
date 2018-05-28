import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerSW from './registerServiceWorker';

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
registerSW();
ReactDOM.render(<Index />, window.document.getElementById('index'));
