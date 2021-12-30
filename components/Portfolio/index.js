import Header from "../../Shared/Header"
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import CreatePortFolioForm from "./CreatePortFolioForm";
import { useEffect, useState } from "react";

const Portfolio = () => {
    const [open, setOpen] = useState(false)
    const [authUser, setAuthUser] = useState({})

    useEffect(() => {
       if(localStorage.getItem("user")){
           setAuthUser(JSON.parse(localStorage.getItem("user")).authUser)
       }
    }, [])
    console.log(authUser)
    return (
        <div>
            {/* <Header /> */}
            <div id="portfolio" style={{ height: "900px",backgroundColor:"gray" }}>

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
