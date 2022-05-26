import React, { useState } from 'react'

const EditUserForm = (props) => {
  const [userEdit, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...userEdit, [name]: value })
  }

  const handleInputChangeRadio = (event) => {
    debugger
  const { name, value } = event.target

  setUser({ ...userEdit, [name]: value })
}

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(userEdit.id, userEdit)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={userEdit.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={userEdit.username}
        onChange={handleInputChange}
      />
      <label>Is Admin</label>
      <input type="radio" name='isAdmin' value={userEdit.isAdmin}   onChange={handleInputChange} />True
      <input type="radio" name='isAdmin' value={userEdit.isAdmin}   onChange={handleInputChange} />False

      <label>City</label>
      <select name='city' onChange={handleInputChangeRadio} required>
      <option value="">Select</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Chandighar">Chandighar</option>
      </select>
      {/* <input
        type="text"
        name="isAdmin"
        value={userEdit.isAdmin}
        onChange={handleInputChange}
      /> */}
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm