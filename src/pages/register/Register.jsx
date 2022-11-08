import React from "react";
import "./register.scss";
import {Link} from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="card_register">
        <div className="left_register">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right_register">
          <h1>リン & クッキー</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a
            debitis vel id iste, deleniti quae, autem iure asperiores
            perspiciatis saepe perferendis nisi porro praesentium. Maiores enim
            repellendus repellat soluta.
          </p>
          <span>Don't have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
