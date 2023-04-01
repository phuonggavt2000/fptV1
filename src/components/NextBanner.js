import icons from "../ultis/icons";

function NextBanner(props) {
    const { onClick } = props;
    const { GrNext } = icons;
    return (
        <button
            className="  absolute rounded-full border p-3 bg-alpha  z-[1] cursor-pointer top-1/2 -translate-y-1/2 right-0"
            onClick={onClick}
        >
            <GrNext className="text-blue-900 " />
        </button>
    );
}

export default NextBanner;
