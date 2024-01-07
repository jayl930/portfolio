"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import useMenuStore from "../store/useMenuStore";
import { sidebarMenuLinks } from "../constants";

const SideMenu = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const { isOpen, closeMobileMenu } = useMenuStore();

  // Separate function for updating the active link
  const updateActiveLink = (sectionId) => {
    const activeLink = sidebarMenuLinks.find(link => link.sectionId === sectionId);
    if (activeLink) {
      setActiveLink(activeLink);
    }
  };

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    closeMobileMenu();
    updateActiveLink(link.sectionId); // Update active link immediately

    const section = document.getElementById(link.sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Debounced scroll handler
  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleScroll = debounce(() => {
    const scrolledPosition = window.scrollY + window.innerHeight / 2;
  
    let isTopSectionActive = true;
  
    for (let i = 0; i < sidebarMenuLinks.length; i++) {
      const sectionId = sidebarMenuLinks[i].sectionId;
      const section = document.getElementById(sectionId);
      if (section && scrolledPosition >= section.offsetTop && scrolledPosition <= section.offsetTop + section.offsetHeight) {
        updateActiveLink(sectionId);
        isTopSectionActive = false;
        break;
      }
    }
  
    if (isTopSectionActive) {
      updateActiveLink(sidebarMenuLinks[0].sectionId);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cleanedPathname = pathname.replace(/^#/, "");

    const matchedLink = sidebarMenuLinks.find(
      (link) =>
        cleanedPathname === link.route ||
        (link.route === "/" && cleanedPathname === "")
    );
    if (matchedLink) {
      setActiveLink(matchedLink);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <section
        className={`side-menu border-r ${
          isOpen ? "max-lg:block" : "max-md:hidden"
        }`}
      >
        <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
          <div className="flex justify-center items-center flex-col gap-2">
            <Image
              src="/assets/sidemenu.png"
              width={100}
              height={100}
              alt="Jay"
            />
            <p className="font-bold text-dark-blue">Jay Lee</p>
          </div>

          <div>
            {sidebarMenuLinks.map((link) => {
              const isActive = activeLink === link;

              return (
                <a
                  href={`${link.route}`}
                  key={link.label}
                  className={`relative flex justify-center items-center rounded-lg p-3 ${
                    isActive ? "bg-dark-red text-white" : ""
                  }`}
                  onClick={(e) => handleLinkClick(link, e)} // Pass the event object
                >
                  <p>{link.label}</p>
                </a>
              );
            })}
          </div>
          <div className="flex items-center flex-col justify-center text-center">
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
              <a href="/" target="_blank" className="social-icon text-white">
                <BsYoutube />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <AiFillLinkedin />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <AiFillGithub />
              </a>
              <a href="/" target="_blank" className="social-icon text-white">
                <FaDev />
              </a>
            </div>
            <p className="max-lg:hidden">
              Copyright © 2023 Jae Young Lee. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideMenu;
