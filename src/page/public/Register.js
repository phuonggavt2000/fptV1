import { useState } from "react";
import icons from "../../ultis/icons";

function Register() {
    const { MdInfoOutline } = icons;
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [packageFpt, setPackageFpt] = useState("Internet FPT");
    console.log("packageFpt:", packageFpt);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const dataForm = {
            fullName,
            address,
            phone,
            packageFpt,
        };
        console.log("dataForm:", dataForm);
    };

    return (
        <div className="bg-[#f3f3f3] flex">
            <div className="w-[736px] mx-auto  bg-white my-6 rounded-xl px-4 py-6">
                <div className="flex items-center font-bold gap-x-2">
                    <MdInfoOutline className="text-primary text-2xl" />
                    <span>Đăng ký Online</span>
                </div>
                <form
                    className="mt-4"
                    onSubmit={(e) => {
                        handleSubmitForm(e);
                    }}
                >
                    <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                        <div className="col-span-2 ">
                            <label
                                htmlFor="name"
                                className="uppercase text text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Họ và Tên
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <input
                                required
                                placeholder="Nguyễn Văn A"
                                type="text"
                                id="name"
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }}
                                className="border-b mt-1 font-semibold w-full pb-2 focus:border-black outline-none text-secondary"
                            />
                        </div>
                        <div className="col-span-2 ">
                            <label
                                htmlFor="address"
                                className="uppercase text text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Địa chỉ
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <input
                                required
                                placeholder="31 Lê Văn Quới, Q.Bình Tân, HCM"
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                className="border-b mt-1 font-semibold w-full pb-2 focus:border-black outline-none text-secondary"
                            />
                        </div>
                        <div className="col-span-1 ">
                            <label
                                htmlFor="phone"
                                className="uppercase text text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Số điện thoại
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <input
                                required
                                placeholder="19006600"
                                type="number"
                                id="phone"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                className="border-b mt-1 font-semibold w-full pb-2 focus:border-black outline-none text-secondary"
                            />
                        </div>
                        <div className="col-span-1 flex flex-col">
                            <label
                                htmlFor="country"
                                className="uppercase h-[50%] text-[#767676] text-xs font-semibold flex items-center"
                            >
                                Gói dịch vụ FPT
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <select
                                id="country"
                                name="country"
                                className="w-full h-full border-b outline-none"
                                value={packageFpt}
                                onChange={(e) => {
                                    setPackageFpt(e.target.value);
                                }}
                            >
                                <option>Internet FPT</option>
                                <option>Intertnet + Truyền Hình FPT</option>
                                <option>Camera</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="col-span-2 mt-2 hover:bg-[#ff894033] border border-primary hover:text-primary bg-primary py-2 rounded-md text-white hover:  font-semibold  text-base"
                        >
                            Tiếp tục
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
