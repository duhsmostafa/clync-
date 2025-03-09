"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./SideMenu.css";
import take from "../../assets/take part (1).svg";
import coloredLogo from "../../assets/colordLogo.svg";
import mobileLinks from "../../assets/download (1).svg"

export default function SideMenu({ isMenuOpen, setIsMenuOpen, menuIconId }) {
  const [isCommunityOpen, setCommunityOpen] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);

  useEffect(() => {
    const closeMenuButtons = document.querySelectorAll(".close-menu");
    const sideMenu = document.querySelector(".side-menu");
    const menuIcon = document.querySelector(`#${menuIconId}`);
    const openMenu = () => {
      sideMenu?.classList.add("open");
      sideMenu?.classList.remove("hidden");
    };
    const closeMenu = () => {
      sideMenu?.classList.remove("open");
      sideMenu?.classList.add("hidden");
    };

    // Add event listeners
    menuIcon?.addEventListener("click", openMenu);
    closeMenuButtons.forEach((button) =>
      button.addEventListener("click", closeMenu)
    );
    return () => {
      menuIcon?.removeEventListener("click", openMenu);
      closeMenuButtons.forEach((button) =>
        button.removeEventListener("click", closeMenu)
      );
    };
  }, [menuIconId]);

  const toggleDropdown = (section) => {
    if (section === "community") {
      setCommunityOpen(!isCommunityOpen);
    } else if (section === "blog") {
      setBlogOpen(!isBlogOpen);
    }
    };
  return (
    <aside>
      <div className={`side-menu ${isMenuOpen ? "open" : "hidden"}`}>
        <div className="button-container">
          <div className="menu-content">
            <div className="headeer">
              <Image src={coloredLogo} alt="Monogram" width={70} height={70} />
              <i
                className="bi close-menu bi-x"
                onClick={() => setIsMenuOpen(false)}
              ></i>
            </div>
            <div className="all-side-menu">
              <div className="left-content">
                <h2 data-translate="menu_snoop" className="text-capitalize">
                  OH, LOOK WHOS <br /> CURIOUS! GO <br /> AHEAD, SNOOP <br /> AROUND.
                </h2>
                <div className="end-menu">
                  <div className="take-part d-flex justify-content-between align-items-center">
                    <Image src={take} alt="Take Part" width={400} height={87} />
                    <Image src={mobileLinks} alt="download" width={350} height={60.72} />
                    
                  </div>
                </div>
              </div>
              <div className="vertical-line"></div>
              <div className="right-content">
                <h1 className="menu">Menu</h1>
                <div className="small-devices-footer-links">
                  <div className="left-sec">
                    <h4
                      data-translate="community_title"
                      onClick={() => toggleDropdown("community")}
                      style={{ cursor: "pointer", marginBottom: "rem" }} 
                      className="blog-title"
                    >
                      Community
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="#00E13F"
                          strokeWidth="5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </h4>
                    <div
                      id="community-links"
                      className={`dropdown-links ${isCommunityOpen ? "open" : ""}`}
                    >
                      <p className="help-text" data-translate="meet_team">
                        Meet the team
                      </p>
                      <p className="help-text" data-translate="careers">
                        Careers
                      </p>
                      <p className="help-text" data-translate="Partnership">
                        Partnership
                      </p>
                      <p className="help-text" data-translate="Clync-Club">
                        Clync Club
                      </p>
                    </div>
                  </div>
                  <div className="mid-sec">
                    <h4
                      data-translate="blog"
                      onClick={() => toggleDropdown("blog")}
                      style={{ cursor: "pointer" }}
                      className="blog-title"
                    >
                      Blog
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"                    >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="#00E13F"
                          strokeWidth="5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </h4>
                    <div
                      id="blog-links"
                      className={`dropdown-links ${isBlogOpen ? "open" : ""}`}
                    >
                      <p data-translate="Clync-News" className="security-text">
                        Clync News
                      </p>
                      <p data-translate="Media-Kit" className="security-text">
                        Media Kit
                      </p>
                    </div>
                  </div>
                  <div className="end-right-content">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}