import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className=" w-full bg-[#495E57]">
        <div className="max-w-[1230px] mx-auto px-8 py-8">
          <div className="flex flex-wrap gap-[50px]">
            <div
              className="flex-1 h-[200px] w-[113px] shrink-0"
              style={{
                minWidth: "113px",
              }}
            >
              <img
                className="h-[200px] w-[113px]"
                src="https://i.postimg.cc/90ZLMNDF/Image-1.png"
                alt="logo"
              />
            </div>
            <div className="flex-1">
              <ul className="">
                <li className="font-bold text-[#DFC338] text-[20px] mb-2">
                  Navigation
                </li>
                <li className="text-[#DFC338] font-[600] text-[18px] cursor-pointer">
                  Home
                </li>
                <li className="text-[#DFC338] font-[600] text-[18px] cursor-pointer">
                  About
                </li>
                <li className="text-[#DFC338] font-[600] text-[18px] cursor-pointer">
                  Online Menu
                </li>
                <li className="text-[#DFC338] font-[600] text-[18px] cursor-pointer">
                  Reservations
                </li>
                <li className="text-[#DFC338] font-[600] text-[18px] cursor-pointer">
                  Order Online
                </li>
                <li className="text-[#DFC338] font-[600] text-[18px] cursor-pointer">
                  Login
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <li className="font-bold text-[#DFC338] text-[20px] mb-2 cursor-pointer">
                Contact
              </li>
              <li className="font-[600] text-[#DFC338] text-[18px] cursor-pointer">
                2800 Flagler St Miami FL, 00000{" "}
              </li>
              <li className="font-[600] text-[#DFC338] text-[18px] cursor-pointer">
                800 545 0000
              </li>
              <li className="font-[600] text-[#DFC338] text-[18px] cursor-pointer">
                littlelemon@mail.com
              </li>
            </div>
            <div className="flex-1">
              <li className="font-bold text-[#DFC338] text-[20px] mb-2">
                Social Media
              </li>
              <ul className="flex gap-[10px]">
                <li className="font-[600] text-[#DFC338] text-[18px]">
                  <FaFacebook className="h-[24px] hover:scale-150 transition-all w-[24px] cursor-pointer" />
                </li>
                <li className="font-[600] text-[#DFC338] text-[18px]">
                  <RiInstagramFill className="h-[24px] w-[24px] cursor-pointer  hover:scale-150 transition-all" />
                </li>
                <li className="font-[600] text-[#DFC338] text-[18px]">
                  <BsYoutube className="h-[24px] w-[24px] cursor-pointer  hover:scale-150 transition-all" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="footer-copyright">Little Lemon Design and Developed by <a href="http://www.facebook.com/abdullah.al.mridul.dev" target="_blank" rel="noopener noreferrer">@Abdullah</a></p>
      </footer>
    </>
  );
}
