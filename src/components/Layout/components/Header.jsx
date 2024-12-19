import LogoIcon from "../../../core/icon/LogoIcon";
import IconCloseCircle from "../../../core/icon/IconCloseCircle";
import IconSpinner from "../../../core/icon/IconSpinner";
import IconSearchOutline from "../../../core/icon/IconSearchOutline";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import SearchAccountItem from "../../../core/component/SearchAccountItem";

function Header() {
  const [searchResult, setSeachResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSeachResult([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <>
      <header className="w-full h-default-h shadow-[0px_1px_1px_rgba(0,0,0,0.12)] flex justify-center">
        <div className="flex items-center h-full w-default-w justify-between">
          <div className="flex items-center">
            <LogoIcon />
          </div>

          <Tippy
            visible={searchResult.length > 0}
            interactive={true}
            render={(attrs) => (
              <Popup className="!w-[341px] pt-2">
                <span tabIndex="-1" {...attrs}>
                  <h4 className="">Accounts</h4>
                  <SearchAccountItem />
                  <SearchAccountItem />
                  <SearchAccountItem />
                  <SearchAccountItem />
                </span>
              </Popup>
            )}
          >
            <div className="relative flex w-[341px] h-[46px] bg-[rgba(22,24,35,0.06)] rounded-[92px] py-0 border-[1.5px] focus-within:border-[rgba(22,24,35,0.23)]  after:content-[''] after:absolute after:h-[28px] after:w-[0.12rem] after:bg-[rgba(22,24,35,0.12)] after:top-3 after:right-[52px]">
              <input
                className="peer flex-1 text-txt-default bg-transparent border-none text-[1.6rem] outline-none px-7 py-6 caret-red-300"
                type="text"
                placeholder="Search account and videos"
                spellCheck="false"
              />
              <button
                type="button"
                className="absolute right-[58px] top-[50%] translate-y-[-50%]"
              >
                <IconCloseCircle />
              </button>

              <IconSpinner className="absolute right-[58px] top-[33%] translate-y-[-50%] text-[rgba(22,24,35,0.34)] animate-wiggle" />

              <button
                type="button"
                className="h-full w-[52px] flex items-center justify-center text-[rgba(22,24,35,0.34)] hover:bg-[rgba(22,24,35,0.03)] hover:rounded-tr-[20px] hover:rounded-br-[20px] text-[2.4rem] peer-[:not(:placeholder-shown):focus]:text-[rgba(22,24,35,2)] active:bg-[rgba(22,24,35,0.06)]"
              >
                <IconSearchOutline />
              </button>
            </div>
          </Tippy>

          <div className="">{/* Accion */}</div>
        </div>
      </header>
    </>
  );
}

export default Header;
