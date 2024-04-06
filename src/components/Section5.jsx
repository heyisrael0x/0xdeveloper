import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GiMonkey } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Card = ({ icon, title, subtitle, button, link }) => (
  <div className="flex flex-col max-w-xs min-h-[15.625rem] justify-start p-4 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div className="w-14 h-14 rounded-md flex items-center justify-center bg-[#28282B] border-[0.5px] border-[#424242]">
      {icon}
    </div>
    <div className="flex flex-col gap-3">
      <h1 className="mt-2 text-white text-2xl font-medium">{title}</h1>
      <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#28282B] w-44 text-white text-center justify-center border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
          {button}
        </button>
      </a>
    </div>
  </div>
);

const Section5 = () => {
  return (
    <div className="w-full novasquare my-[20px] ">
      <h1 className="font-bold text-center sm:text-center sm:text-6xl text-3xl">
        Utility
      </h1>
      <div className="flex flex-wrap w-screen my-[20px] gap-[26px] novasquare justify-center items-center">
        <Card
          icon={<BsFillCheckSquareFill fontSize={21} className="text-[#ffff]" />}
          title="Token Creator"
          subtitle="Creating token on Base ecosystem Made easy"
          button={"Create Token"}
          link={"https://www.deploy.0xdev.pro/"}
        />
        <Card
          icon={<BsFillCheckSquareFill fontSize={21} className="text-[#ffff]" />}
          title="Airdropper"
          subtitle="Send/ Airdrop your Token to mutiple people in one go"
          button={"Airdrop"}
          link={"https://www.deploy.0xdev.pro/airdropper"}
        />
        <Card
          icon={<BsFillCheckSquareFill fontSize={21} className="text-[#ffff]" />}
          title="$0xDev Staking"
          subtitle="Stake your $0xDev Token and Earning rewards"
          button={"coming soon"}
          link={""}
        />
        <Card
          icon={<BsFillCheckSquareFill fontSize={21} className="text-[#ffffff]" />}
          title="Trading Bot"
          subtitle="Snipe, buy and sell tokens on Base Ecosystem"
          button={"coming soon"}
          link={""}
        />
      </div>
    </div>
  );
};
export default Section5;
