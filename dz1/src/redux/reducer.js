const initialState = {
    value : 0
}

export default function reducer(state=initialState, action){
    if (action.type === "PLUS"){
        return{
            ...state,value:state.value +1
        }
    }else if (action.type=== "MINUS"){
        return {
            ...state,value:Math.max(0,state.value-1)
        }
    }else if (action.type === "PLUS10"){
        return {
            ...state,value:state.value +10
        }
    }else if (action.type==="MINUS10"){
        return {
            ...state,value: Math.max(0,state.value -10)
        }
    }else if (action.type==="RESET"){
        return {
            ...state,value: state.value=0
        }
    }
    return state
}