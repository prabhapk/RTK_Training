import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'

export interface CounterState {
    value: number,
    data:any

}
 

const initialState: CounterState = {
    value: 0,
    data:[]
}

export const GetAllFunds = createAsyncThunk(
    'GetAllFunds/fetch',
    async (_, ) => {

        const url = 'https://dummyjson.com/products'
        try {
            const response = await axios.get(url);

            const updatedData = response.data.products.map((item:any) => ({
                ...item,
                isWishlisted: false,
                isAddedCart: false,
                quantity: 0
              }));

              
            return updatedData
        } catch (error: any) {
            throw error;
        }
    },
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        toggleWishlist: (state, action: PayloadAction<number>) => {
            const index = state.data.findIndex((item: { id: number }) => item.id === action.payload);
            if (index !== -1) {
              state.data[index].isWishlisted = !state.data[index].isWishlisted;
            }
          },
          toggleAddCart: (state, action: PayloadAction<number>) => {
            const index = state.data.findIndex((item: { id: number }) => item.id === action.payload);
            if (index !== -1) {
              const isNowAdded = !state.data[index].isAddedCart;
              state.data[index].isAddedCart = isNowAdded;
              state.data[index].quantity = isNowAdded ? 1 : 0;
            }
          }
    },
    extraReducers: builder => {
        // Pending stage
        builder.addCase(GetAllFunds.pending, state => {
          
        });
        builder.addCase(GetAllFunds.fulfilled, (state, action) => {
            state.data =action.payload ;
          });
          builder.addCase(GetAllFunds.rejected, state => {
         
          });
    }
})


export const { increment, decrement, incrementByAmount,toggleWishlist, toggleAddCart  } = counterSlice.actions

export default counterSlice.reducer