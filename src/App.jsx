import "./App.css";
import Footer from "./components/footer/Footer";
import NavbarV2 from "./components/navbar/Nav-barV2";
import Main from "./components/main/Main";
import Accesibility_tools from "./components/Accessibility_tools";
const App = () => {
  function getScrollY() {
    return window.scrollY || window.pageYOffset;
  }

  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".to-top");
    if (getScrollY() > 0) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });

  return (
    <div className="dark:text-gray-100 bg-[#0e68af] dark:bg-slate-900 w-full min-h-[100vh]  flex flex-wrap flex-row">
      <NavbarV2 />
      <Main />
      <Footer />
      <a href="#" className="to-top">
        <i className="fa-solid fa-chevron-up"></i>
      </a>
      <Accesibility_tools />
    </div>
  );
};

export default App;
