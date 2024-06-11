import PageNotFoundStyle from "src/pages/page-not-found/style/pageNotFoun.module.scss";
import {TextStyle} from "src/shared/style/text";

export const PageNotFound = () => {
    return (
        <main className={PageNotFoundStyle.container}>
            <h2 className={TextStyle.h1}>
                Oops...
            </h2>

            <p className={TextStyle.paragraph_regular}>Страница не найдена, или она никогда не существовала</p>
        </main>
    );
};