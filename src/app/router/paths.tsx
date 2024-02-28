import {IBasePath} from "src/shared/types/link";
import {CreateReqTransport} from "src/pages/create-req-transport";
import {PageNotFound} from "src/pages/page-not-found";

export const PublicRoutes: IBasePath[] = [
    {
        path: "/transport",
        element: <CreateReqTransport />
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]