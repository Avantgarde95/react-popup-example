import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import { imageSlice } from 'store/Image';

/**
 * Global Redux store.
 */
export const store = configureStore({
    reducer: {
        [imageSlice.name]: imageSlice.reducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});

/**
 * Type-safe wrapper of useDispatch().
 */
export const useStrictDispatch: () => typeof store.dispatch = useDispatch;

/**
 * Type-safe wrapper of useSelector().
 */
export const useStrictSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
