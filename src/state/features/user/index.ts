import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeMapper } from "../../../types";

type initialStateType = {
  afterLoggedInDetails: {};
};

const initialState: initialStateType = {
  afterLoggedInDetails: {},
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    /**
     *
     * @param state The initial state of the overall current reducer
     * @param action This contains the payload used to update the current reducer
     * @returns The updated state
     */
    updateUserReducer(
      state,
      action: PayloadAction<
        TypeMapper<initialStateType, "afterLoggedInDetails">
      >
    ) {
      return {
        ...state,
        afterLoggedInDetails: { ...action.payload },
      };
    },
  },
});

export const { updateUserReducer } = userSlice.actions;
export const userReducer = userSlice.reducer;
