import React, { useEffect } from "react";
import "../../style/ourcollection.css";
import image1 from "../../images/our_collection_1.png";
import image2 from "../../images/our_collection_2.png";
import image3 from "../../images/our_collection_3.png";
import TextBootomIcon from "../../images/Shape.png";

import { Link } from "react-router-dom";
function Ourcollection() {
  useEffect(() => {
    // Run animation on component mount or update
    const element = document.querySelector(".our-collection-card-text");
    if (element) {
      element.classList.add("animate");

      // Cleanup function to remove the 'animate' class when the component is unmounted or updated
      return () => {
        element.classList.remove("animate");
      };
    }
  }, []);

  return (
    <>
      <div className="main-our-product-section">
      <div className=" text-center second-about-us-images">
        {/* <img src={NewImage2} alt="style" className="w-100 h-50 img-fluid" /> */}
        {/* our collection text */}
        <div className="our-collection-about-page  text-center">
          <h3
            className="heading-text"
            // data-aos="flip-up"
            // data-aos-offset="200"
            // data-aos-duration="1700"
          >
            Our Collection
          </h3>
          <div
            className="text-style-icon-div"
            // data-aos="flip-down"
            // data-aos-offset="200"
            // data-aos-duration="1700"
          >
            <img
              src={TextBootomIcon}
              alt="style"
              className="text-icon-bottom our-collection-icons"
            />
          </div>
        </div>
      </div>
        {/*  main div*/}
        <div className="main-second-our-product-div">
          {/* left side */}
          <div className="main-card-div">
            {/* first card */}
            <div className="our-collection-cards">
              {/* image */}
              <div
                className="our-collection-card-images"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={image1}
                  alt="masala-tea"
                  className="tea-images tea-images-left"
                />
              </div>
              {/* text */}
              <div className="">
                <h3 className={"our-collection-card-text"}>Saburi Tea</h3>
                <Link to="/our-product" >
                <button className="explore-more-button">Explore More</button>
                </Link>
              </div>
            </div>
            {/* second card */}
            <div className="our-collection-cards flex-row-reverse">
              {/* image */}
              <div
                className="our-collection-card-images"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2200"
              >
                <img
                  src={image2}
                  alt="masala-tea"
                  className="tea-images tea-images-right"
                />
              </div>
              {/* text */}
              <div className="">
                <h3 className={"our-collection-card-text"}>Saburi Mirch</h3>
                <Link to="/our-product" >
                <button className="explore-more-button">Explore More</button>
                </Link>
              </div>
            </div>
            {/* third card */}
            <div className="our-collection-cards">
              {/* image */}
              <div
                className="our-collection-card-images"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2800"
              >
                <img
                  src={image3}
                  alt="masala-tea"
                  className="tea-images tea-images-left"
                />
              </div>
              {/* text */}
              <div className="">
                <h3 className="our-collection-card-text">Saburi Chunks</h3>
                <Link to="/our-product" >
                <button className="explore-more-button">Explore More</button>
                </Link>
              </div>
            </div>
          </div>

          {/* right side div */}
          {/* <sapn className="right-side-our-product-div"></sapn> */}
          {/* right side div */}
          {/* <sapn className="left-side-our-product-div"></sapn> */}
        </div>
      </div>
    </>
  );
}

export default Ourcollection;
