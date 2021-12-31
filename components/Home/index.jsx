import Header from "../../Shared/Header"
import Banner from "./Banner"
// import Services from "../Services/index"
import About from "../About/index"
import Contact from "../Contact/index"
import Portfolio from "../Portfolio/index"
import Login from "../../Shared/Auth/Login"
import Register from "../../Shared/Auth/Register"
import { useState } from "react"
import Footer from "../../Shared/Footer"

const Home = () => {
  const [popupOpen, setPopupOpen] = useState({})

    return (
        <div>
          <Header setPopupOpen={setPopupOpen} popupOpen={popupOpen}/>
          <Banner/>
          <div>Home Page</div>
          {/* <Services /> */}
          {/* <About /> */}
          {/* <Contact />  */}
          {/* <Portfolio /> */}
          {popupOpen && popupOpen.login && <Login setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}
          {popupOpen && popupOpen.register && <Register  setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}
          <Footer/>
        </div>
    )
}

export default Home
