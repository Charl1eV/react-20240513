/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { Restaurant } from "./components/restaurant/component";
import { Layout } from "./components/layout/component";

const root = createRoot(document.getElementById("root"));

root.render(
    <Layout>
        {(restaurants || []).map((restaurant) => (
            <Restaurant restaurant={restaurant} />
        ))}
    </Layout>
);
