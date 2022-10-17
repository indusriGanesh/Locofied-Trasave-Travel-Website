import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onHangouerButtonClick = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  const onContactButtonClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  return (
    <div className="self-stretch bg-black flex flex-col p-[25px_93px] box-border items-center justify-center text-left text-xs text-white font-nunito lg:pl-[60px] lg:pt-[0px] lg:pr-[60px] lg:box-border md:pl-[35px] md:pt-[0px] md:pr-[35px] md:box-border sm:pl-[30px] sm:pt-[0px] sm:pr-[30px] sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-between md:flex-row md:pt-[25px] md:box-border">
        <button
          className="cursor-pointer [border:none] p-[0] bg-[transparent] hidden flex-col items-center justify-start relative md:flex"
          onClick={onHangouerButtonClick}
        >
          <div className="relative w-[42px] h-[40.92px] shrink-0 z-[0]">
            <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-green-300 w-[42px] h-[40.92px]" />
          </div>
          <img
            className="absolute m-[0_!important] top-[10.92px] left-[9px] w-[24px] h-[21px] shrink-0 z-[1]"
            alt=""
            src="../frame-54.svg"
          />
        </button>
        <img
          className="relative w-[107px] h-[107px] shrink-0 overflow-hidden object-cover md:w-[95px] md:h-[95px]"
          alt=""
          src="../logo@2x.png"
        />
        <div className="flex flex-row items-center justify-center gap-[40px]">
          <div className="w-[450px] shrink-0 flex flex-row items-center justify-between md:hidden">
            <Link
              className="cursor-pointer [text-decoration:none] relative font-bold text-green-200 inline-block hover:text-green-100"
              to="/"
            >
              Home
            </Link>
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block cursor-pointer hover:text-gray-300">
              Save
            </a>
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block cursor-pointer hover:text-gray-300">
              Travel
            </a>
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block hover:text-gray-300 hover:cursor-pointer">
              Experience
            </a>
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block hover:text-gray-300 hover:cursor-pointer">
              Wallet
            </a>
          </div>
          <button
            className="cursor-pointer [border:none] p-[9px_25px] bg-green-300 rounded-[10px] flex flex-row box-border items-center justify-center hover:bg-green-500 md:pl-[10px] md:pr-[10px] md:box-border sm:pl-[7px] sm:pt-[9px] sm:pr-[7px] sm:box-border"
            onClick={onContactButtonClick}
          >
            <b className="relative text-xs inline-block font-nunito text-white text-left md:text-3xs sm:text-6xs">
              Contact Us
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
