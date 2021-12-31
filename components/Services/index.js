import { useState } from "react"
import Login from "../../Shared/Auth/Login"
import Register from "../../Shared/Auth/Register"
import Header from "../../Shared/Header"

const Services = () => {
    const [popupOpen, setPopupOpen] = useState({})

    return (
        <div>
            <Header setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
            {popupOpen && popupOpen.login && <Login setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}
          {popupOpen && popupOpen.register && <Register  setPopupOpen={setPopupOpen} popupOpen={popupOpen} />}

            <div id="services" className="mt100">
                Services page
            </div>
        </div>
    )
}

export default Services
