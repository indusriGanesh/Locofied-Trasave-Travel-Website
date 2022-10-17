import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

const TransaveContactPage = () => {
  const navigate = useNavigate();

  const onHangouerButtonClick = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  const onContactButtonClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onContactUsText1Click = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-center justify-start text-left text-xs text-white font-nunito">
      <div className="self-stretch bg-black flex flex-col p-[25px_93px] box-border items-center justify-center lg:pl-[60px] lg:pt-[0px] lg:pr-[60px] lg:box-border md:pl-[35px] md:pt-[0px] md:pr-[35px] md:box-border sm:pl-[30px] sm:pt-[0px] sm:pr-[30px] sm:box-border">
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
      <div className="self-stretch bg-black flex flex-col p-[45px_472px] box-border items-center justify-start text-center text-4xl text-green-300 font-montserrat lg:pl-[150px] lg:pt-[45px] lg:pr-[150px] lg:box-border md:pl-[100px] md:pt-[45px] md:pr-[100px] md:box-border sm:pl-[50px] sm:pt-[45px] sm:pr-[50px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[37px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
            <div className="self-stretch relative font-semibold inline-block">
              Contact Now
            </div>
            <div className="self-stretch relative text-4xs leading-[24px] font-medium text-white inline-block">
              For all kind of enquiries, please choose 1 option from below and
              share your email address with us.
            </div>
          </div>
          <input
            className="[border:1px_solid_#e0e0e0] bg-gray-100 self-stretch rounded-[10px] box-border relative flex flex-row p-[14px_8px_14px_16px] items-start justify-start"
            type="text"
            placeholder="Name *"
          />
          <input
            className="[border:1px_solid_#e0e0e0] bg-white self-stretch rounded-[10px] box-border relative flex flex-row p-[14px_8px_14px_16px] items-start justify-start"
            type="text"
            placeholder="Email *"
          />
          <input
            className="[border:1px_solid_#e0e0e0] bg-white self-stretch rounded-[10px] box-border relative flex flex-row p-[14px_8px_14px_16px] items-start justify-start"
            type="text"
            placeholder="Phone *"
          />
          <textarea
            className="[border:1px_solid_#e0e0e0] bg-white self-stretch rounded-[10px] box-border relative flex flex-row p-[14px_8px_14px_16px] items-start justify-start"
            placeholder="Message"
          />
          <button className="cursor-pointer [border:none] p-[14px_60px] bg-green-300 rounded-[10px] h-[45px] shrink-0 flex flex-row box-border items-end justify-center hover:bg-green-800 md:pl-[30px] md:pt-[14px] md:pr-[30px] md:box-border">
            <div className="relative text-6xs font-semibold font-montserrat text-white text-left inline-block">
              Send Message
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col p-[70px_79px_60px] box-border items-start justify-start text-4xs lg:pl-[120px] lg:pt-[49px] lg:pr-[120px] lg:box-border md:pl-[100px] md:pt-[49px] md:pr-[100px] md:box-border sm:pl-[50px] sm:pt-[49px] sm:pr-[50px] sm:box-border">
        <div className="self-stretch flex flex-row items-center justify-around gap-[82px] flex-wrap lg:flex-row md:flex-col">
          <div className="flex flex-col items-start justify-start gap-[20px] text-base">
            <img
              className="relative w-[114px] h-[146px] shrink-0 object-cover"
              alt=""
              src="../mask-group2@2x.png"
            />
            <div className="relative font-semibold inline-block w-[315px]">{`TRASAVE travel fund is a good way to track your travel money. `}</div>
            <img
              className="relative w-[175px] h-[36.84px] shrink-0 object-cover"
              alt=""
              src="../mask-group3@2x.png"
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
    </div>
  );
};

export default TransaveContactPage;
