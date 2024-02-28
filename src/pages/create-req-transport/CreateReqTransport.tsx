import CreateReqTransportStyle from "src/pages/create-req-transport/style/CreateReqTransport.module.scss";
import {TextStyle} from "src/shared/style/text";

export const CreateReqTransport = () => {
    return (
        <div className={CreateReqTransportStyle.container}>
           <p className={TextStyle.paragraph_regular}>
                Заявка на транспорт
           </p>
        </div>
    );
};