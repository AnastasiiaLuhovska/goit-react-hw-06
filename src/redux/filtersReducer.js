
const initialState = ''

const filtersReducer = (state = initialState, actions) =>{
    switch (actions.type){
        case('addFilter'): return actions.payload
        default: return state
    }
}

export default filtersReducer