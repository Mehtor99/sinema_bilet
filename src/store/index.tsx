import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authSLice, SeatSlice ,movieSlice} from "./feature";

const store = configureStore({
  reducer: {
    seat: SeatSlice,
    auth: authSLice,
    movie: movieSlice
  },
});

export type sinemaDispatch = typeof store.dispatch;
export type SinemaState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<SinemaState>();
export default store;
