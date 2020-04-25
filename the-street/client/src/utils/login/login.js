import API from "../API/user"

const TOKEN_KEY = 'jwt';

export const login = (email,password) => {
    console.log(API.getUser(email))
    // if (email === API.getUser(email) && password === API.getUser(email).password){
    //     localStorage.setItem(TOKEN_KEY, 'TestLogin');
    // } else {
    //     alert("Email or Password is incorrect");
    // }
    
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}