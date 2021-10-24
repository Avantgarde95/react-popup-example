import React from 'react';

import { Input } from 'component/Input';
import { useStrictDispatch, useStrictSelector } from 'store/Store';
import { imageSlice } from 'store/Image';
import styles from 'style/Toolpane.scss';

/**
 * Collection of the inputs which modifies the store.
 */
export const Toolpane = () => {
    const imageState = useStrictSelector(state => state.image);
    const dispatch = useStrictDispatch();

    return (
        <div className={styles.toolpane}>
            <Input
                about={'Image URL'}
                type={'text'}
                initialValue={imageState.url}
                onSubmit={value => {
                    dispatch(imageSlice.actions.setURL(value));
                }}
            />
            <Input
                about={'Brightness (%)'}
                type={'number'}
                initialValue={`${imageState.brightness}`}
                onSubmit={value => {
                    dispatch(imageSlice.actions.setBrightness(+value));
                }}
            />
            <Input
                about={'Blur (px)'}
                type={'number'}
                initialValue={`${imageState.blur}`}
                onSubmit={value => {
                    dispatch(imageSlice.actions.setBlur(+value));
                }}
            />
            <Input
                about={'Crop (px)'}
                type={'number'}
                initialValue={`${imageState.crop}`}
                onSubmit={value => {
                    dispatch(imageSlice.actions.setCrop(+value));
                }}
            />
            <Input
                about={'Text'}
                type={'text'}
                initialValue={`${imageState.text}`}
                onSubmit={value => {
                    dispatch(imageSlice.actions.setText(value));
                }}
            />
        </div>
    );
};
