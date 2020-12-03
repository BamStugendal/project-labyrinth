import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
    name: 'game',
    initialState: {
        username: '',
        description: '',
        direction: [],
        coordinates: '',
        history: []
    },
    reducers: {
        generateGameStart: (state, action) => {
            // Check if quote from Redux store is not empty object.
            // If it is, do not push empty object to history array
            // If it is not, do it
            state.history = [...state.history, action.payload];

            state.direction = action.payload.actions;   

            
			state.description = action.payload.description;
			state.coordinates = action.payload.coordinates;
        },
        updateUserName: (state, action) => {
            state.username = action.payload;
        },
        generateDirection: (state, action) => {
            // Check if quote from Redux store is not empty object.
            // If it is, do not push empty object to history array
            // If it is not, do it
            // if (state.direction.direction) {
            //     state.history = [...state.history, state.direction];
            // }
            // state.direction = action.payload;   
        },
        historyGoBack: (state, action) => {
            if (state.history.length > 0) {
                state.direction = state.history[state.history.length - 1];
                state.history = state.history.slice(0, state.history.length - 1);
            }
        }
    }
});