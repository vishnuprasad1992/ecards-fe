import Header from "../../Shared/Header"
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CreatePortFolioForm from "./CreatePortFolioForm";
import { useEffect, useState } from "react";
import Login from "../../Shared/Auth/Login";
import Register from "../../Shared/Auth/Register";
import Footer from "../../Shared/Footer";

const Portfolio = () => {
  const [popupOpen, setPopupOpen] = useState({})
  const [open, setOpen] = useState(false)
  const [authUser, setAuthUser] = useState({})

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setAuthUser(JSON.parse(localStorage.getItem("user")).authUser)
    }
  }, [])
  return (
    <div>
      <Header setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
      {popupOpen && popupOpen.login && <Login setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}
      {popupOpen && popupOpen.register && <Register setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}

      <div id="portfolio" className="mt100 mb20">

        <div className="container">
          <div className="portfolio">
            {authUser && authUser._id && <button onClick={() => setOpen(!open)} className="btn" >Add profile <span className="ml10"><PersonOutlineTwoToneIcon /></span></button>}
            {open &&
              <CreatePortFolioForm setOpen={setOpen} />
            }
          </div>
        </div>
        <div className="container" >
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

      </div>
        <Footer />
    </div>
  )
}

export default Portfolio
