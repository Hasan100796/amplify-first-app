import react, { useState,useEffect } from "react";
import UserTable from './tables/UserTable'
import AddUserForm from "./AddUserForm/AddUserForm";
import EditUserForm from "./AddUserForm/EditUserForm";

const fetchURL = "https://jsonplaceholder.typicode.com"
const App = () => {

  const [data, setData] = useState(null)
  const getData = () =>
  fetch(`${fetchURL}/posts`)
    .then((res) => res.json())

    useEffect(() => {
      getData().then((data) => setData(data))
    }, [])
    

  const initialFormState = { id: null, name: '', username: '',isAdmin:null,city:null }
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette', isAdmin:'false',city:'Lucknow' },
    { id: 2, name: 'Craig', username: 'siliconeidolon', isAdmin:'false',city:'Lucknow' },
    { id: 3, name: 'Ben', username: 'benisphere', isAdmin:'false' ,city:'Lucknow' },
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const addUser = (user) =>{
    debugger
    user.id=users.length+1
    setUsers([...users, user])
  }

  const deleteUser = (id) =>{
      setUsers(users.filter((user)=> user.id !==id))
  }

   const editRow = (userEdit)=>{
     debugger
   setEditing(true)
    setCurrentUser({id:userEdit.id,name:userEdit.name,username:userEdit.username,isAdmin:userEdit.isAdmin,city:userEdit.city})
    
    //setCurrentUser({ ...currentUser, isAdmin: userEdit.isAdmin })
   }

   const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((userEdit) => (userEdit.id === id ? updatedUser : userEdit)))
  }
  return (
    
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>

      <div className="flex-large">
     <div> 
       <table>
         <thead>
           <tr>
             <th>S.No</th>
             <th>Title</th>
             <th>Body</th>
           </tr>
         </thead>
      <tbody>
     {data?.map((item,index) => 
     <tr key={item.id}>
     <td>{index+1}</td>
     <td>{item.title}</td>
     <td>{item.body}</td>
   </tr>
     
      )} 
      
      </tbody>
      </table>
     </div>
  </div>
    </div>

    
  );
  
}

export default App