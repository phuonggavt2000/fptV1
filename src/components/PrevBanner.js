import icons from "../ultis/icons";

function PrevBanner(props) {
    const { onClick } = props;
    const { GrPrevious } = icons;
    return (
        <button
            className="absolute rounded-full p-3 bg-alpha  z-[1] cursor-pointer top-1/2 -translate-y-1/2 left-0 border"
            onClick={onClick}
        >
            <GrPrevious className="text-blue-900 " />
        </button>
    );
}

export default PrevBanner;
