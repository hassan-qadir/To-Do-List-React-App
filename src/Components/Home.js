import React from "react";
import { useGlobal } from "../Context";


const Home = () => {
  const{Input,Item,InputFeild,btnAdd,itemRemove,setError} = useGlobal();
  return (
       <> 
       <div className="container mt-3 bg-light p-3">
       <h1 className="text-center bg-warning">ToDo List</h1>
       <div className="form-outline text-center">
       <p className="text-danger">{setError}</p>
  <input type="text" style={{width:"50%",padding:"8px"}}value={Input} onChange={(e) => InputFeild(e.target.value)} />
  <button style={{padding:"10px",border:"none",marginLeft:"10px"}} onClick={() => btnAdd(Input) }>Add</button>
</div>
    
{
  Item.map((curElm) =>{
    return (
    <>
    <div className="text-center">
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"15px",marginTop:"15px",}} key={curElm.id}>
    <h5>{curElm.data}</h5>
    <button style={{border:"none",backgroundColor:"pink"}} onClick={() =>itemRemove(curElm.id)}>Remove</button>
    </div>
    </div>
    </>
    )
  })
}
</div>
   
    </>
  )
}

export default Home
