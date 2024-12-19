import Header from "./components/Header";
import Sidebar from "./DefaultLayout/Sidebar";

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <div className="flex w-default-w">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
