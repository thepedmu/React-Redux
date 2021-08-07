const defaultState = {
    list: ['cid moosa', 'Hitler']
}

const reducer = (state = defaultState, action) => {

    switch(action.type) {
        case 'MOVIE:ADD': {
          const newList = state.list.concat([action.movieName]);
          debugger
          return {
            list: newList
          }
        }
        case 'MOVIE:DELETE':{
          
          debugger
          return{
            list : state.list.filter(i => action.movie!== i)
          } 
          debugger        }
        default: return state;
    }    
};

export default reducer;