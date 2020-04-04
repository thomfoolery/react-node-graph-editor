import React from 'react';
import ReactDOM from 'react-dom';

import DummyComponent from '../src/index';

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<DummyComponent />, wrapper) : false;