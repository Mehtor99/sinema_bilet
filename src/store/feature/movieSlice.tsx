import { IMovieModel } from "../../models/IMovieModel";
import apis from "../../config/RestApis"
import { createAsyncThunk, createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { IBaseResponse } from "../../models/IBaseResponse";

interface IMovieState{
    movie : IMovieModel | null,
    movieIsLoading : boolean,
    movieList : IMovieModel[],
    movieListIsLoading : boolean
}

const initialMovieState : IMovieState = {
    movie : null,
    movieIsLoading : false,
    movieList : [], 
    movieListIsLoading : false
}

export const fetchGetAllMovie = createAsyncThunk(
    'movie/fetchGetAllMovie',
    async()=>{
        return await fetch(apis.movieService+ '/movie-list').then(data=>data.json())
    }
)

const movieSlice = createSlice({
    name : 'movie',
    initialState: initialMovieState,
    reducers: {

    },
    extraReducers : (build)=>{
        build.addCase(fetchGetAllMovie.pending,(state)=> {state.movieIsLoading=true})
        build.addCase(fetchGetAllMovie.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.movieIsLoading = false
            if(action.payload.code === 200){
                state.movieList = action.payload.data;
            }    
    })

}
})

export default movieSlice.reducer;