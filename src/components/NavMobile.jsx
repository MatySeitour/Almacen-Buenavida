import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faX, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRef, useEffect } from "react";
import { useNav } from "@/context/NavContext";

export default function NavMobile({
  navMobileState,
  setNavMobileState,
  categories,
  subNavState,
  setSubNavState,
}) {
  const navItemContainer = useRef(null);
  const subCategoryContainer = useRef(null);
  const { navItemsState, setNavItemsState } = useNav();

  useEffect(() => {
    if (navItemsState[2].active == true) {
      let la = navItemContainer.current?.scrollHeight.toString() + "px";
      navItemContainer.current.style.height = la;
    } else {
      navItemContainer.current.style.height = "0";
    }
  }, [navItemsState, subNavState]);

  useEffect(() => {
    if (subCategoryContainer.current != null) {
      if (subNavState != 0) {
        let la = subCategoryContainer.current?.scrollHeight.toString() + "px";
        subCategoryContainer.current.style.height = la;
      } else {
        console.log("entra ca");
        subCategoryContainer.current.style.height = "0";
      }
    }
  }, [subNavState]);

  const handleCategoriesActive = (id) => {
    const activeCategoryItem = navItemsState.map((item) => {
      if (item.id == 3) {
        if (item.active == false) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
      return item;
    });
    setNavItemsState(activeCategoryItem);
  };

  return (
    <div
      className={
        navMobileState
          ? "fixed w-full h-full top-0 left-0 right-0 z-[200] bg-[#000a]"
          : ""
      }
    >
      <div
        className={
          navMobileState
            ? "pb-0 fixed w-[80%] h-full flex flex-col justify-between translate-x-0 transition-all bg-white top-0 left-0 z-[10000] overflow-y-scroll"
            : "fixed w-[80%] h-full -translate-x-[100%] transition-all top-0 left-0 z-[10000] overflow-y-scroll invisible"
        }
      >
        <FontAwesomeIcon
          icon={faX}
          onClick={() => setNavMobileState((state) => !state)}
          className="w-[24px] h-[24px] right-3 top-3 text-green-500 absolute z-[2000]"
        />
        <div className="w-full h-auto relative pt-14 mb-4">
          <ul className="w-full h-full flex flex-col">
            {navItemsState.map(({ id, navItem, active, icon, link }) => (
              <li
                className="py-3 px-2 text-green-500 flex flex-col w-full justify-between items-start relative border-b border-gray-200"
                key={id}
              >
                <div
                  className={
                    navMobileState
                      ? `w-full h-auto flex flex-row justify-between items-center pr-2 navItemClass-${id}`
                      : ``
                  }
                >
                  <FontAwesomeIcon icon={icon} className="w-[20px] h-[20px]" />
                  {id != 3 ? (
                    <Link
                      href={`${link}`}
                      onClick={() => {
                        if (id == 3) {
                          handleCategoriesActive(id);
                          setNavMobileState(true);
                        } else {
                          setNavMobileState(false);
                        }
                      }}
                      className={
                        navMobileState
                          ? `text-lg tracking-wide font-normal w-full pl-2`
                          : ``
                      }
                    >
                      {navItem}
                    </Link>
                  ) : (
                    <p
                      onClick={() => {
                        if (id == 3) {
                          handleCategoriesActive(id);
                          setNavMobileState(true);
                        } else {
                          setNavMobileState(false);
                        }
                      }}
                      className={
                        navMobileState
                          ? `text-lg tracking-wide font-normal w-full pl-2`
                          : ``
                      }
                    >
                      {navItem}
                    </p>
                  )}

                  {id == 3 && (
                    <FontAwesomeIcon
                      className={`${
                        navMobileState && `navArrowItemClass-${id}`
                      } transition-all w-[20px] h-[20px] ${
                        active && `rotate-[180deg] transition-all`
                      }`}
                      icon={faChevronDown}
                    />
                  )}
                </div>
                {id == 3 && (
                  <ul
                    ref={navItemContainer}
                    className={
                      active
                        ? `w-full flex flex-col items-center transition-[height] duration-150 justify-start`
                        : `overflow-hidden transition-[height] w-full duration-150 flex flex-col items-center`
                    }
                  >
                    {categories.map((category) => (
                      <li
                        className="pt-3 pl-4 pr-2 text-green-500 flex flex-col w-full justify-between items-center font-medium relative"
                        key={category.id}
                      >
                        <div className="w-full flex flex-row pr-1">
                          <Link
                            href={`/productos/${category.slug}`}
                            onClick={() =>
                              setSubNavState((prev) => {
                                if (prev === category.id) {
                                  setNavMobileState(false);
                                  return 0;
                                } else {
                                  setNavMobileState(false);
                                  return category.id;
                                }
                              })
                            }
                            className={`${
                              active && `w-full navItemClass-${id}`
                            }`}
                          >
                            {category.name}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start pl-2 pb-2">
          <div className="mb-2 flex flex-row items-center">
            <FontAwesomeIcon
              className="w-[30px] h-[30px] text-green-500 mr-1"
              icon={faWhatsapp}
            />
            <Link
              className="text-green-700 font-medium"
              target="_blank"
              href={`https://www.instagram.com/almacen_buenavida/`}
            >
              1100000000
            </Link>
          </div>
          <div className="mb-2 flex flex-row items-center">
            <FontAwesomeIcon
              className="w-[30px] h-[30px] text-green-500 mr-1"
              icon={faInstagram}
            />
            <Link
              className="text-green-700 font-medium"
              target="_blank"
              href={`https://www.instagram.com/almacen_buenavida/`}
            >
              @almacen_buenavida
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
