function setTheme(theme) {
    console.log(theme);
    return {

        type: 'SET_THEME',

        data: theme

    }

}

export {
    setTheme
}