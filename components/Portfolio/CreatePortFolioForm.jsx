import CancelIcon from "@mui/icons-material/Cancel";
import { Axios } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { savePortfolioDetails } from "../../controllers/portfolio";
import { axios } from "../../setups/axios";
const CreatePortFolioForm = ({ setOpen }) => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");
  const [portfolioDetails, setPortfolioDetails] = useState({
    name: "",
    designation: "",
    education: "",
    companyName: "",
    email: "",
    mobile: "",
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    aboutCompany: "",
    clients: "",
    products: "",
    services: "",
  });

  const [error, setError] = useState({});
  const [message, setMessage] = useState({});


  const imageHandler = async(e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "bpyd08nw");
    const response = await axios()({
      url: "https://api.cloudinary.com/v1_1/prasad1992/image/upload",
      method: "POST",
      data: formData,
    });
    console.log(response)
    setPortfolioDetails({
      ...portfolioDetails,
      clients: response.data.secure_url,
    });
  }



  const submit = async (e) => {
    e.preventDefault();
    // console.log(portfolioDetails);
    // const formData = new FormData();
    // formData.append("file", portfolioDetails.clients);
    // formData.append("upload_preset", "bpyd08nw");
    // const response = await axios()({
    //   url: "https://api.cloudinary.com/v1_1/prasad1992/image/upload",
    //   method: "POST",
    //   data: formData,
    // }).then((res) =>
    //   setPortfolioDetails({ ...portfolioDetails, clients: res.data.secure_url })
    // );
    // setTimeout(async () => {
      const portfolioResponse = await savePortfolioDetails(portfolioDetails);
      console.log(portfolioDetails)
      console.log(portfolioResponse);
      if (portfolioResponse) {
        setSuccessMessage("Your profile is added successfully");
      }
    // }, 1000);
  };
  return (
    <div className="portfolio-form-modal">
      <form action="" className="portfolio-form mt30">
        <div className="close mb20" onClick={() => setOpen(false)}>
          <CancelIcon />
        </div>
        <h2 className="mb20 center form-heading">
          Please Add the Information for the Portfolio
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          value={portfolioDetails.name}
          onChange={(e) =>
            setPortfolioDetails({ ...portfolioDetails, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Your designation"
          value={portfolioDetails.designation}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              designation: e.target.value,
            })
          }
        />
        <input
          type="email"
          placeholder="Contact email"
          value={portfolioDetails.email}
          onChange={(e) =>
            setPortfolioDetails({ ...portfolioDetails, email: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Contact Mobile"
          value={portfolioDetails.mobile}
          onChange={(e) =>
            setPortfolioDetails({ ...portfolioDetails, mobile: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Your Education"
          value={portfolioDetails.education}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              education: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Your Organization Name"
          value={portfolioDetails.companyName}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              companyName: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Street address"
          value={portfolioDetails.streetAddress}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              streetAddress: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="City"
          value={portfolioDetails.city}
          onChange={(e) =>
            setPortfolioDetails({ ...portfolioDetails, city: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="State"
          value={portfolioDetails.state}
          onChange={(e) =>
            setPortfolioDetails({ ...portfolioDetails, state: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Country"
          value={portfolioDetails.country}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              country: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="About your organization"
          value={portfolioDetails.aboutCompany}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              aboutCompany: e.target.value,
            })
          }
        />
        <input
          type="file"
          placeholder="Your Clients"
          // value={portfolioDetails.clients}
          onChange={(e)=>imageHandler(e)}
        />
        <input
          type="text"
          placeholder="Products"
          value={portfolioDetails.products}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              products: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="services"
          value={portfolioDetails.services}
          onChange={(e) =>
            setPortfolioDetails({
              ...portfolioDetails,
              services: e.target.value,
            })
          }
        />
        {successMessage && <h5>{successMessage}</h5>}
        <div className="flex mt20">
          <button className="blue button" onClick={submit}>
            Submit
          </button>
          <button className="red button ml20" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePortFolioForm;
