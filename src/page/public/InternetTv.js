import Internet from "./Internet";
import img from "../../asset/imgs/img";
import { comboProducts } from "../../ultis/static";
import { Helmet } from "react-helmet";

function InternetTv() {
    return (
        <div>
            <Internet
                imgProduct={img.combo}
                product={comboProducts}
                title="Internet + truyền hình"
            />
            <Helmet>
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=yes"
                />
                <title>Khuyến mãi lắp Truyền hình FPT PLay tháng 04/2023</title>
                <meta
                    name="keywords"
                    CONTENT="truyen hinh fpt, truyen hinh cap fpt, lap dat truyen hinh fpt, cac kenh truyen hinh fpt, truyen hinh fpt hd, FPT Play, truyen hinh fpt play, fpt play fpt"
                />
                <meta
                    name="description"
                    CONTENT="Xem ngay khuyến mãi lắp truyền hình FPT Play tháng 04/2023 ✓ Truyền hình FPT Play là truyền hình tương tác đầu tiên tại Việt Nam, kho giải trí chất lượng 4k dài vô tận, miễn phí đầu thu HD 4k và modem Wifi."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="FPT Telecom HCM" />
                <link
                    rel="canonical"
                    href="https://fptshoptq.com/internet-truyen-hinh-fpt"
                />
                <link
                    rel="alternate"
                    media="handheld"
                    href="https://fptshoptq.com/internet-truyen-hinh-fpt"
                />
                <meta property="fb:app_id" content="1305829822896074" />
                <meta
                    property="og:image"
                    content="https://hcmfpt.vn/vnt_upload/service/01_2020/thumbs/500_2.jpg"
                />
            </Helmet>
        </div>
    );
}

export default InternetTv;
