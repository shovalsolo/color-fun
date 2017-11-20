let defultState={
  color:"red"
}

const mainReducer=(state=defultState,action)=>{
  if (action.type ==="CHANGE_COLOR"){
    return{
      ...state,
      color:action.color
    }
  }else{
    return{
      ...state
    }
  }
}

export default mainReducer;