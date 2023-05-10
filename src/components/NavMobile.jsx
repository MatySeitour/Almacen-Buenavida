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
            ? "pb-4 fixed w-[80%] h-full flex flex-col justify-between translate-x-0 transition-all bg-white top-0 left-0 z-[10000] overflow-y-scroll"
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
            {navItemsState.map(({ id, navItem, active, icon }) => (
              <li
                className="py-3 px-2 text-green-500 flex flex-col w-full justify-between items-start relative border-b border-gray-200"
                key={id}
              >
                <div className="w-full h-auto flex flex-row justify-between items-center pr-2">
                  <FontAwesomeIcon icon={icon} className="w-[20px] h-[20px]" />
                  <p
                    onClick={() => id == 3 && handleCategoriesActive(id)}
                    className={
                      navMobileState
                        ? `text-lg tracking-wide font-normal w-full pl-2`
                        : ``
                    }
                  >
                    {navItem}
                  </p>
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
                          <p
                            onClick={() =>
                              setSubNavState((prev) => {
                                if (prev === category.id) {
                                  return 0;
                                } else {
                                  return category.id;
                                }
                              })
                            }
                            className={`${
                              active && `w-full navItemClass-${id}`
                            }`}
                          >
                            {category.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* <ul className="w-full h-full flex flex-col">
            {categories.map((category) => (
              <li
                className={
                  category.subLevels && subNavState === category.id
                    ? "pt-3 text-green-500 flex flex-col w-full justify-between items-start relative "
                    : "py-3 text-green-500 flex flex-col w-full justify-between items-start relative border-b border-gray-200"
                }
                key={category.id}
              >
                <div className="w-full h-auto flex flex-row justify-between pr-2">
                  <p
                    onClick={() =>
                      setSubNavState((prev) => {
                        if (prev === category.id) {
                          return 0;
                        } else {
                          return category.id;
                        }
                      })
                    }
                    className={
                      navMobileState
                        ? `text-lg tracking-wide font-semibold w-full pl-2 navItemClass-${category.id}`
                        : ``
                    }
                  >
                    {category.slug.toUpperCase()}
                  </p>
                  {category.subLevels ? (
                    <>
                      <FontAwesomeIcon
                        className={`${
                          navMobileState && `navArrowItemClass-${category.id}`
                        } transition-all w-[20px] h-[20px] ${
                          category.subLevels &&
                          subNavState === category.id &&
                          `rotate-[180deg]`
                        }`}
                        icon={faChevronDown}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  ref={navItemContainer}
                  className={
                    category.subLevels && subNavState === category.id
                      ? "w-full h-auto transition-[height]"
                      : "overflow-hidden transition-[height]"
                  }
                >
                  {category.subLevels && subNavState === category.id ? (
                    <div className="w-full h-full flex flex-col pt-2 transition-all pl-2">
                      <div className="p-2 text-green-600 flex flex-col w-full justify-center items-center relative">
                        <Link
                          href={`/productos/${category.slug}`}
                          onClick={() => setNavMobileState((state) => !state)}
                          className="text-lg tracking-wide font-semibold w-full text-left"
                        >
                          Ver todo en {category.slug}
                        </Link>
                      </div>
                      {category.subLevels.map((itemSub) => (
                        <div
                          key={itemSub.id}
                          className="p-2 text-green-500 flex flex-col w-full justify-center items-center relative"
                        >
                          <p
                            className="text-base tracking-wide font-semibold w-full text-left"
                            key={itemSub.id}
                          >
                            {itemSub.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-[0px] transition-all pl-2"></div>
                  )}
                </div>
              </li>
            ))}
          </ul> */}
        </div>
        <div className="w-full h-auto flex justify-end items-center">
          <FontAwesomeIcon
            className="w-[30px] h-[30px] text-green-500"
            icon={faWhatsapp}
          />
          <FontAwesomeIcon
            className="w-[30px] h-[30px] mr-2 ml-2 text-green-500"
            icon={faInstagram}
          />
        </div>
      </div>
    </div>
  );
}
