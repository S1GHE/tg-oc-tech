import CreateReqTransportStyle from "src/pages/create-req-transport/style/CreateReqTransport.module.scss";
import {TransportForm} from "src/widgets/form/transport-form";
import {bgPattern} from "src/shared/assets/bg";
import {TextStyle} from "src/shared/style/text";

export const CreateReqTransport = () => {
    return (
        <div className={CreateReqTransportStyle.container}>
            <div className={CreateReqTransportStyle.head_bg}>
                <div className={CreateReqTransportStyle.head_bg__text}>
                    <h1 className={TextStyle.h4}>Заявка на транспорт</h1>
                    <p className={TextStyle.span_regular}>В данной форме вы заполняете, заявку на подачу, транспорта</p>
                </div>

                <img className={CreateReqTransportStyle.head_bg__img} src={bgPattern} alt={"bgPattern"}/>
            </div>
            <TransportForm/>
        </div>
    );
};