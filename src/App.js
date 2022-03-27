
import './App.css';
import { useState,useEffect }from "react";
import Axios from "axios"

function App() {

  const [listOfUsers,setListOfUsers]=useState([]);
  const[name, setName]=useState("");
  const[age, setAge]=useState("0");
  const[username, setuserName]=useState("");

  useEffect(() =>{
      Axios.get("http://localhost3001/getUsers").then((response)=>{
        setListOfUsers(response.data)
      });
  }, []);

  const createUser =()=>{
      Axios.post("http://localhost3001/createUser",{
        name,
        age,
        username,
      }).then((response)=>{
        setListOfUsers([...listOfUsers,{name:name,age:age,username:username}]);
      });
  };

  return <div class="App">
    <div class="usersDisplay">

    {listOfUsers.map((user) => {
      return(<div>
      
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>UserName: {user.username}</h1>
      
      </div>
      );
    })};

    </div>

    <div>
      <input type="text" placeholder="Name" onchange={(event)=>{setName(event.target.value);}}></input>
      <input type="numver" placeholder="Age"onchange={(event)=>{setAge(event.target.value);}}></input>
      <input type="text" placeholder="UserName"onchange={(event)=>{setuserName(event.target.value);}}></input>
      <button onclick={createUser}>Create User</button>
    </div>
  </div>

}


export default App;
