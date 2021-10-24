import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * Popup props.
 */
interface Props {
    windowWidth: number;
    windowHeight: number;
    children: ReactNode;
    onClose: () => void;
}

/**
 * Open a new window and puts the children on that window.
 * The new window and the original window shares the redux store.
 * (That is, if you do something in the new window, it will be applied to the original window, too.)
 */
export const Popup = ({ windowWidth, windowHeight, children, onClose }: Props) => {
    const popupWindow = window.open('', '_blank', `width=${windowWidth},height=${windowHeight}`);

    if (!popupWindow) {
        alert('Failed to open the popup!');
        onClose();
        return <></>;
    }

    popupWindow.document.write('<html><head>');

    document.querySelectorAll('link').forEach(link => {
        popupWindow.document.write(link.outerHTML);
    });

    popupWindow.document.write('</head><body></body></html>');

    const popupRoot = document.createElement('div');
    popupRoot.className = 'Popup';
    popupWindow.document.body.appendChild(popupRoot);

    popupWindow.addEventListener('beforeunload', onClose);

    return createPortal(children, popupRoot);
};
