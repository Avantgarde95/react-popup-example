import React from 'react';
import { Provider } from 'react-redux';

import { Viewer } from 'component/Viewer';
import { Toolpane } from 'component/Toolpane';
import { store } from 'store/Store';
import styles from 'style/App.scss';

export const App = () => (
    <Provider store={store}>
        <div className={styles.app}>
            <div className={styles.header}>Image editor</div>
            <div className={styles.content}>
                <div className={styles.center}>
                    <Viewer />
                </div>
                <div className={styles.right}>
                    <Toolpane />
                    <button type={'button'} className={styles.popupButton}>
                        Open in the new window
                    </button>
                </div>
            </div>
        </div>
    </Provider>
);
