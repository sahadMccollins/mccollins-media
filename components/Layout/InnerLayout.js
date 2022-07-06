import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const InnerLayout = ({ children }) => {
  return (
    <>
      <Navbar color="black" />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default InnerLayout;
