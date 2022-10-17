import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const onContactUsText1Click = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  return (
    <div className="self-stretch bg-black flex flex-col p-[70px_79px_60px] box-border items-start justify-start text-left text-4xs text-white font-nunito lg:pl-[120px] lg:pt-[49px] lg:pr-[120px] lg:box-border md:pl-[100px] md:pt-[49px] md:pr-[100px] md:box-border sm:pl-[50px] sm:pt-[49px] sm:pr-[50px] sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-around gap-[82px] flex-wrap lg:flex-row md:flex-col">
        <div className="flex flex-col items-start justify-start gap-[20px] text-base">
          <img
            className="relative w-[114px] h-[146px] shrink-0 object-cover"
            alt=""
            src="../mask-group@2x.png"
          />
          <div className="relative font-semibold inline-block w-[315px]">{`TRASAVE travel fund is a good way to track your travel money. `}</div>
          <img
            className="relative w-[175px] h-[36.84px] shrink-0 object-cover"
            alt=""
            src="../mask-group1@2x.png"
          />
        </div>
        <div className="flex flex-col p-[0px_0px_50px] box-border items-start justify-start gap-[25px] font-roboto">
          <div className="relative tracking-[0.02em] leading-[30px] text-green-300 inline-block w-[79px] h-[21px] shrink-0">
            Company
          </div>
          <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[50px] h-[21px] shrink-0">
            About
          </div>
          <div
            className="relative tracking-[0.02em] leading-[30px] inline-block w-[103px] h-[21px] shrink-0 cursor-pointer"
            onClick={onContactUsText1Click}
          >
            Contact us
          </div>
          <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[66px] h-[21px] shrink-0">
            Support
          </div>
        </div>
        <div className="flex flex-col p-[0px_0px_95px] box-border items-start justify-start gap-[24px] font-roboto">
          <div className="relative tracking-[0.02em] leading-[30px] text-green-300 inline-block w-[45px] h-[21px] shrink-0">
            Legal
          </div>
          <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[161px] h-[21px] shrink-0">{`Terms & conditions`}</div>
          <div className="relative tracking-[0.02em] leading-[30px] inline-block w-[116px] h-[21px] shrink-0">
            Privacy Policy
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[9px] text-center text-lg md:flex-[unset] md:self-stretch">
          <div className="relative font-extrabold inline-block">
            <span>{`Subscribe `}</span>
            <span className="text-green-300">Newsletter</span>
          </div>
          <div className="self-stretch rounded-[8px] bg-white flex flex-row p-[8px_10px] box-border items-center justify-start gap-[20px] md:w-full">
            <input
              className="[border:none] bg-[transparent] flex-1 relative text-4xs tracking-[0.03em] leading-[26.25px] font-poppins text-gray-500 text-left inline-block focus:[outline:none] md:text-5xs md:w-[calc(100%_-_120px);]"
              type="text"
              placeholder="Add your email here"
            />
            <button className="cursor-pointer [border:none] p-[11px_26px] bg-green-300 rounded-[8px] flex flex-row box-border items-center justify-center hover:bg-green-600 sm:pl-[10px] sm:pr-[10px] sm:box-border">
              <div className="relative text-sm tracking-[0.03em] leading-[26.25px] capitalize font-medium font-poppins text-white text-left inline-block md:text-2xs">
                SEND
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
