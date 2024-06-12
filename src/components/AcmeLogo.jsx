import Logo from "../assets/logo.png";
export const AcmeLogo = () => (
  <img
    src={Logo}
    alt="logo"
    style={{
      height: "45px",
    }}
    className="max-[950px]:hidden max-[650px]:block"
  />
);
