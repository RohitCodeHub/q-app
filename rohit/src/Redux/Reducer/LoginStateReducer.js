export default function LoginStateReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_LOGIN_STATE': return { ...state, login: action.data }

   
        default: return state

    }

}


