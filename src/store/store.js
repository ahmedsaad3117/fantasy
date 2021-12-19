import {createStore} from 'redux';

export const ADD_PLAYER_FIELD = "getAllSelctedPlayer"
export const REMOVE_PLAYER_FIELD = "removePlayerField"

const intinalState =  require('../assets/files/player-names.json');


const playerReducer = ( state = {data :intinalState , selctedPlayer : [] } , action)=>{
    const player = action.value;
    if(action.type === ADD_PLAYER_FIELD){

       
        return {
            data : intinalState,
            selctedPlayer : [...state.selctedPlayer,intinalState.find(x => x.number == player) ]
        }
    }
    if(action.type === REMOVE_PLAYER_FIELD){
       
        return {
            data : intinalState,
            selctedPlayer : [...state.selctedPlayer.filter(x => x.number !== player) ]
        }
    }
    return state
    
    
}


const store = createStore(playerReducer);


export default store ;