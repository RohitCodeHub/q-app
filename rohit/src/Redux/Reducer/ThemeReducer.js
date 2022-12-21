export default function ThemeReducer(state = {}, action) {

    //console.log('user inside reducer', action.data)

    switch (action.type) {

        case 'SET_THEME': return { ...state, theme: action.data }


        default: return state

    }

}


