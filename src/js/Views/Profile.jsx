import React, { useContext } from "react";
import { UserContext } from "../component/App.jsx";
import { useNavigate } from "react-router";

const Profile = () => {
  const context = useContext(UserContext);
  const { removeContact, handleEditUser } = context
  console.log(context.userList);
  const navigate = useNavigate()
  const handleEdit = (index) => {
    handleEditUser(index)
    navigate("/")
  }
  return (

    <div>
      <div className="header p-5">
        <button className="green-button" onClick={() => navigate("/")}>Add New Contact</button>
      </div>
      
        {context.userList.map((contact, index) => {
          return (
            <div className="contactcard d-flex bg-white rounded border my-3" key={index}>
              <div className="imagen mt-4 ms-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzeWvDSqsx7HoZa1WPaWArZ4X95zd2tFgZQ&usqp=CAU" alt="Prot"></img>
              </div>
              <div className="informacioncontactos mt-3">
                <div className="contact-name-big p-2 ms-2"><h2>{contact.fullname}</h2></div>
                <div className="contact-email p-2 "><i class="far fa-envelope p-2"></i>{contact.email}</div>
                <div className="contact-phone p-2 "><i class="fas fa-phone p-2"></i>{contact.phone}</div>
                <div className="contact-address p-2 "><i class="fas fa-map-marker-alt p-2"></i>{contact.address}</div>
              </div>
              <div className="contact-action me-3 mt-3">
                <p onClick={() => removeContact(index)}><i class="fas fa-trash-alt"></i></p>
                <p onClick={() => handleEdit(index)}><i class="fas fa-edit"></i></p>
              </div>
            </div>
          )
        })}

      
    </div>
  );
};

export default Profile;