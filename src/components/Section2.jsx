import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { GiMonkey } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Card = ({ icon, title, subtitle }) => (
  <div className="flex flex-col max-w-xs min-h-[15.625rem] justify-start p-4 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div className="w-14 h-14 rounded-md flex items-center justify-center bg-[#28282B] border-[0.5px] border-[#424242]">
      {icon}
    </div>
    <div className="flex flex-col flex-1">
      <h1 className="mt-2 text-white text-2xl font-medium">{title}</h1>
      <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p>
    </div>
  </div>
);

const Section2 = () => {
  return (
    <div className="w-full novasquare my-[20px] ">
      <h1 className="font-bold text-center sm:text-center sm:text-6xl text-3xl">
        RoadMap
      </h1>
      <div className="flex flex-wrap w-screen my-[20px] gap-[26px] novasquare justify-center items-center">
        <Card
          icon={<FaGift fontSize={21} className="text-[#ffff]" />}
          title="Platform Enhancement and Optimization"
          subtitle=" Implement performance enhancements to ensure the platform operates seamlessly, even during periods of high traffic and activity."
        />
        <Card
          icon={<MdGroups3 fontSize={21} className="text-[#ffff]" />}
          title="Community Engagement and Support"
          subtitle=" Proactively engage with the developer community to gather feedback, address concerns, and incorporate suggestions for platform improvements. "
        />
        <Card
          icon={<FaGlobeAmericas fontSize={21} className="text-[#ffffff]" />}
          title="Ecosystem Expansion on Top Chains"
          subtitle="Forge strategic partnerships with other platforms and projects within the decentralized finance (DeFi) ecosystem to expand the reach and capabilities of 0xdeveloper."
        />
      </div>
    </div>
  );
};
export default Section2;
