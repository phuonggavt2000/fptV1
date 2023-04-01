import Slider from "react-slick";
import imgBanners from "../asset/banner";
import NextBanner from "./NextBanner";
import PrevBanner from "./PrevBanner";
import { Link } from "react-router-dom";

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: <PrevBanner />,
        nextArrow: <NextBanner />,
    };
    return (
        <div className="w-screen">
            <Slider {...settings}>
                {imgBanners.map((item, index) => (
                    <Link to={item.to} key={index} className="w-full">
                        <img src={item.img} alt="" className="w-full" />
                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default Banner;
