import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const InnerLayout = ({ children, color, hideIndia }) => {
  return (
    <>
      <Navbar color={color ? color : "black"} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default InnerLayout;
