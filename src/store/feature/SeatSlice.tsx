import { Select } from "@mui/material";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISeat } from "../../models/ISeat";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
interface ISeatSlice {
  seatList: ISeat[]
  SelectedSeats: ISeat[];
  isNineSelected: boolean;
  totalPrice: number;
}
const initialState: ISeatSlice = {
  seatList: [],
  SelectedSeats: [],
  isNineSelected: false,
  totalPrice: 0,
};


export const fetchAllSeats = createAsyncThunk(
  '/seat/fetchAllSeats',
  async () => {
    return await fetch(apis.seatService+'/get-all-seats').then(data=>data.json())
  }
)


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
  extraReducers: (builder)=>{
    builder.addCase(fetchAllSeats.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
      state.seatList = action.payload.data;
    })
  }
});

export const { setSelectedSeats, removeSeat } = seatSlice.actions;
export default seatSlice.reducer;
