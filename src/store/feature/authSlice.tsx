import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILoginRequest } from "../../models/LoginRequest"
import apis from "../../config/RestApis"
import { RegisterRequest } from "../../models/RegisterRequest"
import { IBaseResponse } from "../../models/IBaseResponse"
import swal from 'sweetalert'



const initialAuthState = {
    isAuth: false,
    isLoginLoading: false,
    isRegisterLoading: false,
    user: {}
}

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async (payload:ILoginRequest) => {
        const response = await fetch(apis.userService+'/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)

        }).then(data=>data.json());
        return response;
    }
)

export const fetchRegister = createAsyncThunk(
    'user/fetchRegister',
    async(payload:RegisterRequest) => {
        const response = await fetch(apis.userService+'/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json());
        return response;
    }

)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchRegister.pending,(state)=>{state.isRegisterLoading = true;})
        build.addCase(fetchRegister.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
            state.isRegisterLoading = false;
            if(action.payload.code===200){

                swal('Başarılı','Üyelik başarılı ile oluşturuldu.','success')
                console.log(action.payload.data)
            }
            else{
                swal('Kullanıcı adı ya da şifre hatalı',action.payload.message,'error')
                console.log(action.payload.data)
            }
        })

        build.addCase(fetchLogin.pending,state=>{state.isLoginLoading=true})
        build.addCase(fetchLogin.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
            state.isLoginLoading = false;
            if(action.payload.code===200){
                state.isAuth = true;
                localStorage.setItem('token',action.payload.data)
                console.log('Giriş başarılı')
            }
            else{
                
            }
        })

    }
})

export default authSlice.reducer;




