import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
