import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "language",
    initialState: {
        current: "en",
        available: Object.freeze({
            1: "en",
            2: "zh-TW",
            "zh-TW": 2,
            en: 1,
        }),
    },
    reducers: {
        switchLang: (state, action) => {
            const { payload } = action;

            if (!state.available[payload])
                throw new Error(`'Language ${payload}' is not available.`);

            state.current = payload;
        },
    },
});

export const { switchLang } = languageSlice.actions;

export default languageSlice.reducer;
