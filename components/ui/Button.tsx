import React from "react";

const Button = ({
  children,
  primary = true,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) => {
  return (
    <button
      style={{ opacity: 0 }}
      className={`border cursor-pointer border-white px-4 py-2 transition-[border-radius] duration-300 hover:rounded-[6px] rounded-3xl ${
        primary ? "bg-foreground text-background" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
