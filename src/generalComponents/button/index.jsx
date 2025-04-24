export const Button = ({
  label = "Label",
  className = "",
  preIcon,
  postIcon,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
}) => {
  const varinats = {
    primary:
      "bg-green-500 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-700",
    secondary:
      "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-transparent border border-transparent transition-all  hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-primary-text",
    outlined:
      "hover:bg-neutral-100 text-neutral-600 bg-transparent border hover:border-transparent transition-all  border-neutral-300 hover:text-primary-text",
  };
  return (
    <button
      className={`${varinats[variant]} ${className} py-3 px-4 rounded-lg flex text-preset-4 items-center justify-center gap-2 focus:outline-none  focus-within:ring-neutral-500 focus-within:ring-offset-2 focus-within:ring-offset-neutral-50 focus-within:ring-2 border-neutral-300 dark:focus-within:ring-neutral-700 dark:focus-within:ring-offset-neutral-950 dark:focus-within:border-neutral-600  disabled:bg-neutral-100 disabled:text-neutral-300`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
      type={type}
    >
      {preIcon && preIcon}
      <span>{label}</span>
      {postIcon}
    </button>
  );
};
