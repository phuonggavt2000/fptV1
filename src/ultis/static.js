import path from "./path";
import icons from "./icons";
import imgProduct from "../asset/products";
import img from "../asset/imgs/img";
const {
    FaPen,
    IoDocumentText,
    BsMessenger,
    FaFacebookF,
    FaYoutube,
    AiFillInstagram,
    SiZalo,
    TbPlayerTrackNext,
    FaRegPaperPlane,
    RiMoneyDollarCircleLine,
    AiOutlineShareAlt,
    ImVideoCamera,
    BiHeadphone,
    FiClock,
    MdOutlineSystemUpdateAlt,
    TfiWrite,
    RiGlobalFill,
    AiFillAndroid,
    FaInbox,
    IoDesktop,
    AiFillApple,
    AiOutlineHome,
    AiOutlineWifi,
    BsPencil,
    AiOutlinePlaySquare,
    BsInboxes,
} = icons;

export const headers = [
    {
        title: "Trang chủ",
        path: path.HOME,
        icon: <AiOutlineHome />,
    },
    {
        title: "Internet FPT",
        path: path.INTERNET,
        icon: <AiOutlineWifi />,
    },
    {
        title: "Internet + Truyền hình FPT",
        path: path.INTERNET_TV,
        icon: <BsInboxes />,
    },
    {
        title: "Truyền hình FPT",
        path: path.TV,
        icon: <AiOutlinePlaySquare />,
    },
    {
        title: "Đăng ký Online",
        path: path.REGISTER,
        icon: <BsPencil />,
    },
];

export const underBanners = [
    {
        title: "Đăng ký Online",
        icon: <FaPen className="text-white" />,
        bg: "bg-[#1169b0]",
        hover: "hover:text-[#1169b0]",
        to: "dang-ky-fpt",
    },
    {
        title: "Hotline: 0375.956.703",
        icon: <IoDocumentText className="text-white" />,
        bg: "bg-[#ff701d]",
        hover: "hover:text-[#ff701d]",
        to: "tel:0375956703",
    },
    {
        title: "Liên lạc",
        icon: <BsMessenger className="text-white" />,
        bg: "bg-[#00d574]",
        hover: "hover:text-[#00d574]",
        to: "https://www.messenger.com/t/FptTelecom",
    },
];

export const socialFooter = [
    {
        icons: <FaFacebookF />,
        to: "https://www.facebook.com/hotrofpttoanquocc/",
    },
    {
        icons: <FaYoutube />,
        to: "https://www.youtube.com/user/likefpt",
    },
    {
        icons: <SiZalo />,
        to: "https://zalo.me/fpttelecom",
    },
    {
        icons: <AiFillInstagram />,
        to: "https://www.instagram.com/fpt.telecom/",
    },
];

export const footerIntroduce = [
    {
        title: "Giới thiệu chung",
        to: "#",
    },
    {
        title: "Liên kết - Thành viên",
        to: "#",
    },
    {
        title: "Khách hàng - Đối tác",
        to: "#",
    },
    {
        title: "Quan hệ cổ đông ",
        to: "#",
    },
    {
        title: "Tập đoàn FPT",
        to: "#",
    },
];

export const fptClient = [
    {
        title: "Hướng dẫn sử dụng dịch vụ",
        to: "#",
    },
    {
        title: "Giới thiệu bạn bè",
        to: "#",
    },
    {
        title: "Thanh toán Online",
        to: "#",
    },
    {
        title: "Góp ý khách hàng",
        to: "#",
    },
    {
        title: "Lịch phát sóng",
        to: "#",
    },
];

export const notClient = [
    {
        title: "Đăng kí Online",
        to: "dang-ky-fpt",
    },
    {
        title: "Dịch vụ Internet",
        to: "internet-fpt",
    },
    {
        title: "Dịch vụ Camera",
        to: "#",
    },
    {
        title: "Dịch vụ Internet và truyền hình",
        to: "internet-truyen-hinh-fpt",
    },
    {
        title: "Tin tức",
        to: "#",
    },
];

export const internetProducts = [
    {
        type: "internet",
        title: "Giga",
        price: "190k",
        img: imgProduct.giga,
        desc: "Tốc độ Download 150 Mbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "Trang bị Modem 2 băng tần thế hệ mới",
        giftPlus: "Miễn phí lắp đặt",
        isRecommend: true,
    },
    {
        type: "internet",
        title: "Sky",
        price: "250k",
        img: imgProduct.sky,
        desc: "Tốc độ download không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với hộ gia đình lớn",
        gift: "Trang bị Modem 2 băng tần thế hệ mới",
        giftPlus: "Miễn phí lắp đặt",
        isRecommend: true,
    },
    {
        type: "internet",
        title: "Meta",
        price: "350k",
        img: imgProduct.meta,
        desc: "Tốc độ download & upload không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "Trang bị Modem 2 băng tần thế hệ mới",
        giftPlus: "Miễn phí lắp đặt",
    },
    {
        type: "internet",
        title: "Lux500",
        price: "800k",
        img: imgProduct.lux500,
        desc: "Tốc độ Download 500 Mbps",
        subDesc: "Tốc độ Upload 500 Mbps",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "Tích hợp gói hỗ trợ Game thủ - Ultrafast",
        giftPlus: "Miễn phí lắp đặt",
    },
    {
        type: "internet",
        title: "Lux800",
        price: "1000k",
        img: imgProduct.lux800,
        desc: "Tốc độ Download 800 Mbps",
        subDesc: "Tốc độ Upload 800 Mbps",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "Tích hợp gói hỗ trợ Game thủ - Ultrafast",
        giftPlus: "Miễn phí lắp đặt",
    },
];

export const comboProducts = [
    {
        type: "combo",
        title: "Giga",
        price: "230k",
        img: imgProduct.giga,
        desc: "Tốc độ Download 150 Mbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
        isRecommend: true,
    },
    {
        type: "combo",
        title: "Sky",
        price: "280k",
        img: imgProduct.sky,
        desc: "Tốc độ download không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với hộ gia đình lớn",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
        isRecommend: true,
    },
    {
        type: "combo",
        title: "Meta",
        price: "380k",
        img: imgProduct.meta,
        desc: "Tốc độ download & upload không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
    },
    {
        type: "combo",
        title: "Lux500",
        price: "877k",
        img: imgProduct.lux500,
        desc: "Tốc độ Download 500 Mbps",
        subDesc: "Tốc độ Upload 500 Mbps",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
    },
    {
        type: "combo",
        title: "Lux800",
        price: "1077k",
        img: imgProduct.lux800,
        desc: "Tốc độ Download 800 Mbps",
        subDesc: "Tốc độ Upload 800 Mbps",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
    },
];

export const features = [
    {
        icon: <TbPlayerTrackNext />,
        desc: "Tốc độ download & upload không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
    },
    {
        icon: <FaRegPaperPlane />,
        desc: "Trang bị thiết bị hai băng tần mới nhất đạt chuẩn Wifi 5 hoặc Wifi 6",
    },
    {
        icon: <RiMoneyDollarCircleLine />,
        desc: "Quản lý cước rõ ràng",
    },
    {
        icon: <FiClock />,
        desc: "Thời gian lắp đặt dịch vụ nhanh chóng, trung bình 12h - 36h",
    },
    {
        icon: <AiOutlineShareAlt />,
        desc: "Thiết bị an toàn (không sợ sét đánh lan truyền trên đường dây)",
    },
    {
        icon: <ImVideoCamera />,
        desc: "Đáp ứng hiệu quả cho các ứng dụng Công nghệ thông tin hiện đại như: Hosting Server riêng, VPN (mạng riêng ảo), Truyền dữ liệu, Game Online, IPTV (truyền hình tương tác), VoD (xem phim theo yêu cầu), Video Conference (hội nghị truyền hình), IP Camera,…",
    },
    {
        icon: <BiHeadphone />,
        desc: "Chăm sóc và hỗ trợ giải đáp khách hàng 24/7",
    },
    {
        icon: <TfiWrite />,
        desc: "Đăng ký dễ dàng, tiện lợi qua tổng đài, trên website trực tuyến, ứng dụng Hi FPT, tổng đài hoặc tại hệ thống các văn phòng giao dịch của FPT Telecom trải dài trên toàn quốc",
    },
    {
        icon: <MdOutlineSystemUpdateAlt />,
        desc: "Dễ dàng nâng cấp băng thông mà không cần kéo cáp mới",
    },
];

export const registerNow = [
    {
        img: img.register,
        title: "Đăng ký ngay",
        to: "/dang-ky-fpt",
        color: "text-[#035690]",
    },
    {
        img: img.hotline,
        title: "Hotline 0375956703",
        to: "tel:0375956703",
        color: "text-[#fd6436]",
    },
    {
        img: img.deal,
        title: "Điểm giao dịch",
        to: "#",
        color: "text-[#62b046]",
    },
];

export const packageFptPlayv1 = [
    {
        title: "Gói Vip",
        data: {
            imgLeft: img.vipLeft,
            imgRight: img.vipRight,
            desc: [
                "Tận hưởng kho phim chiếu rạp trong nước & quốc tế",
                "Hơn 200 kênh truyền hình độc quyền trên HBO GO",
                "Trực tiếp và độc quyền SeriA, FA Cup",
                "Đăng nhập đồng thời 5 thiết bị",
            ],
            price: "120.000",
        },
    },
    {
        title: "Gói Max",
        data: {
            imgLeft: img.maxLeft,
            imgRight: img.maxRight,
            desc: [
                "Hơn 200 kênh truyền hình trong nước và quốc tế",
                "Trực tiếp & độc quyền bóng đá: UEFA Champions League, UEFA Europa League, AFC Cup....",
                "Kho Phim Điện Ảnh và (ưu tiên xem trước) Phim bộ phát song song",
                "Đăng nhập và xem cùng lúc 3 thiết bị",
            ],
            price: "88.000",
        },
    },
];
export const packageFptPlayv2 = [
    {
        title: "Gói Sport",
        data: {
            imgLeft: img.sportLeft,
            imgRight: img.sportRight,
            desc: [
                "Gồm các kênh: K+SPORT 1; K+SPORT 2; K+CINE; K+LIFE",
                "Xem trực tiếp Ngoại Hạng Anh (EPL) và các giải thể thao hàng đầu thế giới trên 4 kênh K+",
                "Đăng nhập tối đa 3 thiết bị (chỉ xem cùng lúc tối đa 1 thiết bị)",
            ],
            price: "60.750",
        },
    },
    {
        title: "Gói K+",
        data: {
            imgLeft: img.kLeft,
            imgRight: img.kRight,
            desc: [
                "Gồm các kênh: K+SPORT 1; K+SPORT 2; K+CINE; K+LIFE",
                "Xem trực tiếp Ngoại Hạng Anh (EPL) và các giải thể thao hàng đầu thế giới trên 4 kênh K+",
                "Đăng nhập tối đa 3 thiết bị (chỉ xem cùng lúc tối đa 1 thiết bị)",
            ],
            price: "175.000",
        },
    },
];

export const cardPlayboxs = [
    {
        img: img.playboxHbo,
        title: "Kho phim HBO Go",
        desc: "Thư viện phim không lồ cùng các nội dung độc quyền",
    },
    {
        img: img.playboxTvShow,
        title: "200 kênh truyền hình",
        desc: "Bao gồm các nhóm kênh truyền hình Việt Nam, Quốc tế và kênh địa phương",
    },
    {
        img: img.playboxSport,
        title: "Độc quyền giải đấu",
        desc: "Trực tiếp và độc quyền các giải đấu: Champions League, Europa League, World Cup 2022 Qualifiers, AFC U23 Asian Cup,...",
    },
    {
        img: img.playboxAds,
        title: "Không quảng cáo",
        desc: "Trải nghiệm tốt hơn khi xem VOD không có quảng cáo",
    },
    {
        img: img.playboxCinema,
        title: "Kho phim đặc sắc",
        desc: "Kho phim điện ảnh đặc sắc gồm nhiều phim lẻ và phim chiếu rạp",
    },
    {
        img: img.playboxFilm,
        title: "Phim bộ chất lượng",
        desc: "Phim bộ phát song song và VIP ưu tiên xem trước hàng ngàn phim bộ bom tấn",
    },
];

export const featurePlayboxs = [
    {
        icon: <RiGlobalFill />,
        title: "Web",
    },
    {
        icon: <IoDesktop />,
        title: "TV",
    },
    {
        icon: <FaInbox />,
        title: "TV Box",
    },
    {
        icon: <AiFillAndroid />,
        title: "Android",
    },
    {
        icon: <AiFillApple />,
        title: "IOS",
    },
];
