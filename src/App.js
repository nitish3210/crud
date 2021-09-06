import './App.css';
import React, {useState,useEffect} from "react";
import Axios from 'axios';


function App() {

  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [gender,setGender]=useState("");
  const [mob1,setMob1]=useState("");
  const [mob2,setMob2]=useState("");
  const [mob3,setMob3]=useState("");
  const [mob4,setMob4]=useState("");
  const [mob5,setMob5]=useState("");
  const [userlist,setUserlist]=useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setUserlist(response.data);
    });
  },[]);

  const insertOp=()=>{
    Axios.post("http://localhost:3001/api/insert",{
      fname:fname,
      lname:lname,
      email:email,
      gender:gender,
      mob1:mob1,
      mob2:mob2,
      mob3:mob3,
      mob4:mob4,
      mob5:mob5
    }).then(()=>{
      alert("successfull insertion");
    })
  }


  const deleteOp=(name)=>{
    Axios.delete(`http://localhost:3001/api/delete/${name}`);
  }
  const updateOp=()=>{
    Axios.put("http://localhost:3001/api/update",{
      fname:fname,
      lname:lname,
      email:email,
      gender:gender,
      mob1:mob1,
      mob2:mob2,
      mob3:mob3,
      mob4:mob4,
      mob5:mob5
      
    }).then(()=>{
      alert("successfull update");
    })
  }

  return (
    <div className="App">
     
     <div className="formWrapper">
      <h1>Form for CRUD operations</h1>
        <input type="text" placeholder="First Name" name="fName" onChange={(e)=>{setFname(e.target.value)}}></input>
        <input type="text" placeholder="Last Name" name="lName" onChange={(e)=>{setLname(e.target.value)}}></input>
        <input type="email" placeholder="please type correct email" name="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type="text" placeholder="Gender : Type Male or Female" name="gender" onChange={(e)=>{setGender(e.target.value)}}></input>
        <input type="tel" placeholder="mobile no.1" name="mob1" onChange={(e)=>{setMob1(e.target.value)}}></input>
        <input type="tel" placeholder="mobile no.2" name="mob2" onChange={(e)=>{setMob2(e.target.value)}}></input>
        <input type="tel" placeholder="mobile no.3" name="mob3" onChange={(e)=>{setMob3(e.target.value)}}></input>
        <input type="tel" placeholder="mobile no.4" name="mob4" onChange={(e)=>{setMob4(e.target.value)}}></input>
        <input type="tel" placeholder="mobile no.5" name="mob5" onChange={(e)=>{setMob5(e.target.value)}}></input>
        <div className="btnWrapper">
        <button onClick={insertOp} >Insert</button>
        <button onClick={updateOp} >Update</button>
      </div>
      </div>
      {
          userlist.map((val)=>{
            return <div className="showUser"><p><small><b>Name: </b>{val.fname} - {val.lname}</small></p>
            <p><small><b>Email : </b>{val.email}</small></p>
            <p><small><b>Gender : </b>{val.gender}</small></p>
            <p><small><b>Mob.no.1 :</b> {val.mob1}</small></p>
            <p><small><b>Mob.no.2 : </b>{val.mob2}</small></p>
            <p><small><b>Mob.no.3 : </b>{val.mob3}</small></p>
            <p><small><b>Mob.no.4 : </b>{val.mob4}</small></p>
            <p><small><b>Mob.no.5 : </b>{val.mob5}</small></p>
            <button onClick={()=>{deleteOp(val.fname)}} >Delete</button>
            </div>
          })
        }
    </div>
  );
}

export default App;
