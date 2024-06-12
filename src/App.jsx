import Header from "./components/Header";
import "./output.css";
import "./custom_css.css";
import HeroSec from "./components/HeroSec";
import Specials from "./components/Specials";
import Slider from "./components/Slider";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import NoPage from "./components/NoPage";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import OrderOnline from "./components/OrderOnline";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [user]);
  return (
    <>
      <AuthContext.Provider value={user}>
        <BrowserRouter>
          <main className="bg-[#495E57]">
            <Header />
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route path="about" element={<AboutHeight />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/sign_up" element={<SignUp />}></Route>
              <Route path="*" element={<NoPage />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/reservation" element={<Reservation />}></Route>
              <Route path="/order_online" element={<OrderOnline />}></Route>
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}
const Home = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-200px)]">
        <HeroSec />
        <Specials />
        <Slider />
        <About />
      </div>
    </>
  );
};
const AboutHeight = () => {
  return (
    <section className="w-full min-h-[calc(100vh-200px)] bg-[#DFC338]">
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
  );
};
