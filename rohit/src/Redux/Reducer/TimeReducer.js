export default function TimeReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_Time': return { ...state, time: action.data }


        default: return state

    }

}


