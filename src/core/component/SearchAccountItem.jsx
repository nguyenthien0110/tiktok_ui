import { memo, useState } from "react";
import IconCheckCircle from "../icon/IconCheckCircle";

function SearchAccountItem(children) {
  const fallbackUrl = "../../../public/img/image.png";
  const [url, setUrl] = useState(children.data.imgLink);

  const handleError = () => {
    setUrl(fallbackUrl);
  };

  return (
    <>
      <div className="flex p-4 hover:bg-[rgba(22,24,35,0.05)] cursor-pointer">
        <img
          className="flex h-12 w-12 rounded-[50%] object-cover"
          src={url || "../../../public/img/image.png"}
          onError={(e) => handleError(e)}
          alt="avatar"
        />
        <div className="flex-1 ml-5">
          <h4 className="flex text-base font-medium">
            <span className="">{children.data.username}</span>
            <IconCheckCircle className="mt-2 ml-2 text-[1.2rem] text-[rgba(32,213,236)]" />
          </h4>
          <span className="text-[14px] text-[rgba(22,24,35,0.5)]">
            {children.data.username}.info
          </span>
        </div>
      </div>
    </>
  );
}

export default memo(SearchAccountItem);
