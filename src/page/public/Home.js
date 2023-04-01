import Banner from "../../components/Banner";
import icons from "../../ultis/icons";
import { underBanners } from "../../ultis/static";
import { Link } from "react-router-dom";
import imgTv from "../../asset/recommend/Tv.jpg";
import imgCam from "../../asset/recommend/camera.jpg";
import imgInternetP from "../../asset/recommend/internetPlus.png";
import path from "../../ultis/path";
import Product from "../../components/Product";
import { internetProducts, comboProducts } from "../../ultis/static";
import img from "../../asset/imgs/img";
import Register from "./Register";

function Home() {
    const { MdNavigateNext } = icons;
    return (
        <div className="relative  ">
            <Banner />
            <div className="px-8 pb-10">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 text-2xl font-semibold mt-4">
                    {underBanners.map((item, key) => (
                        <Link
                            to={item.to}
                            key={key}
                            className={`flex items-center gap-4 hover:shadow-md transition-all bg-[#f8f9fa] cursor-pointer ${item.hover} py-8 rounded-lg lg:justify-center lg:px-0 px-5`}
                        >
                            <button className={`${item.bg} p-4 rounded-full`}>
                                {item.icon}
                            </button>

                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
                <Product
                    title="Cáp quang FPT "
                    img={img.private}
                    products={internetProducts}
                />
                <Product
                    title="Internet + Truyền hình"
                    img={img.combo}
                    products={comboProducts}
                />
                <div className="mt-20">
                    <h1 className="text-4xl font-bold text-center mb-12">
                        Sản phẩm dịch vụ FPT
                    </h1>
                    <Link className="relative" to={path.TV}>
                        <img
                            src={imgTv}
                            alt="truyen-hinh-fpt"
                            className="rounded-lg"
                        />
                        <div className="absolute flex justify-center items-center w-full flex-col bottom-[3%] ">
                            <span className="text-2xl text-orange-500 font-semibold">
                                FPT Play
                            </span>
                            <div className="flex items-center mt-1 gap-x-2 justify-center">
                                <span className="text-blue-600">
                                    Chi tiếp sản phẩm{" "}
                                </span>
                                <button className="p-1 bg-blue-700 rounded-full">
                                    <MdNavigateNext className="text-white" />
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 gap-x-4 mt-5">
                    <Link className="relative" to={path.INTERNET}>
                        <img
                            src={imgInternetP}
                            alt="internet-fpt"
                            className="h-full rounded-lg"
                        />
                        <div className="absolute flex justify-center items-center w-full flex-col bottom-[3%] ">
                            <span className="text-2xl text-orange-500 font-semibold">
                                Internet FPT
                            </span>
                            <div className="flex items-center mt-1 gap-x-2 justify-center">
                                <span className="text-blue-600">
                                    Chi tiếp sản phẩm{" "}
                                </span>
                                <button className="p-1 bg-blue-700 rounded-full">
                                    <MdNavigateNext className="text-white" />
                                </button>
                            </div>
                        </div>
                    </Link>
                    <Link
                        className="relative h-[60%] lg:h-full"
                        to={path.CAMERA}
                    >
                        <img
                            src={imgCam}
                            alt="camera-fpt"
                            className="h-full w-full rounded-lg "
                        />
                        <div className="absolute flex justify-center items-center w-full flex-col bottom-[3%] ">
                            <span className="text-2xl text-orange-500 font-semibold">
                                Camera FPT
                            </span>
                            <div className="flex items-center mt-1 gap-x-2 justify-center">
                                <span className="text-blue-600">
                                    Chi tiếp sản phẩm{" "}
                                </span>
                                <button className="p-1 bg-blue-700 rounded-full">
                                    <MdNavigateNext className="text-white" />
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Register />
        </div>
    );
}

export default Home;
