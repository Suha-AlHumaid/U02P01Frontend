import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login";
import "./style.css";
const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const user = JSON.parse(userStorage);
    setUser(user);
  }, []);
  //https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/df2b09dd93685c10a6cacdeb/4503151.png
  return (
    <div >
      {user ? (
        navigate("/Recipes")
      ) : (
        <div className="log">
                 <div className="left">
                     <div><h1>My Recipe's Book</h1></div>
                     <div className="yellowLine"></div>
                     <div><Login/></div>
                 </div>
                  <div className="right">
              <img className="imgRight" src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/df2b09dd93685c10a6cacdeb/4503151.png"/>
          </div>
     
    
        </div>
      )}
    </div>
  );
};

export default Home;

{
  /* <div className="container">
{user ? (
  navigate("/Recipes")
) : (
  <div>
    <div className="ImgBox">
      <img
        className="homeImg"
        src="https://www.teahub.io/photos/full/19-194395_dark-mood-food-photography.jpg"
      />
    </div>
    <div className="loginBox">
      <div className="titleBox">
        <h1 className="title">YUMMY</h1>
      </div>
      <Login id="login" />
    </div>
  </div>
)}
</div> */
}
