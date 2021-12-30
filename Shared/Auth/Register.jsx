import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { registerUser } from "../../controllers/auth";
import { isEmail } from "../../utils/validator";

const Register = ({setPopupOpen,popupOpen}) => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [message, setMessage] = useState({});

  const validate = () => {
    const err = {};

    if (!user.name) err.name = "Name cannot be empty.";
    if (!user.email) err.email = "Email cannot be empty.";
    if (!user.mobile) err.mobile = "Mobile cannot be empty.";
    if (!user.confirmPassword) err.confirmPassword = "Mobile cannot be empty.";

    var uppercase = /[A-Z]/;
    var lowercase = /[a-z]/;
    var number = /[0-9]/;
    var special = /[\W]{1,}/;
    if (!isEmail(user.email)) err.email = "Please input a valid email.";
    if (!uppercase.test(user.password))
      err.password = "Password should contain atleast one Uppercase";
    if (!lowercase.test(user.password))
      err.password = "Password should contain atleast one lowercase";
    if (!number.test(user.password))
      err.password = "Password should contain atleast one number";
    if (!special.test(user.password))
      err.password = "Password should contain atleast one special character";
    if (!user.password) err.password = "Password cannot be empty.";
    if (user.password && user.password.length < 6)
      err.password = "Password length must be atleast 6 characters";
    if (user.password !== user.confirmPassword)
      err.confirmPassword = "Password not matching";
    setError(err);
    if (Object.keys(err).length) return false;

    return true;
  };
  const submit = async(e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    } 
    const userResponse = await registerUser(user);
    if(userResponse && userResponse.status === "success"){
      setMessage({...message,registerSuccess:"User registered successfully"})
      setPopupOpen({...popupOpen,register:false})
      setTimeout(() => {
        router.push("/")
      }, 2000);
    }else{
      setMessage({...message,registerFailed:"Something went wrong"})
    }
  };
  return (
    <div className="portfolio-form-modal">
      <form action="" className="portfolio-form mt30">
       
        <h2 className="mb20 center form-heading" style={{ fontSize: "2rem" }}>
          Register
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        {error.name && <div className="error">{error.name}</div>}
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        {error.email && <div className="error">{error.email}</div>}
        <input
          type="number"
          placeholder="Mobile"
          value={user.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />
        {error.mobile && <div className="error">{error.mobile}</div>}
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {error.password && <div className="error">{error.password}</div>}
        <input
          type="password"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        {error.confirmPassword && <div className="error">{error.confirmPassword}</div>}
        <div className="flex mt20">
          <button className="blue button" onClick={submit}>
            Register
          </button>
          <button className="red button ml20" onClick={() => router.push("/")}>
            Go back
          </button>
        </div>
        {message.registerSuccess && <div> {message.registerSuccess}</div>}
        {message.registerFailed && <div> {message.registerFailed}</div>}
        {/* <span>
          If you have account <Link href="/login"> Login here</Link>
        </span> */}
      </form>
    </div>
  );
};

export default Register;
