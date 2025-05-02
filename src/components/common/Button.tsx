import React from "react";

const hexClipPath = "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 10% 100%, 0 70%)";

const HexButton = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div className="relative inline-block">
      <div
        className="absolute inset-0 bg-accent"
        style={{
          clipPath: hexClipPath,
          transform: "scale(1.03)",
        }}
      ></div>

      <button
        onClick={onClick}
        className={`relative bg-orange-500 text-white text-2xl uppercase px-8 py-3 font-industry font-bold ${className}`}
        style={{
          clipPath: hexClipPath,
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default HexButton;
