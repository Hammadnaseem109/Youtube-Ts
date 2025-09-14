import home from "../../assets/home.png";
import pro from "../../assets/pro.svg";
import sub from "../../assets/sub.svg";

type MenuProps = {
  isOpen: boolean;
};

function Menu({ isOpen }: MenuProps) {
  return (
    <div
      className={` flex flex-col z-10000 fixed bg-white left-0 
        ${
          isOpen
            ? "lg:w-[240px] md:w-[240px] sm:w-[240px] w-[240px] lg:h-[100vh] md:h-[100vh] sm:h-[100vh] h-[100vh]"
            : "lg:w-[78px] md:w-[78px] sm:w-[0] w-[0] lg:h-[100vh] md:h-[100vh] sm:h-[0] h-[0] overflow-hidden"
        }
             `}
    >
      <div
        className={`flex  mt-5 ${
          isOpen
            ? "flex-row ml-4  gap-5 w-[100%]"
            : "flex-col justify-center items-center w-[100%] "
        }`}
      >
        <img src={home} alt="Home" className="w-6 h-6" />
        <p className={`${isOpen ? "text-[16px]" : "text-[10px]"}`}>Home</p>
      </div>
      <div
        className={`flex  mt-5 ${
          isOpen
            ? "flex-row ml-4  gap-5 w-[100%]"
            : "flex-col justify-center items-center w-[100%] "
        }`}
      >
        <img src={sub} alt="Home" className="w-6 h-6" />
        <p className={`${isOpen ? "text-[16px]" : "text-[10px]"}`}>
          Subscriptions
        </p>
      </div>
      <div
        className={`flex  mt-5 ${
          isOpen
            ? "flex-row ml-4  gap-5 w-[100%]"
            : "flex-col justify-center items-center w-[100%] "
        }`}
      >
        <img src={pro} alt="Home" className="w-6 h-6" />
        <p className={`${isOpen ? "text-[16px]" : "text-[10px]"}`}>Profile</p>
      </div>
    </div>
  );
}

export default Menu;
