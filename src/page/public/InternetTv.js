import Internet from "./Internet";
import img from "../../asset/imgs/img";
import { comboProducts } from "../../ultis/static";

function InternetTv() {
    return (
        <div>
            <Internet
                imgProduct={img.combo}
                product={comboProducts}
                title="Internet + truyền hình"
            />
        </div>
    );
}

export default InternetTv;
