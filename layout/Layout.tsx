import React, { FunctionComponent } from "react";

import { LayoutProps } from "./Layout.Props";
import styles from "./Layout.module.css";
import cn from "classnames";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { SideBar } from "./SideBar/SideBar";

const Layout = ({ children } : LayoutProps) => {
    return(
        <div className={styles.wrapper}>  
            <Header className={styles.header}/>
            <SideBar className={styles.sideBar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const WithLayout = <T extends  Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function WithLayoutComponent(props: T): JSX.Element {
        return(
            <Layout>
                <Component
                    {...props}
                />
            </Layout>
        );
    };
};