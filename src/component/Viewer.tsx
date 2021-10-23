import React, { useEffect, useState } from 'react';

import { ImageState } from 'store/Image';
import { useStrictSelector } from 'store/Store';
import styles from 'style/Viewer.scss';

/**
 * Save the data URL as a file.
 */
function downloadURL(url: string, fileName: string) {
    const dummyLink = document.createElement('a');
    dummyLink.href = url;
    dummyLink.download = fileName;
    dummyLink.click();
}

/**
 * Draw the image on the canvas and apply the operators according to the current value of ImageState.
 */
function drawImage(canvas: HTMLCanvasElement, image: HTMLImageElement, imageState: ImageState) {
    const context = canvas.getContext('2d');

    if (!context) {
        throw new Error('Failed to get 2D context from the canvas!');
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = image.width;
    canvas.height = image.height;

    context.filter = `blur(${imageState.blur}px) brightness(${imageState.brightness}%)`;
    context.drawImage(image, 0, 0);
    context.filter = 'none';

    context.textAlign = 'center';
    context.fillStyle = '#ffffff';
    context.strokeStyle = '#000000';
    context.lineWidth = 2;
    context.font = "60px 'Noto Sans KR'";
    const textX = canvas.width / 2.0;
    const textY = canvas.height - imageState.crop - 30;
    context.fillText(imageState.text, textX, textY);
    context.strokeText(imageState.text, textX, textY);

    context.clearRect(0, 0, imageState.crop, canvas.height);
    context.clearRect(canvas.width - imageState.crop, 0, imageState.crop, canvas.height);
    context.clearRect(0, 0, canvas.width, imageState.crop);
    context.clearRect(0, canvas.height - imageState.crop, canvas.width, imageState.crop);
}

export const Viewer = () => {
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
    const imageState = useStrictSelector(state => state.image);

    useEffect(() => {
        if (!canvas) {
            return;
        }

        const image = new Image();
        image.crossOrigin = 'anonymous';

        image.addEventListener('load', () => {
            drawImage(canvas, image, imageState);
        });

        image.src = imageState.url;
    }, [canvas, imageState]);

    return (
        <div className={styles.viewer}>
            <canvas
                className={styles.canvas}
                ref={node => {
                    setCanvas(node);
                }}
            />
            <button
                className={styles.saveButton}
                type={'button'}
                onClick={() => {
                    if (canvas) {
                        downloadURL(canvas.toDataURL('image/png'), 'Result.png');
                    }
                }}
            >
                Save
            </button>
        </div>
    );
};
