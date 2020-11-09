import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './container/App2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App2 appTitle='Person Manager' subTitle='Sub App'/>, document.getElementById('root'));
registerServiceWorker();
