import CreateReqTransportStyle from "src/pages/create-req-transport/style/CreateReqTransport.module.scss";
import {TransportForm} from "src/widgets/form/transport-form";

export const CreateReqTransport = () => {
    return (
        <div className={CreateReqTransportStyle.container}>
            <TransportForm/>
        </div>
    );
};