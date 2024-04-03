import { logo, logo1 } from "../assets";
import { LuCopy } from "react-icons/lu";

const Hero = () => {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    // console.log("copied")
  };

  return (
    <div className="w-full hero md:h-[70vh] novasquare flex justify-center md:pt-[30px]">
      <div className="flex  flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-center items-center">
          <h1 className="max-w-[600px] font-bold text-center sm:text-center sm:text-8xl hero-text text-4xl">
            0xDeveloper
          </h1>
          <p className="sm:text-base sm:text-center text-center text-base font-normal max-w-[500px] text-[#fff]">
            {/* the forthcoming rollout of generative AI tools to its staff and clients.   */}
            A launchpad that enables easy creation of tokens for token creators
            looking to launch their projects on BASE.
          </p>
          <a
            href="https://dexscreener.com/base/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="sm:text-lg sm:text-left text-center underline text-[12px] font-normal text-[#fff]">
              {/* CA: 0x */}
            </p>
          </a>
          <div>
            <div className="flex gap-3">
              <a
                href="https://dexscreener.com/base/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
                  CA: 0xd..4Ay <LuCopy />
                </button>
              </a>
              <a
                // href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
                  Launch a Token
                </button>
              </a>
            </div>
          </div>
        </div>
        <a
          // href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col flex-1 justify-start md:ml-10 icon-fade"
        >
          {/* <img src={logo} alt="logo" width={350} /> */}
        </a>
      </div>
    </div>
  );
};
export default Hero;
//https://link.bitpay.com/i/W5M73vVNnHzvrYwNvPLKhw
