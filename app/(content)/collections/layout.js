import styles from "./layout.module.scss";

export const metadata = {
  title: `Collection`, //TODO récupérer le nom de la collection
  description: "Présentation de la collection",
};

export default function RootLayout({ children }) {
  return <div className={styles.fullScreen}>{children}</div>;
}
