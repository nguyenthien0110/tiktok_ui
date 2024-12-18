import Header from "./Header/index";
import Sidebar from "./Sidebar/index";

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;

