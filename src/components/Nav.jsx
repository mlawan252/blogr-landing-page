import Logo from "./Logo";

/* eslint-disable react/react-in-jsx-scope */
function Nav() {
  return (
    <nav className="flex justify-between items-center p-12">
      <div className="flex space-x-4 items-center text-stone-100">
        <Logo />
        <ul className="sm:flex space-x-2 hidden">
          <li className=" flex items-center space-x-1">
            <span>Product</span> <img src="/public/icon-arrow-light.svg" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Company</span> <img src="/public/icon-arrow-light.svg" />
          </li>
          <li className="flex items-center space-x-1">
            <span>Connect</span> <img src="/public/icon-arrow-light.svg" />
          </li>
        </ul>
      </div>
      <img src="/public/icon-hamburger.svg" className="block sm:hidden" />
      <ul className=" space-x-8 text-stone-100 text-sm hidden sm:block ">
        <a href="#" className="font-semibold">
          Login
        </a>
        <a
          href="#"
          className="bg-white px-6 py-2 rounded-2xl text-red-400 font-semibold"
        >
          Sign Up
        </a>
      </ul>
    </nav>
  );
}
export default Nav;
