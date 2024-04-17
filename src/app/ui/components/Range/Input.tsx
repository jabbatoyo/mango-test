type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editable: boolean;
  defaultValue: string | number;
};

function Input(props: InputProps) {
  const { editable, ...res } = props;
  return editable ? (
    <input
      className="w-[100px] border-solid border-[#d7d7d8] mr-3 ml-2 py-[2px] px-[5px] border-[1px] rounded-md appearance-none"
      type="number"
      min="1"
      max="500"
      {...res}
    />
  ) : (
    <span className="mr-3 ml-2 text-[16px] font-[600] ">
      {res.defaultValue}
    </span>
  );
}

export default Input;
