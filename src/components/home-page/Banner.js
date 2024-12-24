import BannerIcon from "./Skills";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        <div className="text-white min-h-screen flex flex-col justify-center items-start py-16 md:py-36">
            {/* Introductory Text */}
            <p className="text-[#C8C8CF]  font-semibold mb-2 text-xl pt-28">Hello! I&apos;m Vinesh.</p>
        
            {/* Main Title */}
            <h1 className="text-4xl md:text-7xl font-bold leading-snug text-[#ABABB5] ">
                A Research Intern <br />Currently Working on Drone for Tunnel Inspection <br />
                at <span className="text-gray-400">IIT Bombay</span>
            </h1>
        </div>
    </div>
    
  );
};

export default Banner 