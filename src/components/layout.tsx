import { ReactElement } from "react";
import styles from "./layout.module.css";

export interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
