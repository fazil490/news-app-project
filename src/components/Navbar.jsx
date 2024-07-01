import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({handleSideBar}) => {
  return (
    <nav className="bg-navBg text-white sticky top-0 flex justify-between items-center px-2 py-3 xl:px-32">
      <div className="logo flex items-center gap-12">
        <h1 className="text-2xl md:text-3xl font-semibold">NEWS APP</h1>
        <div className="category hidden md:flex">
          <button className="font-semibold
           text-peach">NATION</button>
        </div>
      </div>
      <div onClick={handleSideBar} className="text-2xl md:text-3xl cursor-pointer">
        <RxHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
