import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // someFeature: "WORKING",
    selectedTags: [],
};

export const someSlice = createSlice({
    name: "feature",
    
    initialState,
    reducers: {
        changeFeature: (state, action) => {
            // state.someFeature = action.payload;
            if(!state.selectedTags.includes(action.payload))
                state.selectedTags.push(action.payload)
        },
        clearFeatures: (state) => {
            state.selectedTags = []
        },
        clearFeature: (state, action) => {
            if(state.selectedTags.length){
                const index = state.selectedTags.indexOf(action.payload);
                if(index > -1)
                    state.selectedTags.splice(index, 1);
            }
        }
    }
});

export const {
    changeFeature,
    clearFeature,
    clearFeatures,
} = someSlice.actions;

// export const selectSomeFeature = (state) => state.feature.someFeature;
export const selectSomeFeature = (state) => state.feature.selectedTags;


export default someSlice.reducer;