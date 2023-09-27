import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Meta from "@/components/seo/Meta";
import { IMeta } from "@/components/seo/meta.interface";
import Footer from "./footer/Footer";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main>
        {children}
        <div id="modal-portal" />
      </main>
      <Footer />
    </Meta>
  );
};
export default Layout;
