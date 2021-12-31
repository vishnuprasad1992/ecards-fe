import Link from "next/link"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { scrollToElement } from "../../utils/scroll";



const Header = ({setPopupOpen,popupOpen}) => {
    const [authUser, setAuthUser] = useState({})

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setAuthUser(JSON.parse(localStorage.getItem("user")).authUser)
        }
    }, [])
    const logout = () => {
        localStorage.removeItem("user")
        location.reload()
    }
    const loginPopup = () => {
        
        setPopupOpen({...popupOpen,login:true})
    }
    return (
        <div className="navbar">
            <div className="navbar-brand"><Link href="/">Brand</Link></div>
            <div className="navbar-content">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    {/* <li className="cursor" onClick={()=>scrollToElement("#services")} >Services</li> */}
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    {/* <li className="cursor" onClick={()=>scrollToElement("#about")} >About</li>
                    <li className="cursor" onClick={()=>scrollToElement("#contact")} >Contact</li>
                    <li className="cursor" onClick={()=>scrollToElement("#portfolio")} >Protfolio</li> */}
                    {authUser && authUser._id ? <li className="cursor" onClick={logout}>logout</li> : <li className="cursor" onClick={loginPopup} >Login</li>}
                </ul>
            </div>
            <div className="navbar-right">
                <form className="search-form">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="search"
                    />
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header
