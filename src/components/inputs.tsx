import { TbMail } from "react-icons/tb";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  startIcon,
  endIcon,
  className,
  ...other
}) => (
  <span className="flex gap-3 bg-[#EDF5F3] px-3 py-2 rounded-2xl items-center">
    {startIcon}
    <input
      className={`bg-transparent inline-block  outline-none w-full ${className}`}
      {...other}
    />
    {endIcon}
  </span>
);
