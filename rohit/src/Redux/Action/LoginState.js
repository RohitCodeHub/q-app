function LoginState(user) {
    console.log(user);
    return {

        type: 'SET_LOGIN_STATE',

        data: user

    }

}

export {
    LoginState
}