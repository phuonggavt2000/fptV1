import icons from "../ultis/icons";
import img from "../asset/imgs/img";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FptPlayPackage({ data, title, colorText }) {
    const { FaPlay, BsCheckLg } = icons;
    const [packageName, setPackageName] = useState(data[0].title);
    const [packageData, setPackageData] = useState(data[0].data);
    console.log(packageData);
    const redirectPackage = (name) => {
        setPackageName(name);
    };

    useEffect(() => {
        const dataPackage = data.find(
            (item) => item.title === packageName
        ).data;
        setPackageData(dataPackage);
    }, [packageName, data]);

    return (
        <div className="   relative z-[1] font-semibold mx-auto ">
            <div className="flex items-center text-white gap-x-2 py-4">
                <div className="bg-[#f26a01] p-2 rounded-full">
                    <FaPlay />
                </div>

                <span className={`text-2xl ${colorText}`}>{title}</span>
            </div>
            <div className="w-[1100px]  bg-transparent relative rounded-lg overflow-hidden ">
                <div className="bg-white px-8 pt-4">
                    <div className="flex gap-x-4 mb-4 border-b-2  text-secondary font-semibold text-lg">
                        {data.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    redirectPackage(item.title);
                                }}
                                className={`py-2 rounded-sm uppercase hover:text-primary ${
                                    item.title === packageName
                                        ? "text-primary"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 ">
                        <div className="flex items-start">
                            <img alt="fpt play" src={packageData.imgLeft} />
                        </div>
                        <div>
                            <img
                                alt="fpt play"
                                className="w-full"
                                src={packageData.imgRight}
                            />
                            <div className="flex flex-col font-normal text-sm mt-2">
                                {packageData?.desc?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex item-start"
                                    >
                                        <BsCheckLg className="text-primary text-2xl mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* line */}
                <div className="flex  justify-center absolute w-full -translate-y-[8px] ">
                    <img src={img.leftLine} alt="fpt play" />
                    <div className="w-full  flex justify-center items-center relative">
                        <div className="h-full bg-white w-[5px] absolute left-[-2px] "></div>
                        <img
                            src={img.line}
                            alt="fpt play"
                            className="w-[102%] bg-white h-full px-2 "
                        />
                        <div className="h-full bg-white w-[5px] absolute right-[-2px] "></div>
                    </div>

                    <img src={img.rightLine} alt="fpt play" />
                </div>
                <div className="w-full  bg-white mt-[30px] px-8 flex items-center py-4  ">
                    <div className=" text-primary w-full">
                        <span className="font-extrabold text-xl ">
                            {packageData.price}
                        </span>
                        <span className="text-sm  font-semibold ml-1 ">
                            /tháng
                        </span>
                    </div>
                    <Link
                        to="tel:0375956703"
                        className="bg-primary rounded-xl w-full py-4 border border-primary hover:bg-[#ff894033] cursor-pointer transition-all hover:text-primary flex justify-center items-center uppercase text-white"
                    >
                        Hotline: 0375.956.703
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FptPlayPackage;
