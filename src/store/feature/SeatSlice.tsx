import { Select } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISeat } from "../../models/ISeat";
interface ISeatSlice {
  SelectedSeats: ISeat[];
  isNineSelected: boolean;
  totalPrice: number;
}
const initialState: ISeatSlice = {
  SelectedSeats: [],
  isNineSelected: false,
  totalPrice: 0,
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    setSelectedSeats: (state, action: PayloadAction<ISeat>) => {
      console.log("secimden önce : ", state.SelectedSeats);
      if (!state.SelectedSeats.some((seat) => seat.id === action.payload.id)) {
        if (state.SelectedSeats.length < 8) {
          state.SelectedSeats.push(action.payload);
          console.log("secimden sonra : ", state.SelectedSeats);
        } else {
          state.isNineSelected = true;
        }
      }
    },
    removeSeat: (state, action: PayloadAction<ISeat>) => {
      state.SelectedSeats = state.SelectedSeats.filter(
        (seat) => seat.id === action.payload.id
      );
      state.isNineSelected = false;
    },
  },
});

export const { setSelectedSeats, removeSeat } = seatSlice.actions;
export default seatSlice.reducer;
