import {useState} from "react";
import {IconBtn} from "src/shared/ui/btn";
import classes from "src/features/select-rote/style/selectRoute.module.scss";
import {TextStyle} from "src/shared/style/text";

export const SelectRoute = () => {
    type routerInputType = {
        id: number
        pls: string,
    }

    const [routeInput, setRouterInput] = useState<routerInputType[]>([
        {
            id: 1,
            pls: "Откуда забрать?",
        },
        {
            id: 2,
            pls: "Место прибытия",
        }
    ])

    const handlerAddRoute = () => {
        let resID = routeInput.length + 1;

        setRouterInput([
            ...routeInput, {
                id: resID, pls: "Дополнительная точка"
            }
        ])
    }

    const handlerDeletedRoute = (id: number) => {
        setRouterInput(newRouteInput => newRouteInput.filter(
            item => item.id !== id
        ))
    }

    return (
        <div>
            <div className={classes.add_route}>
                <h6 className={TextStyle.h6}>Маршрут</h6>

                <IconBtn onClick={handlerAddRoute}>
                    <div className={classes.add_route__svg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </IconBtn>
            </div>

            <div className={classes.route_set}>
                {
                    routeInput.map((el, index) => <div className={classes.route_input}>
                        <input placeholder={el.pls}/>

                        {
                            (index !== 0 && index !== 1) &&
                            <div className={classes.route_input__icon} onClick={() => handlerDeletedRoute(el.id)}>
                                <div className={classes.route_input__svg}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-plus" viewBox="0 0 16 16">
                                        <path
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                </div>
                            </div>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};