import React from 'react';
import bannar1 from "../../assets/banner/banner1.png"
import bannar2 from "../../assets/banner/banner2.png"
import bannar3 from "../../assets/banner/banner3.png"
import bannar4 from "../../assets/banner/banner4.png"
import bannar5 from "../../assets/banner/banner5.png"
import bannar6 from "../../assets/banner/banner6.jpg"
import bannar7 from "../../assets/banner/banner7.png"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel autoPlay={true}   >
      <div>
        <img src={bannar1} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={bannar2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={bannar3} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src={bannar4}/>
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src={bannar5} />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={bannar6} />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src={bannar7} />
        {/* <p className="legend">Legend 7</p> */}
      </div>
    </Carousel>
    );
};

export default Banner;