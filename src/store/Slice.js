import{createAsyncThunk, createSlice} from '@reduxjs/toolkit';
export const fetchRandomPost = createAsyncThunk(
    'fetchRandomPost',
    async (data, thunkAPI) =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    }
);
const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts:[],
    },
    extraReducers:{
        [fetchRandomPost.fulfilled]: (state, action) =>{
            console.log(action. payload.slice(0,10))
            state.posts = action.payload.slice(0,10)
        }
    }
})
const postReduce = postSlice.reducer;
export default postReduceR