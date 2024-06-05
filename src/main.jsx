/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Layout } from "./components/layout/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import "./styles.scss"

const root = createRoot(document.getElementById("root"));

root.render(
    <ThemeContextProvider>
        <UserContextProvider>
            <Layout>
                <Restaurants restaurants={restaurants} />
            </Layout>
        </UserContextProvider>
    </ThemeContextProvider>
);
