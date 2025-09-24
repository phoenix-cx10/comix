import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* import img1 from '/assets/images/caral (1).jpg';
import img2 from '/assets/images/caral (2).jpg';
import img3 from '/assets/images/caral (3).jpg';
import img4 from '/assets/images/caral (4).jpg'; */

export default function Home() {

/* 
const images = [img1, img2, img3, img4];


  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; */

  return (
    <section className="flex items-center justify-between px-20 py-10 gap-10 bg-amber-50">
     {/*  left side */}
      <div className="max-w-md py-20">
        <h1 className="text-3xl mb-4">Welcome to </h1>
        <h2 className="text-5xl font-bold mb-4">introduction</h2>
        <p className="mb-8">
          Discover your next favorite book in our carefully curated collection.
          From timeless classics to contemporary bestsellers,
          find stories that inspire.
        </p>
        <button className="bg-[#d46666] text-black px-6 py-3 rounded-full hover:bg-[#c05555]">
          explore collection
        </button>
      </div>

      {/* rightside */}
      {/* <div className="w-[600px] h-[450px] mt-0 rounded-4xl overflow-hidden object-cover">
        <Slider {...settings}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-contain"
            />
          ))}
        </Slider>
      </div> */}
    </section>
  );
}
