import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import menu from "../assets/menu.jpg";
import cross from "../assets/menuCross.jpg";
import { useState } from "react";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [fav,setFav] = useState(false)
 
  return (
    <div className="mx-10 mt-2">
      <div className="hidden sm:block">
        <div className=" flex items-center justify-between">
          <Link to={"/"}>
            <div className="flex items-center">
              <img src={logo} className="w-15 " alt="" />
              <p className="italic text-xl">
                <b>Shopify</b>
              </p>
            </div>
          </Link>

          <div className="flex justify-center">
            <ul className="flex gap-10">
              <NavLink to={"/collections"} className={"flex flex-col"}>
                <p>Collections</p>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to={"/about"} className={"flex flex-col"}>
                <p>About</p>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to={"/contact"} className={"flex flex-col"}>
                <p>Contact</p>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to={"/blog"} className={"flex flex-col"}>
                <p>Blog</p>
                <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-xl group relative" onClick={() => setFav(!fav)}>
              <GiSelfLove />
              <div className="group-hover:block hidden absolute dropdown-menu right-0   -mt-1  rounded-2xl  z-50  bg-white/40 text-gray-500  backdrop-blur-md   shadow-2xl text-sm" >
                <p>Favourite</p>
              </div>
            </div>
            <div className="group relative ">
              <img src={user} alt="" className="w-10 rounded-full" />
              <div className="group-hover:block hidden absolute dropdown-menu right-0  w-40  -mt-1  rounded-2xl  z-50  bg-white/20  backdrop-blur-md  border border-black shadow-2xl">
                <p className="hover:bg-gray-200  px-3 py-2 rounded-xl text-sm text-center">
                  Login
                </p>
                <p className="hover:bg-gray-200  px-3 py-2 rounded-xl text-sm text-center">
                  Registration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden block relative">
        <div onClick={() => setSideMenu(!sideMenu)}>
          {sideMenu ? (
            <img src={cross} className="w-10 rounded-full border-2" alt="" />
          ) : (
            <img src={menu} className="w-12 rounded-full border-2" alt="" />
          )}
        </div>
        {/* {sideMenu && ( */}
        <div
          className={`  py-10   mt-5 rounded-4xl absolute w-80 top-14 z-50  bg-white/20  backdrop-blur-md  border border-white/30 shadow-2xl ${
            sideMenu ? "slide-in" : "slide-out"
          }`}
        >
          <div className=" h-72 ">
            <ul className="flex flex-col text-center gap-6">
              <NavLink
                to={"/"}
                className={"nav-link flex flex-col hover:bg-gray-200"}
              >
                <p className="text-xl font-bold p-2 prata-regular ">Home</p>
                <hr className="w-full border-none h-[1px] sm:h-[1.5px] bg-gray-300 sm:bg-gray-700 hidden" />
              </NavLink>
              <NavLink
                to={"/collections"}
                className={"flex flex-col hover:bg-gray-200 nav-link"}
              >
                <p className="text-xl font-medium p-2 prata-regular">
                  Collections
                </p>
                <hr className="w-full border-none h-[1px] sm:h-[1.5px] bg-gray-300 sm:bg-gray-700 hidden" />
              </NavLink>

              <NavLink
                to={"/about"}
                className={"flex flex-col hover:bg-gray-200 nav-link"}
              >
                <p className="text-xl font-medium p-2 prata-regular">About</p>
                <hr className="w-full border-none h-[1px] sm:h-[1.5px] bg-gray-300 sm:bg-gray-700 hidden" />
              </NavLink>
              <NavLink
                to={"/contact"}
                className={"flex flex-col hover:bg-gray-200 nav-link"}
              >
                <p className="text-xl font-medium p-2 prata-regular">Contact</p>
                <hr className="w-full border-none h-[1px] sm:h-[1.5px] bg-gray-300 sm:bg-gray-700 hidden" />
              </NavLink>
              <NavLink
                to={"/blog"}
                className={"flex flex-col hover:bg-gray-200 nav-link"}
              >
                <p className="text-xl font-medium p-2 prata-regular">Blog</p>
                <hr className="w-full border-none h-[1px] sm:h-[1.5px] bg-gray-300 sm:bg-gray-700 hidden" />
              </NavLink>
            </ul>
          </div>
        </div>
        {/* )} */}
      </div>
      <div >
        
        {
          fav ? ( <div className={`w-52 p-8 absolute right-0 min-h-screen z-50 py-10   mt-5 rounded-4xl  top-14 bg-white/20  backdrop-blur-md  border border-white/30 shadow-2xl ${fav ? "slide" : "slide-out"}`} >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
        doloremque doloribus cum laudantium recusandae est aspernatur minus id
        fuga eligendi quae quidem ipsum tempora similique quis, sunt natus
        expedita! Sapiente, placeat. Autem ratione doloribus in dicta numquam
        molestias atque, vero magni illo voluptates amet minima debitis
        voluptatum explicabo cumque officiis.
      </div>) : ""
        }
     </div>
    </div>
  );
};

export default Navbar;
