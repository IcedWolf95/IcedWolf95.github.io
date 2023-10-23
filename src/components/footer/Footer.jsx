const Footer = () => {
  return (
    <footer
      className="bg-white 
           shadow dark:bg-slate-950 w-[100vw] relative"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.inet.edu.ar/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="/src/assets/logo-inet inti.png"
              className="h-12 md:h-14 mr-3"
              alt="Flowbite Logo"
            />
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://github.com/AngelLC18/ProyectoMuniNQN"
            className="hover:underline"
          >
            INET EPET 20™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
