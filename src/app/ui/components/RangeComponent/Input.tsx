type InputProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editable: boolean;
  value: string | number;
};

function Input(props: InputProps) {
  const { editable, ...res } = props;
  return editable ? (
    <input
      data-testid="input-element"
      className="w-[100px] border-solid border-[#d7d7d8] py-[2px] px-[5px] border-[1px] rounded-md appearance-none"
      type="number"
      {...res}
    />
  ) : (
    <span
      data-testid="span-text-element"
      className="text-[15px] color-black font-bold"
    >
      {res.value} €
    </span>
  );
}

export default Input;
