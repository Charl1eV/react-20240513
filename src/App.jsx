/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */

import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Layout } from "./components/layout/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import "./styles.scss"
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <Layout>
                        <Restaurants restaurants={restaurants} />
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
}