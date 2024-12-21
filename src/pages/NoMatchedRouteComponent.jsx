import LogoIcon from "../core/icon/LogoIcon";
import NotFoundPageImage from "../core/icon/NotFoundPageImage";

function NoMatchedRouteComponent() {
  return (
    <>
      <header className="fixed w-full h-default-h shadow-[0px_1px_1px_rgba(0,0,0,0.12)] flex justify-center">
        <div className="flex items-center h-full w-default-w justify-between px-8">
          <div className="flex items-center">
            <LogoIcon />
          </div>
        </div>
      </header>

      <div className="w-screen h-screen flex justify-center">
        <div
          style={{
            height: "calc(100vh * (50 / 100))",
            width: "calc(100vw * (50 / 100))",
          }}
        >
          <NotFoundPageImage />
        </div>
      </div>
    </>
  );
}

export default NoMatchedRouteComponent;
