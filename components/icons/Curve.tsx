import React from "react";

interface PropTypes {
  style: string;
}

const Curve: React.FC<PropTypes> = ({ style }) => {
  return (
    <svg viewBox="0 0 1366 894" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M473.193 467C382.26 573.8 119.842 578.833 0 568V894H1366V0C1248.83 31.1667 1000.26 129.8 943.381 275C872.277 456.5 586.859 333.5 473.193 467Z"
        fill={style}
      />
    </svg>
  );
};

export default Curve;
