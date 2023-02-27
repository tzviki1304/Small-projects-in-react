const reducer = (state, action)=>{
    switch (action.type) {
        case 'CLEAR_CART':
            return {...state, cart: []}
        case 'REMEVE':
            return {...state, cart: state.cart.filter((cartItem)=> cartItem.id !== action.payload) }
        case 'INCREASE':
            let tempItemIn = state.cart.map((cartItem)=>{
                if(cartItem.id === action.payload){
                    return {...cartItem, amount: cartItem.amount + 1}
                }
                return cartItem
            }) 
            return {...state, cart: tempItemIn }
        case 'DECREASE':
            let tempItemDe = state.cart.map((cartItem)=>{
                if(cartItem.id === action.payload){
                    return {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem
            }).filter((cartItem)=> cartItem.amount !== 0 )
            return {...state, cart: tempItemDe }
        case 'GET_TOTAL' :
            let {total, amount} = state.cart.reduce((cartTotal, cartItem)=>{
                const {price,amount} = cartItem ;
                const itemTotal = price * amount
                cartTotal.amount += amount;
                cartTotal.total += itemTotal;
                console.log(cartTotal);
                return cartTotal
            },{
                total:0,
                amount:0
            })
            total = parseFloat(total.toFixed(2))
            return {...state, total, amount}
        case 'LOADING':
            return {...state, loading: true}
        case 'DISPLAY_ITEMS':
            
            return {...state,cart: action.payload, loading:false}
    }
    return state
}

export default reducer;