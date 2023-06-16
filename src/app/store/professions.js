import { createSlice } from "@reduxjs/toolkit";
import professionService from "../services/profession.service";
import isOutDated from "../utils/isOutDated";

const professionsSlice = createSlice({
    name: "professions",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        professionsRequested: (state) => {
            state.isLoading = true;
        },
        professionsRecived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        professionsRequestField: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: professionsReducer, actions } = professionsSlice;
const { professionsRequested, professionsRecived, professionsRequestField } =
    actions;

export const loadProfessionsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().professions;
    if (isOutDated(lastFetch)) {
        dispatch(professionsRequested());
        try {
            const { content } = await professionService.get();
            dispatch(professionsRecived(content));
        } catch (error) {
            dispatch(professionsRequestField(error.message));
        }
    }
};

export const getProfessions = () => (state) => state.professions.entities;
export const getProfessionsLoadingStatus = () => (state) =>
    state.professions.isLoading;

export const getProfessionById = (id) => (state) => {
    if (state.professions.entities) {
        return state.professions.entities.find((p) => p._id === id);
    }
};

export default professionsReducer;
