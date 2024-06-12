export default function About() {
  return (
    <>
      <section className="w-full bg-[#dfc338]">
        <div className="max-w-[1230px] px-8 mx-auto py-8">
          <div>
            <div className="flex gap-0 max-[650px]:gap-[50px] max-[650px]:flex-col flex-row items-center justify-between">
              <div className="flex-1">
                <h2 className="markazi text-[#495E57] max-[700px]:text-[48px] text-[64px] leading-[70px] font-bold">
                  Little Lemon
                </h2>
                <p className="markazi  text-[#495E57] text-[32px] max-[700px]:text-[30px] font-[600] mb-[20px]">
                  Chicago
                </p>
                <p className="pr-[50px] text-[#495E57] max-[650px]:pr-[20px] font-[500] text-[18px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div className="flex-1">
                <div
                  className="flex justify-end mr-[100px] max-[1100px]:mr-0 max-[650px]:ml-[50px] max-[650px]:h-[170px]"
                  style={{
                    marginBottom: "-50px",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/fbJBKzC3/mariana.png"
                    alt="image1"
                  />
                </div>
                <div className="flex max-[650px]:h-[170px] justify-start ml-[100px] max-[1100px]:ml-0 max-[650px]:mr-[50px]">
                  <img
                    style={{
                      marginTop: "-50px",
                    }}
                    src="https://i.postimg.cc/fyKcsp5n/mariana2.png"
                    alt="image2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
