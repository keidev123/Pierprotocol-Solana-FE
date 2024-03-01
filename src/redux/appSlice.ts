import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    items: string[];
    status: string;
    count: number;
}

const initialState: AppState = {
    items: [],
    status: 'idle', // or 'loading', 'failed', etc.
    count: 0,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        },
        setStatus: (state, action: PayloadAction<string>) => {
            state.status = action.payload;
        },
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
});

export const { addItem, setStatus, increment, decrement, incrementByAmount } = appSlice.actions;

export default appSlice.reducer;
