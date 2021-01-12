import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Auth from './Auth';
import Common from './Common';
import Game from './Game';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: Auth,
  commonData: Common,
  game: Game
});
