import { SideBarProps } from "./SideBar.Props";
import styles from "./SideBar.module.css";
import cn from "classnames";

export const SideBar = ({ ...props } : SideBarProps): JSX.Element => {
    return(
        <div {...props}>  
            SideBar
        </div>
    );
};