import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HeroSec() {
  const [isReserving, setIsReserving] = useState(false);
  const navigation = useNavigate();
  return (
    <section className="w-full min-h-5 bg-[#495E57]">
      <div className="max-w-[1230px] px-8 relative mx-auto py-8 pb-12 flex justify-between">
        <div className="">
          <h1 className="text-[#DFC338]  markazi mb-0 font-bold text-[65px] leading-[50px]">
            Little Lemon
          </h1>
          <p className="text-[32px] text-[#DFC338] font-semibold markazi mb-6 w-full">
            Chicago
          </p>
          <p className="text-[#DFC338] font-[700] text-[18px] w-full  md:w-[400px] mb-10">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button
            className="table-reserve-btn"
            onPress={() => {
              setIsReserving((prev) => !prev);
              setTimeout(() => {
                navigation("/reservation");
                setIsReserving((prev) => !prev);
              }, 2000);
            }}
            isLoading={isReserving}
          >
            Reserve a Table
          </Button>
        </div>
        <div className="">
          <img
            src="https://i.postimg.cc/vmk1ycXr/2024-05-11-13-19.webp"
            alt="recipe"
            className="h-[380px] max-[850px]:hidden w-[320px] rounded-lg absolute object-cover"
            style={{
              right: "32px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
