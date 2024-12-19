import IconCheckCircle from "../icon/IconCheckCircle";

function SearchAccountItem() {
  return (
    <>
      <div className="flex hover:bg-[rgba(22,24,35,0.05)]">
        <img
          className="h-12 w-12 rounded-[50%] object-cover"
          src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474072oeB/anh-dai-dien-buon-ngau_023706184.jpg"
          alt=""
        />
        <div className="flex-1 ml-3">
          <h4 className="flex text-base font-medium">
            <span className="mt-2">Nguyen Van Bao</span>
            <IconCheckCircle className="mt-2 ml-2 text-[1.2rem] text-[rgba(32,213,236)]" />
          </h4>
          <span className="text-[14px] text-[rgba(22,24,35,0.5)]">BeoBeo.info</span>
        </div>
      </div>
    </>
  );
}

export default SearchAccountItem;
