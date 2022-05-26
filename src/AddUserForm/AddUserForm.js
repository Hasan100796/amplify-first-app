import React, { useState } from 'react'

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '',isAdmin:null,city:null }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  const handleInputChangeRadio = (event) => {
     // debugger
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.username) 
       
        return
debugger
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        required
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
        required
      />
      <label>Is Admin</label>
      <input type="radio" name='isAdmin' value="true" onChange={handleInputChangeRadio} required />True
      <input type="radio" name='isAdmin' value="false"   onChange={handleInputChangeRadio} required />False
      <label>City</label>
      <select name='city' onChange={handleInputChangeRadio} required>
          <option value="">Select</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Chandighar">Chandighar</option>
      </select>
      {/* <input
        type="text"
        name="isAdmin"
        value={user.isAdmin}
        onChange={handleInputChange}
      /> */}
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm