export default function reducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_USER': return { ...state, user: action.data }

   
        default: return state

    }

}


