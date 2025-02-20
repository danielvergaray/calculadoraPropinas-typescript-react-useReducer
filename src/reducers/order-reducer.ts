import MenuItem from "../components/MenuItem"
import { OrderItem } from "../types"

export type OrderActions = 
{type:'add-item', payload: {item: MenuItem}} |
{type:'remove-item', payload: {item: MenuItem['id']}} |
{type:'place-order'} |
{type:'add-tip', payload: {value: number}}

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
        state : initialState,
        action : OrderActions
    ) => {

        if(action.type === 'add-item'){
            return{
                ...state
            }
        }

        if(action.type === 'add-tip'){
            return{
                ...state
            }
        }
        if(action.type === 'place-order'){
            return{
                ...state
            }
        }

        if(action.type === 'remove-item'){
            return{
                ...state
            }
        }

    return state
}