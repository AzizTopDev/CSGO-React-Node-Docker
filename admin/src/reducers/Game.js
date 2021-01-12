import { GAME_LIST } from '../constants/ActionTypes';

const INITIAL_STATE = {
    gameList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GAME_LIST:
            return {
                ...state,
                gameList: action.payload
            }
        default:
            return state;
    }
};