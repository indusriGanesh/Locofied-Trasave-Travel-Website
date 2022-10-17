import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TraasaveHomePage = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-4xl text-white font-nunito">
      <Navbar />
      <div className="self-stretch bg-black flex flex-col p-[66px_85px] box-border items-start justify-start text-3xl lg:flex-col lg:pl-[60px] lg:pt-[66px] lg:pr-[60px] lg:box-border md:pl-[45px] md:pt-[66px] md:pr-[45px] md:box-border sm:pl-[35px] sm:pt-[66px] sm:pr-[35px] sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-start lg:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[35px] lg:flex-[unset] lg:self-stretch">
            <div className="self-stretch relative font-black inline-block [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)] sm:text-xl sm:text-left">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                <span className="text-green-300">SAVING</span>
                <span> YOUR MONEY</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                <span>FOR TRAVEL THROUGH</span>
              </p>
              <p className="m-[0]">
                <span>TRAVEL FUND</span>
              </p>
            </div>
            <b className="self-stretch relative text-base inline-block">
              Save your money for travel securely and explore the whole world
              with trasave, we provide you the best travel services.
            </b>
            <button className="cursor-pointer [border:none] p-[15px_40px] bg-green-300 rounded-[10px] w-[267px] h-[63px] shrink-0 flex flex-row box-border items-center justify-center hover:bg-green-400">
              <div className="relative text-base tracking-[0.04em] font-extrabold font-nunito text-white text-left inline-block">
                Save now
              </div>
            </button>
          </div>
          <img
            className="flex-1 max-w-full overflow-hidden max-h-full object-cover ml-[-16px] lg:flex-col lg:flex-[unset] lg:self-stretch md:pl-[0px] md:pt-[60px] md:box-border"
            alt=""
            src="../frame-10@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col p-[67px_103px] box-border items-center justify-center h-[auto] text-right text-[64px] lg:pl-[80px] lg:pt-[67px] lg:pr-[80px] lg:box-border md:pl-[50px] md:pt-[67px] md:pr-[50px] md:box-border sm:pl-[20px] sm:pt-[67px] sm:pr-[20px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[61px] h-[auto] md:flex-col md:pl-[10px] md:pr-[10px] md:box-border">
          <div className="relative font-black inline-block md:text-center sm:text-3xl">
            <span>{`Why to `}</span>
            <span className="text-green-300">travel</span>
            <span> with us?</span>
          </div>
          <div className="self-stretch relative text-base font-semibold text-center inline-block md:text-base md:text-center">
            Ambitious about your next adventure but sick of saving money? End up
            sneaking into those savings because well.. You’re bored? Lost
            motivation? You don’t feel the funds are growing fast enough? Saving
            just sucks? Trasave has introduced an epic new way to reward you for
            your savings for travel
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-row p-[42px_220px] box-border items-center justify-start text-xl lg:pl-[120px] lg:pt-[42px] lg:pr-[120px] lg:box-border md:pl-[100px] md:pt-[42px] md:pr-[100px] md:box-border sm:pl-[80px] sm:pt-[42px] sm:pr-[80px] sm:box-border">
        <div className="flex-1 self-stretch flex flex-row items-center justify-between md:flex-col">
          <div className="flex flex-row p-[40px_0px] box-border items-start justify-start">
            <div className="relative w-[207px] h-[233px] shrink-0">
              <img
                className="absolute top-[0px] left-[53.5px] w-[100px] h-[100px] object-cover"
                alt=""
                src="../service-tips@2x.png"
              />
              <div className="absolute top-[109px] left-[4px] font-semibold inline-block">
                Save money
              </div>
              <div className="absolute top-[167px] left-[0px] text-base font-semibold text-center inline-block w-[207px]">
                Invest in trasave securily for future
              </div>
            </div>
          </div>
          <div className="flex flex-row p-[40px_0px] box-border items-start justify-start">
            <div className="relative w-[218px] h-[233px] shrink-0">
              <img
                className="absolute top-[0px] left-[59px] w-[100px] h-[100px] object-cover"
                alt=""
                src="../wedding-gift@2x.png"
              />
              <div className="absolute top-[109px] left-[0px] font-semibold inline-block w-[218px]">
                Earn rewards
              </div>
              <div className="absolute top-[167px] left-[5.5px] text-base font-semibold text-center inline-block w-[207px]">
                Earn rewards and track your money
              </div>
            </div>
          </div>
          <div className="flex flex-row p-[40px_0px] box-border items-start justify-start">
            <div className="relative w-[207px] h-[233px] shrink-0">
              <img
                className="absolute top-[0px] left-[53.5px] w-[100px] h-[100px] object-cover"
                alt=""
                src="../travel-agency@2x.png"
              />
              <div className="absolute top-[109px] left-[53px] font-semibold inline-block">
                Travel
              </div>
              <div className="absolute top-[167px] left-[0px] text-base font-semibold text-center inline-block w-[207px]">
                Use this money for your travelling
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col p-[30px_103px] box-border items-start justify-start md:pl-[45px] md:pt-[80px] md:pr-[45px] md:box-border sm:pl-[35px] sm:pt-[80px] sm:pr-[35px] sm:box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[95px] lg:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[26px] lg:flex-[unset] lg:self-stretch">
            <div className="relative bg-green-300 w-[147px] h-[7px] shrink-0" />
            <b className="self-stretch relative inline-block sm:text-2xl">
              Save and get Travel Fund Rewards
            </b>
            <div className="self-stretch relative text-base font-semibold whitespace-pre-wrap inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">{`Trasave travel fund is a fun and secure way to save. Not only can you customise your own travel journey but also earn rewards while travelling by uploading videos of the destination. Also it gives cool tips to `}</p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                &nbsp;
              </p>
              <p className="m-[0]">{`encourage more savings and  we will also reward you with epic cool gifts when you hit saving goals. `}</p>
            </div>
          </div>
          <img
            className="flex-1 max-w-full overflow-hidden max-h-full object-cover lg:flex-[unset] lg:self-stretch"
            alt=""
            src="../frame-7@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-row p-[73px_106px] box-border items-center justify-center text-right md:pl-[45px] md:pt-[73px] md:pr-[45px] md:box-border sm:pl-[35px] sm:pt-[73px] sm:pr-[35px] sm:box-border">
        <div className="flex-1 flex flex-row items-end justify-start gap-[95px] lg:flex-col">
          <img
            className="flex-1 rounded-[0px_0px_50px_50px] max-w-full overflow-hidden max-h-full object-cover lg:flex-[unset] lg:self-stretch md:pt-[0px] md:box-border"
            alt=""
            src="../left-side-image@2x.png"
          />
          <div className="flex-1 flex flex-col p-[75px_0px_0px] box-border items-end justify-center gap-[26px] lg:flex-[unset] lg:self-stretch">
            <div className="relative bg-green-300 w-[147px] h-[7px] shrink-0" />
            <b className="self-stretch relative inline-block sm:text-2xl">
              Find the best places of the world
            </b>
            <div className="self-stretch relative text-base font-semibold inline-block">
              We at trasave provide ou the best destination for travel, go and
              find new places and add to your travel list and go for travel
              later and enjoy, use your saved money later without thinking about
              money
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col p-[151px_50px] box-border items-center justify-start lg:pl-[50px] lg:pt-[151px] lg:pr-[50px] lg:box-border md:pl-[45px] md:pt-[151px] md:pr-[45px] md:box-border sm:pl-[35px] sm:pr-[35px] sm:box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[139px] lg:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[65px] lg:flex-[unset] lg:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
              <div className="relative bg-green-300 w-[147px] h-[7px] shrink-0" />
              <b className="self-stretch relative inline-block sm:text-2xl">
                Save now and earn cashback upto 250
              </b>
              <div className="self-stretch relative text-base font-semibold inline-block">{`We at trasave provide ou the best destination for travel, `}</div>
            </div>
            <button className="cursor-pointer [border:none] p-[15px_40px] bg-green-300 rounded-[10px] w-[190px] flex flex-row box-border items-center justify-center hover:bg-green-700">
              <b className="relative text-base inline-block font-nunito text-white text-left">
                Let’s save
              </b>
            </button>
          </div>
          <img
            className="flex-1 max-w-full overflow-hidden max-h-full lg:flex-[unset] lg:self-stretch"
            alt=""
            src="../frame-77.svg"
          />
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col p-[83px_103px] box-border items-start justify-start lg:pl-[80px] lg:pt-[83px] lg:pr-[80px] lg:box-border md:pl-[60px] md:pt-[83px] md:pr-[60px] md:box-border sm:pl-[50px] sm:pr-[50px] sm:box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[82px] lg:flex-col">
          <div className="flex-1 flex flex-col items-start justify-center gap-[26px] lg:flex-[unset] lg:self-stretch">
            <div className="relative bg-green-300 w-[147px] h-[7px] shrink-0" />
            <b className="self-stretch relative inline-block sm:text-2xl">
              Save your travel money in Trasave and get top grade security with
              trasave
            </b>
          </div>
          <form className="flex-1 flex flex-row items-start justify-center lg:flex-[unset] lg:self-stretch">
            <div className="flex-1 relative text-base font-semibold font-nunito text-white text-left inline-block">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                There are so many benefits of travelling with Trasave. Not only
                do we provide you with an awesome digital travel solution , an
                awesome travel app, but we also make it super easy and fun for
                you to store, save and move your travel money.
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                &nbsp;
              </p>
              <p className="m-[0]">{`As well as saving money, the TRASAVE travel fund is a good way to track your travel money. Tracking Expenses is important when travelling as you don’t want to be stuck in the middle of your journey budgeting your travel. We created the travel fund so you can store all your travel money and then track your money from your travel fund expense tracker. `}</p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TraasaveHomePage;
