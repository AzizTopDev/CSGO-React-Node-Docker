import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    GAME_LIST
} from "../constants/ActionTypes";
import axios from '../util/Api';

export const getGameList = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/games',
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: GAME_LIST, payload: data.games });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: "Get game list request failed." });
            console.log("Error****:", error.message);
        });
    }
};
