import { Link, useNavigate } from "react-router-dom";
export default function NoPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-[#DFC338]">
        <div className="container flex items-center min-h-[calc(100vh-200px)] px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-[#DFC338] rounded-full bg-[#495E57] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-[#495E57] md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-[#495E57]/80">
              {`The page you are looking for doesn't exist. Here are some helpful
              links:`}
            </p>
            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Link
                className="flex items-center text-[#DFC338] justify-center w-1/2 px-5 py-2 text-sm  transition-colors duration-200 bg-[#495E57] rounded-md gap-x-2 sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </Link>
              <Link
                to={"/"}
                className="w-1/2 px-5 py-2 text-sm text-[#DFC338] tracking-wide  transition-colors duration-200 bg-[#495E57] rounded-md shrink-0 sm:w-auto"
              >
                Take me home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
