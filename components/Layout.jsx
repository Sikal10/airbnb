import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Hero />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;