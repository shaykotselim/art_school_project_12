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
import { Parallax } from 'swiper';
const Banner = () => {
    return (
        <Carousel autoPlay={true}  >
      <div>
        <img src={bannar1} />
        
        <div className='absolute top-0 px-24 w-full h-full bg-black bg-opacity-10 text-white' >
          <h1 className='mt-52 text-4xl  font-bold'>Art School!!!</h1>
          <p className='mt-4'>"Unlock your creative potential at our prestigious art school. Immerse yourself in a vibrant community of artists, push the boundaries of artistic expression, and receive guidance from renowned faculty. Join us to develop your unique artistic voice and shape the future of visual culture."</p>
          <button className='btn btn-secondary btn-outline bg-white mt-4 border-b-4'>Explore</button>
        </div>
       
        
      </div>
      <div>
        <img src={bannar2} />
        <div className='absolute top-0 px-24 w-full h-full bg-black bg-opacity-10 text-white' >
          <h1 className='mt-52 text-4xl  font-bold'>Art School!!!</h1>
          <p className='mt-4'>"Unlock your creative potential at our prestigious art school. Immerse yourself in a vibrant community of artists, push the boundaries of artistic expression, and receive guidance from renowned faculty. Join us to develop your unique artistic voice and shape the future of visual culture."</p>
          <button className='btn btn-secondary btn-outline bg-white mt-4 border-b-4'>Explore</button>
        </div>
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={bannar3} />
        <div className='absolute top-0 px-24 w-full h-full bg-black bg-opacity-10 text-white' >
          <h1 className='mt-52 text-4xl  font-bold'>Art School!!!</h1>
          <p className='mt-4'>"Unlock your creative potential at our prestigious art school. Immerse yourself in a vibrant community of artists, push the boundaries of artistic expression, and receive guidance from renowned faculty. Join us to develop your unique artistic voice and shape the future of visual culture."</p>
          <button className='btn btn-secondary btn-outline bg-white mt-4 border-b-4'>Explore</button>
        </div>
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src={bannar4}/>
        <div className='absolute top-0 px-24 w-full h-full bg-black bg-opacity-10 text-white' >
          <h1 className='mt-52 text-4xl  font-bold'>Art School!!!</h1>
          <p className='mt-4'>"Unlock your creative potential at our prestigious art school. Immerse yourself in a vibrant community of artists, push the boundaries of artistic expression, and receive guidance from renowned faculty. Join us to develop your unique artistic voice and shape the future of visual culture."</p>
          <button className='btn btn-secondary btn-outline bg-white mt-4 border-b-4'>Explore</button>
        </div>
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src={bannar5} />
        <div className='absolute top-0 px-24 w-full h-full bg-black bg-opacity-10 text-white' >
          <h1 className='mt-52 text-4xl  font-bold'>Art School!!!</h1>
          <p className='mt-4'>"Unlock your creative potential at our prestigious art school. Immerse yourself in a vibrant community of artists, push the boundaries of artistic expression, and receive guidance from renowned faculty. Join us to develop your unique artistic voice and shape the future of visual culture."</p>
          <button className='btn btn-secondary btn-outline bg-white mt-4 border-b-4'>Explore</button>
        </div>
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src={bannar6} />
        <div className='absolute top-0 px-24 w-full h-full bg-black bg-opacity-10 text-white' >
          <h1 className='mt-52 text-4xl  font-bold'>Art School!!!</h1>
          <p className='mt-4'>"Unlock your creative potential at our prestigious art school. Immerse yourself in a vibrant community of artists, push the boundaries of artistic expression, and receive guidance from renowned faculty. Join us to develop your unique artistic voice and shape the future of visual culture."</p>
          <button className='btn btn-secondary btn-outline bg-white mt-4 border-b-4'>Explore</button>
        </div>
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src={bannar7} />
        <div className='absolute top-0 px-24 w-full h-full bg-black bg-opacity-10 text-white' >
          <h1 className='mt-52 text-4xl  font-bold'>Art School!!!</h1>
          <p className='mt-4'>"Unlock your creative potential at our prestigious art school. Immerse yourself in a vibrant community of artists, push the boundaries of artistic expression, and receive guidance from renowned faculty. Join us to develop your unique artistic voice and shape the future of visual culture."</p>
          <button className='btn btn-secondary btn-outline bg-white mt-4 border-b-4'>Explore</button>
        </div>
        {/* <p className="legend">Legend 7</p> */}
      </div>
    </Carousel>
    );
};

export default Banner;