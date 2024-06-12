import { Button } from "@nextui-org/react";
import Card from "./Card";
export default function Specials() {
  const cardData = [
    {
      imgLink: "https://i.postimg.cc/3N9Xh2RL/2024-05-11-13-19-1.webp",
      name: "Greek Salad",
      price: "$12.99",
      desc: "The famous greek salad of crispy lettuce, peppers, olives...",
    },
    {
      imgLink:
        "https://i.postimg.cc/4xc177F3/brushetta-e7b633d6806554423c63.png",
      name: "Bruchetta",
      price: "$5.99",
      desc: "Our Bruschetta is made from grilled bread that has been...",
    },
    {
      imgLink: "https://i.postimg.cc/VLxq8sLP/download.jpg",
      name: "Lemmon Desert",
      price: "$5.00",
      desc: "This comes straight from grandma’s recipe book, every last...",
    },
  ];
  return (
    <>
      <section className="bg-[#dfc338] w-full">
        <div className="max-w-[1230px] mx-auto px-8 py-12">
          <div className="flex mb-7 justify-between items-center">
            <h2 className="min-[900px]:text-[64px] text-[#495E57] min-[500px]:text-[40px] markazi text-[38px] font-[700]">
              {"This week’s specials!"}
            </h2>
            <Button className="online-menu-btn max-[600px]:hidden">
              Online Menu
            </Button>
          </div>
          <div className="flex justify-between gap-8 flex-wrap">
            <div className="flex-1">
              <Card
                imgLink={cardData[0].imgLink}
                name={cardData[0].name}
                price={cardData[0].price}
                desc={cardData[0].desc}
              />
            </div>
            <div className="flex-1">
              <Card
                imgLink={cardData[1].imgLink}
                name={cardData[1].name}
                price={cardData[1].price}
                desc={cardData[1].desc}
              />
            </div>
            <div className="flex-1">
              <Card
                imgLink={cardData[2].imgLink}
                name={cardData[2].name}
                price={cardData[2].price}
                desc={cardData[2].desc}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
