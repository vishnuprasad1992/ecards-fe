// import Image from "next/image";
import BannerImage from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img
        //   loader={myLoader}
        src={BannerImage.src}
        alt="e cards banner"
        className="banner-img"
      />
    </div>
  );
};

export default Banner;
