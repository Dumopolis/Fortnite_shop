export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return{
                ...state,
                goods: payload.items || [],
                loading: false
            }
        case 'HANDLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'ADD_TO_BASKET':
            {
                const itemIndex = state.order.findIndex(el => el.id === payload.id)
                let newOrder = null;
                if (itemIndex < 0) {
                    
                    const newItem = {
                        ...payload,
                        quantity: 1,
                    }
                    newOrder = [...state.order, newItem]
                } else {
                    newOrder = state.order.map((el, index) => {
                        if (index === itemIndex) {
                            return {
                                ...el,
                                quantity: el.quantity + 1,
                            }
                        } else {
                            return el
                        }
                    })
                }
                return {
                    ...state,
                    order: newOrder,
                }
            }
        case 'DECREASE_QUANTITY_ITEM': {
            const itemIndex = state.order.findIndex(el => el.id === payload.id)
            const newOrder = state.order.map((el, index) => {
                if (index === itemIndex && el.quantity > 1) {

                        return {
                            ...el,
                            quantity: el.quantity - 1,
                        }
                    } 
                return el

            })
            return {
                ...state,
                order: newOrder
            }

        }
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                order: state.order.filter((item) => item.id !== payload)
            }
        case 'HANDLE_BUY_NOW':
            return{
                ...state,
                order: [],
                isBasketShow: false,
                isThanksShow: !state.isThanksShow,
            }  
        default:
            return state;
    }

}