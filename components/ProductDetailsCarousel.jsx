import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
const ProductDetailsCarousel = ({images}) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img) => (
          <img key={img.id} src={img.attributes.url} alt={img.attributes.name} />
        ))}
        {/* <img src="/p1.png" alt="" />
        <img src="/p2.png" alt="" />
        <img src="/p3.png" alt="" />
        <img src="/p4.png" alt="" />
        <img src="/p5.png" alt="" />
        <img src="/p6.png" alt="" />
        <img src="/p7.png" alt="" /> */}
      </Carousel>
    </div>
  );
}

export default ProductDetailsCarousel