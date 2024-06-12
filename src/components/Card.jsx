import { Button } from "@nextui-org/react";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Card({ imgLink, name, price, desc }) {
  const [isOrdering, setIsOrdering] = useState(false);
  return (
    <>
      <section className="bg-[#495E57] rounded-xl min-h-5 w-full min-[500px]:h-[500px] h-[auto] border-2 border-[#F4CE14]">
        <div>
          <img
            src={imgLink}
            alt="recipe"
            className="w-full object-cover rounded-lg rounded-b-none h-[200px] min-[500px]:h-[240px]"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between mb-3 text-[#DFC338] font-[600] min-[500px]:text-[20px] text-[18px]">
            <div>{name}</div>
            <div>{price}</div>
          </div>
          <div className="mb-8 text-[#DFC338] opacity-90 font-[600] min-[500px]:h-[90px] h-[auto] min-[500px]:text-[16px] text-[15px]">
            {desc}
          </div>
          <Button
            isLoading={isOrdering}
            onPress={() => {
              setIsOrdering(true);
              setTimeout(() => {
                setIsOrdering(false);
              }, 2000);
            }}
            className="order-btn"
          >
            Order a delivery
          </Button>
        </div>
      </section>
    </>
  );
}
