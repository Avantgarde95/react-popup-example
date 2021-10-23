import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Information of the image and the operators.
 */
export interface ImageState {
    url: string;
    brightness: number;
    blur: number;
    crop: number;
    text: string;
}

const initialState: ImageState = {
    url: 'https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg',
    brightness: 100,
    blur: 0,
    crop: 0,
    text: 'I created another bug',
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setURL: (state, action: PayloadAction<string>) => {
            state.url = action.payload;
        },
        setBrightness: (state, action: PayloadAction<number>) => {
            state.brightness = action.payload;
        },
        setBlur: (state, action: PayloadAction<number>) => {
            state.blur = action.payload;
        },
        setCrop: (state, action: PayloadAction<number>) => {
            state.crop = action.payload;
        },
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});
