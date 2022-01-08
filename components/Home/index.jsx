import Header from "../../Shared/Header";
import Login from "../../Shared/Auth/Login";
import Register from "../../Shared/Auth/Register";
import Footer from "../../Shared/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const [popupOpen, setPopupOpen] = useState({});
  const [emailParams, setEmailParams] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: emailParams.name,
      message: emailParams.message,
    };

    emailjs
      .send(
        "service_tr4fkfd",
        "template_yucg6dk",
        templateParams,
        "user_ACos0Tf3rhKTpD46U1sZb"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
      setEmailParams({}) 
  };

  return (
    <div>
      <Header setPopupOpen={setPopupOpen} popupOpen={popupOpen} />

      {popupOpen && popupOpen.login && (
        <Login setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
      )}
      {popupOpen && popupOpen.register && (
        <Register setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
      )}
      <div className="container mb20 home">
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus doloremque ducimus mollitia non
            quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo
            dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus doloremque ducimus mollitia non
            quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo
            dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus doloremque ducimus mollitia non
            quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo
            dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
        <div className="center flex-column mt30">
          <h1 className="heading mb20"> Lorem ipsum dolor sit </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque ducimus mollitia non quasi magni sint. Adipisci tempore
            vel cum facilis quam fugiat quo dolores quasi explicabo,
            voluptatibus, repudiandae saepe. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minus doloremque ducimus mollitia non
            quasi magni sint. Adipisci tempore vel cum facilis quam fugiat quo
            dolores quasi explicabo, voluptatibus, repudiandae saepe.
          </p>
        </div>
      </div>
      <div className="container mt100 bg-contact mb20">
        <h2 className="center  heading "> Any Queries </h2>
        <div className="flex-contact">
          <div className="flex-column flex50">
            <form className="flex-column">
              <input
                className="input-contact"
                onChange={(e) =>
                  setEmailParams({ ...emailParams, name: e.target.value })
                }
                placeholder="name"
                name="name"
                type="text"
              />
              <textarea
                className="input-contact message-height"
                onChange={(e) =>
                  setEmailParams({ ...emailParams, message: e.target.value })
                }
                placeholder="Message"
                name="message"
                rows="4"
                type="text"
              />
              <button
                className="submit"
                onClick={(e) => sendEmail(e)}
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
          <div className=" p50 flex50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            fugiat illo qui recusandae officia velit aperiam quos nesciunt
            delectus exercitationem nulla quasi, nam rerum beatae voluptate
            blanditiis culpa eius laudantium.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
