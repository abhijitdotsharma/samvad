// import { ButtonProps } from './ButtonProps';

export default function AuthButton({
  label,
  handleButtonClick,
  ...buttonArgs
}: {
  label: string;
  handleButtonClick: (buttonArgs: string[]) => void;
  buttonArgs: string[];
}) {
  return (
    <button type="button" onClick={() => handleButtonClick?.(buttonArgs)}>
      {label}
    </button>
  );
}
