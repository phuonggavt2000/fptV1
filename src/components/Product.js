import Slider from "react-slick";
import imgStart from "../asset/imgs/star-icon.png";
import { Link } from "react-router-dom";
import PrevBanner from "./PrevBanner";
import NextBanner from "./NextBanner";

function Product({ img, products, title = "cáp quang FPT" }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevBanner />,
        nextArrow: <NextBanner />,
    };
    return (
        <div className=" max-w-[1200px] mx-auto mt-6">
            <div className="flex flex-col justify-center items-center gap-y-2 mt-10">
                <img
                    src={img}
                    alt="internet fpt"
                    className="bg-primary rounded-full px-3 py-4"
                />

                <h1 className="font-bold text-primary text-2xl text-center uppercase">
                    {title}
                </h1>
            </div>
            <Slider {...settings}>
                {products.map((item, index) => {
                    return (
                        <div key={index} className="px-6 py-10">
                            <div className="flex overflow-hidden relative h-full justify-center items-center flex-col py-8 gap-y-2 text-center rounded-lg shadow-card">
                                {item.isRecommend && (
                                    <img
                                        src={imgStart}
                                        alt="fpt telecom"
                                        className="absolute top-0 left-0 w-[30%]"
                                    />
                                )}
                                {item.type === "combo" ? (
                                    <span className="text-2xl font-bold">
                                        Combo
                                    </span>
                                ) : (
                                    <></>
                                )}
                                <span className="font-bold text-4xl text-[#4eb848] ">
                                    {item.title}
                                </span>
                                <div className="w-[113px] mx-auto border-t">
                                    <img
                                        src={item.img}
                                        alt="fpt telecom"
                                        className="mt-2"
                                    />
                                </div>
                                <button className="px-6 mt-4 py-2 bg-[#0017ea] text-white rounded-full">
                                    Giá {item.price}
                                </button>
                                <div className="text-xs pb-4 px-16">
                                    <p>
                                        {item.desc} <br />
                                        {item.subDesc}
                                    </p>
                                </div>
                                <div className="text-sm px-10 flex-col flex gap-y-2 ">
                                    <p className="pt-6 border-t">{item.obj}</p>
                                    <p>
                                        {item.gift} <br />
                                        {item.giftPlus}
                                    </p>
                                    <p>
                                        Ưu tiên lắp đặt trong 12h - 36h
                                        <br />
                                        Hỗ trợ kỹ thuật 24/7
                                    </p>
                                </div>

                                <Link
                                    to="tel:0375956703"
                                    className="border-2 hover:bg-[#dfffde] mt-4 font-semibold border-[#4eb848] text-[#4eb848]  font rounded-full px-6 py-2"
                                >
                                    Hotline: 0375.956.703
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Product;
