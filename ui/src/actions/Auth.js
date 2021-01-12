import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_DATA,
    USER_TOKEN_SET,
} from "../constants/ActionTypes";
import axios from '../util/Api';

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
};

export const userSignUp = ({ name, email, password }) => {
    console.log(name, email, password);
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/register', {
            email: email,
            name: name,
            password: password
        }
        ).then(({ data }) => {
            console.log("__ SignUp api res __ : ", data);
            localStorage.setItem("token", JSON.stringify(data.token));
            axios.defaults.headers.common['Authorization'] = "Bearer " + data.token;
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: USER_TOKEN_SET, payload: data.token });
            dispatch({ type: USER_DATA, payload: data.user });
        }).catch(err => {
            dispatch({ type: FETCH_ERROR, payload: "User registeration error !" });
        });
    }
};

export const userSignIn = ({ email, password }) => {
    return (dispatch) => {
        console.error("___ sigin in email ___", email);
        console.error("___ sigin in password ___", password);
        dispatch({ type: FETCH_START });
        axios.post('/login', {
            email: email,
            password: password,
        }
        ).then(({ data }) => {
            console.log("userSignIn: ", data);
            localStorage.setItem("token", JSON.stringify(data.token));
            axios.defaults.headers.common['Authorization'] = "Bearer " + data.token;
            dispatch({ type: USER_TOKEN_SET, payload: data.token });
            dispatch({ type: USER_DATA, payload: data.user });
            dispatch({ type: FETCH_SUCCESS });
        }).catch(err => {
            dispatch({ type: FETCH_ERROR, payload: "User sign in error !" });
            dispatch({ type: SIGNOUT_USER_SUCCESS });
        });
    }
};

export const getUser = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/me',
        ).then(({ data }) => {
            console.log("_____ getUser API RES _______", data);
            dispatch({ type: USER_TOKEN_SET, payload: data.user.token });
            dispatch({ type: USER_DATA, payload: data.user });
            dispatch({ type: FETCH_SUCCESS });
        }).catch(err => {
            dispatch({ type: FETCH_ERROR, payload: "User not found." });
            dispatch({ type: SIGNOUT_USER_SUCCESS });
        });
    }
};


export const userSignOut = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/logout',
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            localStorage.removeItem("token");
            dispatch({ type: SIGNOUT_USER_SUCCESS });
        }).catch(err => {
            dispatch({ type: FETCH_ERROR, payload: "User sign out failed !" });
        });
    }
};

export const resendEmail = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/email/resend')
            .then(({ data }) => {
                console.log(" resend email api success: ", data.message)
                dispatch({ type: FETCH_SUCCESS, payload: data.message });
            })
            .catch(err => {
                console.error(" resend email api error : ", err);
                dispatch({ type: FETCH_ERROR, payload: "" });
            });
    }
}