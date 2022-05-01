import { useTranslation } from "next-i18next";
import Link from "next/link";

function NavBarLangDropDown() {
  const { t } = useTranslation("navbar");

  return (
    <>
      <div className="p-10">
        <div className="dropdown inline-block relative transition-all duration-500 ">
          <button className="bg-gray-300/0 text-white border-white border-2 font-semibold py-2 px-4 rounded inline-flex justify-center items-center w-32">
            <span className="mr-1">{t("language-dropdown")}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden  text-gray-700 pt-1 transition-all duration-500">
            <li className="">
              <Link passHref href="/" locale="en">
                <button className="rounded-t bg-black/90 hover:bg-white hover:text-black text-white border-white border-2 py-2 px-4 w-32 flex justify-center transition-all duration-500 ">
                  {" "}
                  English
                </button>
              </Link>
            </li>
            <li className="">
              <Link passHref href="/" locale="de">
                <button className="rounded-b bg-black/90 hover:bg-white hover:text-black text-white border-white border-2 border-t-0 py-2 px-4 w-32 flex justify-center transition-all duration-500 ">
                  Deutsch
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarLangDropDown;
