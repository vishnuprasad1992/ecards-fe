import { useRouter } from "next/router";
import Link from "next/link";
import { loginUser } from "../../controllers/auth";
import { useState } from "react";
import { isEmail } from "../../utils/validator";


const Login = ({setPopupOpen,popupOpen}) => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [message, setMessage] = useState({});

  const validate = () => {
    const err = {};

    if (!user.email) err.email = "Email cannot be empty.";
    if (!isEmail(user.email)) err.email = "Please input a valid email.";
    if (!user.password) err.password = "Password cannot be empty.";
    setError(err);
    if (Object.keys(err).length) return false;

    return true;
  };
console.log(error)
  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const userResponse = await loginUser(user);
    if (userResponse && userResponse.status === "success") {
      setMessage({ ...message, loginSuccess: "User Logged in successfully" });
      localStorage.setItem("user",JSON.stringify(userResponse))
      setPopupOpen({...popupOpen,login:false})
      setTimeout(() => {
        location.reload()
      }, 1000);

    } else {
      setMessage({ ...message, loginFailed: "Invalid Credentials" });
    }
  };
  return (
    <div className="portfolio-form-modal">
      <form action="" className="portfolio-form mt30">
        {/* <div className="close mb20" onClick={()=>setOpen(false)}>
          <CancelIcon />
        </div> */}
        <h2 className="mb20 center form-heading" style={{ fontSize: "2rem" }}>
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        {error.email && <div className="error">{error.email}</div>}
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {error.password && <div className="error">{error.password}</div>}
        <div className="flex mt20 mb20">
          <button className="blue button" onClick={submit}>
            Login
          </button>
          <button className="red button ml20" onClick={() => router.push("/")}>
            {" "}
            Go back
          </button>
        </div>
        {message.loginSuccess && <div> {message.loginSuccess}</div>}
        {message.loginFailed && <div> {message.loginFailed}</div>}
        <br />
        <span>
          If you dont have account  <strong className="cursor" onClick={()=> setPopupOpen({...popupOpen,register:true})}>Register here</strong>
        </span>
      </form>
    </div>
  );
};

export default Login;
