const Button = ({ children, styleprop, icon }) => {
  return (
    <button
      className={
        styleprop
          ? `${styleprop}`
          : ` bg-white hover:bg-slate-50 text-black font-medium py-2 px-4 rounded `
      }
    >
      {icon && (
        <img
          src="https://img.icons8.com/?size=100&id=60984&format=png&color=FFFFFF"
          alt="G"
          className="w-5 h-5"
        />
      )}
      <p className="pt-1">{children}</p>
    </button>
  );
};

export default Button;
