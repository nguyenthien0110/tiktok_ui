import LogoIcon from "../../../core/icon/LogoIcon";
import IconCloseCircle from "../../../core/icon/IconCloseCircle";
import IconSpinner from "../../../core/icon/IconSpinner";
import IconSearchOutline from "../../../core/icon/IconSearchOutline";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import SearchAccountItem from "../../../core/component/SearchAccountItem";
import Button from "../../../core/component/Button";
import IconMenuVertical from "../../../core/icon/IconMenuVertical";
import MenuItem from "../../../core/component/MenuItem";
import { getAccountList } from "../../../services/AccountService";
import { MenuItemUserValue, MenuItemValue } from "../../../core/utill/MenuItem";
import IconChevronBackSharp from "../../../core/icon/IconChevronBackSharp";
import IconCloudUpload from "../../../core/icon/IconCloudUpload";
import IconMessage from "../../../core/icon/IconMessage";
import IconBxMessageMinus from "../../../core/icon/IconBxMessageMinus";
import ButtonIcon from "../../../core/component/ButtonIcon";

function Header() {
  const [searchResult, setSeachResult] = useState([]);
  const [menuItem, setMenuitem] = useState([{ MenuItemValue }]);
  const [menuUserItem, setMenuUseritem] = useState([{ MenuItemUserValue }]);
  const [showBackSharp, setShowBackSharp] = useState(false);
  const currenUser = true;

  useEffect(() => {
    setTimeout(() => {
      getAccountList().then((accounts) => {
        setSeachResult([accounts.flat()]);
      });
    }, 0);
  }, []);

  const handleClick = (item) => {
    if (item.children) {
      if (currenUser) {
        setMenuUseritem((prev) => [...prev, { language: item.children }]);
      } else {
        setMenuitem((prev) => [...prev, { language: item.children }]);
      }
      setShowBackSharp(true);
    }
  };

  const handleRemoveLanguage = () => {
    if (currenUser) {
      setMenuUseritem((prev) => prev.slice(0, prev.length - 1));
    } else {
      setMenuitem((prev) => prev.slice(0, prev.length - 1));
    }
    setShowBackSharp(false);
  };

  return (
    <>
      <header className="w-full h-default-h shadow-[0px_1px_1px_rgba(0,0,0,0.12)] flex justify-center">
        <div className="flex items-center h-full w-default-w justify-between px-8">
          <div className="flex items-center">
            <LogoIcon />
          </div>

          <Tippy
            // visible={searchResult.length > 0}
            zIndex={999}
            interactive={true}
            render={(attrs) => (
              <Popup className="!w-[341px]">
                <span tabIndex="-1" {...attrs}>
                  <h4 className="py-2 text-base font-semibold text-[rgba(22,24,35,0.5)]">
                    Accounts
                  </h4>
                  {searchResult.flat().map((data, index) => {
                    return <SearchAccountItem key={index} data={data} />;
                  })}
                </span>
              </Popup>
            )}
          >
            <div className="relative flex w-[341px] h-[46px] bg-[rgba(22,24,35,0.06)] rounded-[92px] py-0 border-[1.5px] focus-within:border-color/[0.23]  after:content-[''] after:absolute after:h-[28px] after:w-[0.12rem] after:bg-color/[0.12] after:top-3 after:right-[52px]">
              <input
                className="peer flex-1 text-black bg-transparent border-none text-[1.6rem] outline-none px-7 py-6 caret-red-300"
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

              <IconSpinner className="absolute right-[58px] top-[33%] translate-y-[-50%] text-color/[0.34] animate-wiggle" />

              <button
                type="button"
                className="h-full w-[52px] flex items-center justify-center text-color/[0.34] hover:bg-color/[0.03] hover:rounded-tr-[20px] hover:rounded-br-[20px] text-[2.4rem] peer-[:not(:placeholder-shown):focus]:text-color/[2] active:bg-color/[0.06]"
              >
                <IconSearchOutline />
              </button>
            </div>
          </Tippy>

          {currenUser ? (
            <div className="flex h-12 justify-items-end items-center gap-7">
              <ButtonIcon title={"Upload"} key={1} icon={<IconCloudUpload />} />
              <ButtonIcon title={"Message"} key={2} icon={<IconMessage />} />
              <ButtonIcon
                title={"Notification"}
                key={3}
                icon={<IconBxMessageMinus />}
              />
              <Tippy
                visible={true}
                zIndex={999}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                  <Popup className="!w-[216px] !h-auto !py-3">
                    <div {...attrs}>
                      {showBackSharp && (
                        <MenuItem
                          className="flex !pl-12"
                          icon={<IconChevronBackSharp />}
                          content={"Language"}
                          onClick={handleRemoveLanguage}
                        />
                      )}
                      {menuUserItem.at(-1) &&
                        Object.keys(menuUserItem.at(-1)).map((key) => {
                          const subItems = menuUserItem.at(-1)[key];
                          if (Array.isArray(subItems)) {
                            return subItems.map((item, index) => (
                              <MenuItem
                                key={index}
                                content={item.content}
                                icon={item.icon}
                                to={item.toLink}
                                onClick={
                                  item.children
                                    ? () => handleClick(item)
                                    : undefined
                                }
                              />
                            ));
                          }
                          return null;
                        })}
                    </div>
                  </Popup>
                )}
                onHide={() => {
                  setMenuUseritem((prev) => prev.slice(0, 1));
                  setShowBackSharp(false);
                }}
              >
                <div className="">
                  <img
                    className="flex h-12 w-12 rounded-[50%] object-cover"
                    src={"../../../public/img/image.png"}
                    alt="avatar"
                  />
                </div>
              </Tippy>
            </div>
          ) : (
            <div className="flex right-0 justify-between gap-3 items-center">
              <Button text>Log in</Button>
              <Button primary>Log in</Button>
              <Tippy
                zIndex={-1}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                  <Popup className="!w-[216px] !h-auto !py-3">
                    <div {...attrs}>
                      {showBackSharp && (
                        <MenuItem
                          className="flex !pl-12"
                          icon={<IconChevronBackSharp />}
                          content={"Language"}
                          onClick={handleRemoveLanguage}
                        />
                      )}
                      {menuItem.at(-1) &&
                        Object.keys(menuItem.at(-1)).map((key) => {
                          const subItems = menuItem.at(-1)[key];
                          if (Array.isArray(subItems)) {
                            return subItems.map((item, index) => (
                              <MenuItem
                                key={index}
                                content={item.content}
                                icon={item.icon}
                                to={item.toLink}
                                onClick={
                                  item.children
                                    ? () => handleClick(item)
                                    : undefined
                                }
                              />
                            ));
                          }
                          return null;
                        })}
                    </div>
                  </Popup>
                )}
                onHide={() => {
                  setMenuitem((prev) => prev.slice(0, 1));
                  setShowBackSharp(false);
                }}
              >
                <div>
                  <IconMenuVertical
                    id={"menuIcon"}
                    className="text-[26px] cursor-pointer text-color/[1] font-extrabold"
                  />
                </div>
              </Tippy>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
