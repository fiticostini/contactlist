import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../component/App.jsx";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Login = () => {

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        address: ""
    });
    console.log(user);
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const {addContact, userEdit, userList} = context; 

    const handLeChange = (event) => {
        console.log(event.target.name);
        setUser({...user, [event.target.name]: event.target.value });
    };

    

    const redirectOnLoging = () => {

        console.log("lo redireccione a su perfil");
        addContact(user);
        navigate("/profile");
    };

    useEffect(() => {
        if(userEdit !== null) {
            const userToEdit = userList.find((user, index) => index == userEdit)
            console.log(userToEdit);
            setUser(userToEdit)
        }
        
    }, [])
    return (
        <div className="card w-75 m-auto my-5">
            <div className="titulo text-center card-header">
                <h1><b>ADD NEW CONTACT</b></h1>
            </div>
                <div className="card-body">

                    <label htmlFor="fullname">Full Name</label>
                    <input type="text"
                           name="fullname" 
                           value={user.fullname}
                           onChange={(event) => handLeChange(event)} 
                           className="form-control" />

                    <label htmlFor="email">Email</label>
                    <input type="email"
                           name="email"
                           value={user.email} 
                           onChange={(event) => handLeChange(event)} 
                           className="form-control" />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" 
                           name="phone"
                           value={user.phone}
                           onChange={(event) => handLeChange(event)} 
                           className="form-control" />

                    <label htmlFor="address">Address</label>
                    <input type="text"
                           name="address"
                           value={user.address}
                           onChange={(event) => handLeChange(event)} 
                           className="form-control" />
                    
                    <div>
                    <button className="btn-login" onClick={() => redirectOnLoging()}>Log In</button>
                    </div>
                    <div>
                    <Link to={"/profile"}>Or get back to contacts</Link>


                    </div>
                </div>
        </div>
    );
};

export default Login;