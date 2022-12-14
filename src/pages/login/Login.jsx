import React, { useContext} from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Login = () => {
  const {login} = useContext(AuthContext);
 const handleLogin = () =>{
  login()
 }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>リン & クッキー</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis
            commodi assumenda. Tenetur, cupiditate cum. Corporis quod ipsum
            exercitationem fugiat eligendi incidunt sed ab? Ipsam perferendis
            doloribus nam quos quisquam!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
