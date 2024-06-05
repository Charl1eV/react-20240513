import classNames from "classnames";
import { useTheme } from "../../contexts/theme/hooks"

import styles from "./styles.module.scss"

export const Button = ({ children, onClick, disabled }) => {
    const { theme } = useTheme();
    return <button className={classNames(styles.root, styles[theme])} onClick={onClick} disabled={disabled}>
        {children}
    </button>;
};
