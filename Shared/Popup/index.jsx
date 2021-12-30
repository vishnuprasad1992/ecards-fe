import CancelIcon from "@mui/icons-material/Cancel";
import { useRouter } from "next/router";
import { useState } from "react";
const Popup = ({ setOpen, content }) => {
  return (
    <div className="portfolio-form-modal">
      <form action="" className="portfolio-form mt30">
        <div className="close mb20" onClick={() => setOpen(false)}>
          <CancelIcon />
        </div>
        <h2 className="mb20 center form-heading">
          Please Add the Information for the Portfolio
        </h2>
        {content}

        <div className="flex mt20">
          <button className="red button ml20" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Popup;
