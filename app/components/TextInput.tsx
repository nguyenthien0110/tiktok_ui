import { TextInputCompTypes } from "../../type";

function TextInput({
  string,
  inputType,
  placeholder,
  error,
  onUpdate,
}: TextInputCompTypes) {
  return (
    <>
      <input
        placeholder={placeholder}
        className="block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
        type={inputType}
        value={string || ""}
        onChange={(event) => onUpdate(event.target.value)}
      />
      <div className="text-red-500 text-[14px] font-semibold">
        {error ? error : null}
      </div>
    </>
  );
}

export default TextInput;
