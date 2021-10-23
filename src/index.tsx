import React from 'react';
import { render } from 'react-dom';

import { App } from 'component/App';
import 'style/Page.scss';

// Remove the temporary elements.
const temporaryArea = document.querySelector('.Temporary');
temporaryArea?.parentNode?.removeChild(temporaryArea);

render(<App />, document.querySelector('.Root'));
