import React, { useState, useEffect } from "react";
import {useNavigate, Link } from "react-router-dom";
import Unreachable from "../Unreachable";
import { IoIosKeypad } from "react-icons/io";
import "./style.css";
import axios from "axios";
import Header from "../Header";

const Profile = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    setUser(JSON.parse(userStorage));
  }, []);

  const updateProfile = async (e) => {
    setMessage("");
    e.preventDefault();

    const res = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/user/updateUser/${user.user._id}`,
      {
        userName: userName,
        email: email,
        password: password,
      }
    );
    console.log(res.data.message);
    if (typeof res.data == "object") {
      localStorage.setItem("user", JSON.stringify({ user: res.data }));
      setMessage("Updated Successfully");
    } else if ("Email is already taken") {
      console.log(res.data);
      setMessage("Sorry, Not updated");
    }
  };
  return (
    <div className="profilec">
      {user ? (
        <>
          <Header userName={userName} />
          <div className="userP">
            <img
            alt="profileImg"
              src="https://media.istockphoto.com/photos/young-charming-pretty-woman-is-smiling-while-smelling-the-aroma-of-picture-id944872822?k=20&m=944872822&s=612x612&w=0&h=wRFVEc_MoKAYce6UtfLpxgF8TH1uy8XJo_baNzlVKoU="
              className="profileImg"
            />

            <div className="userProfile">
              <form
                className="prfileForm"
                method="POST"
                onSubmit={updateProfile}
              >
                <div className="flex">
                <h1 className="space title ">Update Your Account  </h1>
                <IoIosKeypad
                          className="icon"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/Recipes");
                          }}
                        />
                        </div>
                <div className="yellowLine"></div>
                <input
                  type="text"
                  name="userName"
                  placeholder="Name"
                  className="input size"
                  defaultValue={user.user.userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input size"
                  defaultValue={user.user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input size"
                  defaultValue={user.user.password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {message ? <p className="message"> {message}</p> : ""}
                <div className="flex">
                  <p>
                    <Link to="/Recipes"> BACK </Link>
                  </p>
                  <input type="submit" className="btn" value="Update" />
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Unreachable />
      )}
    </div>
  );
};

export default Profile;
