import { logo } from "../assets";

const Section1 = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-screen my-10 sm:px-32 px-5 novasquare"
        id=""
      >
        <div className="w-full white-glassmorphis">
          <div className="p-5 sec1 w-full h-full flex rounded-[16px] flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-white font-extralight text-justify sm:text-center max-w-[1000px] mb-10">
                Our core features empower users, including businesses,
                communities, organizations, and companies, to manage their
                tokens directly through our platform. Users can import tokens
                and customize them according to their preferences.
              </p>
              {/* <div className="">
                <img src={logo} alt="logo" width={500} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/5JRf0TwraEE?si=p419izYwBrNno_Gx&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/UwsrzCVZAb8?si=o_6IZq_irXigA7yY&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
    </>
  );
};
export default Section1;
