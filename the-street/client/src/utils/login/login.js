import Admin from "./admin"

const TOKEN_KEY = 'jwt';

export const login = (email,password) => {
    if (email === Admin.email && password === Admin.password){
        localStorage.setItem(TOKEN_KEY, 'TestLogin');
    } else {
        alert("Email or Password is incorrect");
    }
    
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