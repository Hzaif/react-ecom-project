import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [{}]
}

export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addtoCart(state,action) {
            const {id} = action.payload
            const index = state.cartItems.findIndex((stateitem) => stateitem.id == id )
            if(index== -1)
            {
                state.cartItems.push({id,itemCount:1})
            }
            else{
                 state.cartItems[index].itemCount++;
            }

        },
        removefromCart(state,action) {
            const { id, removeFullItem } = action.payload;
            const index = state.cartItems.findIndex((stateitem) => stateitem.id === id);

            if (index !== -1) {
                if (state.cartItems[index].itemCount === 1 || removeFullItem) {
                    state.cartItems.splice(index, 1);
                } else {
                    
                    state.cartItems[index].itemCount--;
                }
            }
        },
    },
    
});

export const {addtoCart, removefromCart,addItemPriceToTotal} = CartSlice.actions;

export default CartSlice.reducer;
