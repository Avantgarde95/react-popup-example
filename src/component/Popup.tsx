import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * Popup props.
 */
interface Props {
    windowWidth: number;
    windowHeight: number;
    children: ReactNode;
}

export const Popup = ({ windowWidth, windowHeight, children }: Props) => {
    const popupWindow = window.open('', '_blank', `width=${windowWidth},height=${windowHeight}`);

    if (!popupWindow) {
        alert('Failed to open the popup!');
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

    return createPortal(children, popupRoot);
};
