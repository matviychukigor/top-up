import { TagProps } from "./Tag.Props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({size = "m", children, color="ghost", href, className, ...props} : TagProps) => {
    return(
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.ghost]: color === "ghost",
                [styles.primary]: color === "primary",
                [styles.red]: color === "red",
                [styles.grey]: color === "grey",
                [styles.green]: color === "green",
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};