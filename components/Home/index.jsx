import Header from "../../Shared/Header";
import Login from "../../Shared/Auth/Login";
import Register from "../../Shared/Auth/Register";
import Footer from "../../Shared/Footer";
import { useState } from "react";

const Home = () => {
  const [popupOpen, setPopupOpen] = useState({});

 
  return (
    <div>
      <Header setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
      
      {popupOpen && popupOpen.login && (
        <Login setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
      )}
      {popupOpen && popupOpen.register && (
        <Register setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
      )}
      <div>This is my home page</div>
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Contact />  */}
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
};

export default Home;
