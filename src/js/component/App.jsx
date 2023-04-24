import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../Views/Profile.jsx";
import Login from "../Views/Login.jsx";


export const UserContext = createContext();

const App = () => {
    const [userList, setUserList] = useState([]) 

    const [userEdit, setUserEdit] = useState(null)
    

    const addContact = (contact) => {
      if(userEdit !== null){
        const newList = userList.filter((user, index) => index !== userEdit)
        setUserList([...newList, contact])
        setUserEdit(null)
        return
      }  
      setUserList([...userList, contact])
    }

    const removeContact = (contactIndex) => {
      const newList = userList.filter((user, index) => index !== contactIndex);
      setUserList(newList);
    }

    const handleEditUser = (index) => {
      setUserEdit(index);
    }

    const contextValue = {
        addContact: addContact,
        userList: userList,
        removeContact: removeContact,
        handleEditUser: handleEditUser, 
        userEdit: userEdit  
    };
    return (
        <UserContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
};

export default App;