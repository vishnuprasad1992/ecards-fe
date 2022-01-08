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
      <div className="container mb20" >
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus mollitia non quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
