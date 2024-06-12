import { FaCode } from "react-icons/fa";
const Menu = () => {
  return (
    <>
      <section className="bg-[#DFC338] min-h-[calc(100vh-200px)] flex justify-center items-center">
        <div className="max-w-[1230px] px-8 mx-auto">
          <div className="flex flex-col items-center">
            <FaCode className="h-[100px] w-[100px] text-[#495E57]" />
            <h3 className="mt-8 text-[#495E57] max-[650px]:text-[18px] text-[20px] font-[700]">
              Page is under construction
            </h3>
            <h5 className="mt-5 text-[#495E57] font-[600]">
              {"[_Menu_Page_]"}
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
