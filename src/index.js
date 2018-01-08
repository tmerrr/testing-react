import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheckboxWithLabel from './CheckBoxWithLabel'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />, document.getElementById('root'));
registerServiceWorker();
