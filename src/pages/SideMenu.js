import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  const onXLgButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[994px] flex flex-col p-[97px_100px_652px] box-border items-center justify-start text-left text-xs text-gray-200 font-nunito lg:pl-[200px] lg:pt-[45px] lg:pr-[200px] lg:box-border md:pl-[100px] md:pt-[45px] md:pr-[100px] md:box-border sm:pl-[50px] sm:pt-[45px] sm:pr-[50px] sm:box-border">
      <div className="relative w-[117px] h-[264.17px] shrink-0">
        <button
          className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[calc(50%_-_132.08px)] left-[calc(50%_-_-11.08px)] flex flex-row items-start justify-center [transform:rotate(180deg)] [transform-origin:0_0]"
          onClick={onXLgButtonClick}
        >
          <img
            className="relative w-[22.17px] h-[22.17px] shrink-0"
            alt=""
            src="../x-stroke.svg"
          />
        </button>
        <div className="absolute top-[calc(50%_-_74.92px)] left-[calc(50%_-_66px)] flex flex-row p-[0px_10px] box-border items-start justify-start">
          <div className="relative w-[112px] h-[246px] shrink-0">
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[26px] font-bold text-green-300 inline-block hover:text-green-900"
              to="/"
            >
              Home
            </Link>
            <a className="[text-decoration:none] absolute top-[57px] left-[31px] font-bold text-[inherit] inline-block cursor-pointer hover:text-gray-400">
              Save
            </a>
            <a className="[text-decoration:none] absolute top-[110px] left-[25px] font-bold text-[inherit] inline-block cursor-pointer hover:text-gray-400">
              Travel
            </a>
            <a className="[text-decoration:none] absolute top-[163px] left-[0px] font-bold text-[inherit] inline-block cursor-pointer hover:text-gray-400">
              Experience
            </a>
            <a className="[text-decoration:none] absolute top-[216px] left-[21px] font-bold text-[inherit] inline-block cursor-pointer hover:text-gray-400">
              Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
