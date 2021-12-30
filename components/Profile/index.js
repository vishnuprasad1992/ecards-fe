import Image from 'next/image'
import companyImage from "../../assets/images/company.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';
import Popup from '../../Shared/Popup';


const Profile = ({profile}) => {
    const [open, setOpen] = useState({
        about:false,
        products:false,
        contact:false,
        clients:false
    })
    return (
        <div className='container center'>
            <div className='company-image'>
                {/* <Image
                    src={profile.clients}
                    alt={profile.companyName}
                    width={400}
                    height={400}
                    objectFit="cover"
                    objectPosition="bottom center"
                /> */}
                <img
                 src={profile.clients}
                 alt={profile.companyName}
                 width={400}
                 height={400}
                //  objectFit="cover"
                //  objectPosition="bottom center"
                />
            </div>
            <h2 style={{fontSize:"1.8rem"}} >{profile.name}</h2>
            <h2 style={{fontSize:"1.8rem"}} >{profile.companyName}</h2>
            <br/>
            <br/>
            <div>
                <FacebookIcon style={{ fontSize: 50, color:"blue" }}/>
                <InstagramIcon style={{ fontSize: 50, color:"blue" }}/>
                <LinkedInIcon style={{ fontSize: 50, color:"blue" }}/>
                <YouTubeIcon style={{ fontSize: 50, color:"blue" }}/>
                <WhatsAppIcon style={{ fontSize: 50,color:"blue" }}/>
            </div>
            <br/>
            <div className='profile-details'>
                <div className='portfolio-section profile-section-card' onClick={()=>setOpen({...open,about:true})}>About</div>
                <div className='portfolio-section profile-section-card'onClick={()=>setOpen({...open,products:true})}>Products</div>
                <div className='portfolio-section profile-section-card'onClick={()=>setOpen({...open,contact:true})}>Contact</div>
                <div className='portfolio-section profile-section-card'onClick={()=>setOpen({...open,clients:true})}>Clients</div>
            </div>
            {open && open.about && <Popup setOpen={setOpen} content={profile.aboutCompany} /> }
            {open && open.products && <Popup setOpen={setOpen} content={profile.products} /> }
            {open && open.contact && <Popup setOpen={setOpen} content={profile.email} /> }
            {open && open.clients && <Popup setOpen={setOpen} content={profile.clients} /> }
        </div>
    )
}

export default Profile
