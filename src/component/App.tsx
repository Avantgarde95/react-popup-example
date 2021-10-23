import React, { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store/Store';
import { Viewer } from 'component/Viewer';
import { Toolpane } from 'component/Toolpane';
import { Popup } from 'component/Popup';
import styles from 'style/App.scss';

export const App = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <Provider store={store}>
            <div className={styles.app}>
                <div className={styles.header}>Image editor</div>
                <div className={styles.content}>
                    <div className={styles.center}>
                        <Viewer />
                    </div>
                    {isPopupOpen ? (
                        <Popup
                            windowWidth={400}
                            windowHeight={600}
                            onClose={() => {
                                setPopupOpen(false);
                            }}
                        >
                            <Toolpane />
                        </Popup>
                    ) : (
                        <div className={styles.right}>
                            <Toolpane />
                            <button
                                className={styles.popupButton}
                                type={'button'}
                                onClick={() => {
                                    setPopupOpen(true);
                                }}
                            >
                                Open in the new window
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Provider>
    );
};
