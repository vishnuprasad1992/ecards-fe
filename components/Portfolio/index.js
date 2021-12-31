import Header from "../../Shared/Header"
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CreatePortFolioForm from "./CreatePortFolioForm";
import { useEffect, useState } from "react";
import Login from "../../Shared/Auth/Login";
import Register from "../../Shared/Auth/Register";

const Portfolio = () => {
    const [popupOpen, setPopupOpen] = useState({})
    const [open, setOpen] = useState(false)
    const [authUser, setAuthUser] = useState({})

    useEffect(() => {
       if(localStorage.getItem("user")){
           setAuthUser(JSON.parse(localStorage.getItem("user")).authUser)
       }
    }, [])
    return (
        <div>
            <Header setPopupOpen={setPopupOpen} popupOpen={popupOpen}/>
            {popupOpen && popupOpen.login && <Login setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}
          {popupOpen && popupOpen.register && <Register  setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}

            <div id="portfolio" className="mt100">

            <div className="container">
                <div className="portfolio">
                {authUser&& authUser._id && <button onClick={()=>setOpen(!open)} className="btn" >Add profile <span className="ml10"><PersonOutlineTwoToneIcon /></span></button>}
                    {open && 
                    <CreatePortFolioForm setOpen={setOpen}/>
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default Portfolio
