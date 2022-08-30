const reducer =(state, action) => {
switch(action.type){
   case "SET_TYPE":
    return{
     ...state,
     Input: action.payload
    }
    case "SET_ARRAY":
      const {id, data} = action.payload;
      if(data){
      return{
         ...state,
         setError:"",
         Input:'',
         Item:[
            ...state.Item,
            {
            id,   
            data
         }
         ] 
      }
   }else{
      return{
         ...state,
         setError:"filled the input"
      }
   }
         case "ID_REMOVE":
        return{
         ...state,
         Item: state.Item.filter((curElm) =>{
            return curElm.id !== action.payload;
         }),
        };
          
}
return state;
}

export default reducer