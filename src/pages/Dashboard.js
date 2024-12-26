import axios from "axios";
import { useState, useEffect } from "react";

import Loader from "../components/Loader";

import logo from "../svg/Logo.svg";
import bars from "../svg/Bars.svg";
import home from "../svg/Home.svg";
import book from "../svg/Book.svg";
import code from "../svg/Code.svg";
import gear from "../svg/Gear.svg";
import phone from "../svg/Phone.svg";
import cloud from "../svg/Cloud.svg";
import search from "../svg/Search.svg";
import refresh from "../svg/Refresh.svg";
import signOut from "../svg/SignOut.svg";
import database from "../svg/Database.svg";

import Style from "./Dashboard.module.css";

function Dashboard() {
  const [loader, setLoader] = useState(true);
  const [repoDetails, setRepoDetails] = useState();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [refreshState, setRefreshState] = useState(false);
  const fetchRepoDetail = () => {
    axios
      .get("https://api.github.com/users/krish3742/repos")
      .then((response) => {
        setRepoDetails(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };
  useEffect(() => {
    fetchRepoDetail();
    setLoader(true);
  }, [refreshState]);
  if (loader) {
    return <Loader />;
  }
  return (
    <div className={Style.dashboardContainer}>
      <div className={Style.navbarHiddenContainer}></div>
      <div className={Style.navbarContainer}>
        <div className={Style.logoAndIconContainer}>
          <div className={Style.logoContainer}>
            <img src={logo} alt="Logo" />
            <p className={Style.companyName}>CodeAnt AI</p>
          </div>
          <div
            className={Style.mobileMenuIcon}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <img src={bars} alt="Bars"></img>
          </div>
        </div>
        <div>
          <select className={Style.userContainer}>
            <option>Kshitij Agrawal</option>
          </select>
        </div>
        <div className={Style.menuOptions}>
          <div className={Style.menuContainer}>
            <div className={Style.activeMenu}>
              <img src={home} alt="Home"></img>
              <p className={Style.menuCaption}>Repositories</p>
            </div>
            <div className={Style.nonActiveMenu}>
              <img src={code} alt="Code"></img>
              <p className={Style.menuCaption}>AI Code Review</p>
            </div>
            <div className={Style.nonActiveMenu}>
              <img src={cloud} alt="Cloud"></img>
              <p className={Style.menuCaption}>Cloud Security</p>
            </div>
            <div className={Style.nonActiveMenu}>
              <img src={book} alt="Book"></img>
              <p className={Style.menuCaption}>How to Use</p>
            </div>
            <div className={Style.nonActiveMenu}>
              <img src={gear} alt="Gear"></img>
              <p className={Style.menuCaption}>Settings</p>
            </div>
          </div>
          <div className={Style.menuContainer}>
            <div className={Style.nonActiveMenu}>
              <img src={phone} alt="Phone"></img>
              <p className={Style.menuCaption}>Support</p>
            </div>
            <div className={Style.nonActiveMenu}>
              <img src={signOut} alt="SignOut"></img>
              <p className={Style.menuCaption}>Logout</p>
            </div>
          </div>
        </div>
        {mobileMenu && (
          <div className={Style.mobileMenu}>
            <div className={Style.menuContainerMobile}>
              <div>
                <select className={Style.userContainerMobile}>
                  <option>Kshitij Agrawal</option>
                </select>
              </div>
              <div className={Style.activeMenu}>
                <img src={home} alt="Home"></img>
                <p className={Style.menuCaption}>Repositories</p>
              </div>
              <div className={Style.nonActiveMenu}>
                <img src={code} alt="Code"></img>
                <p className={Style.menuCaption}>AI Code Review</p>
              </div>
              <div className={Style.nonActiveMenu}>
                <img src={cloud} alt="Cloud"></img>
                <p className={Style.menuCaption}>Cloud Security</p>
              </div>
              <div className={Style.nonActiveMenu}>
                <img src={book} alt="Book"></img>
                <p className={Style.menuCaption}>How to Use</p>
              </div>
              <div className={Style.nonActiveMenu}>
                <img src={gear} alt="Gear"></img>
                <p className={Style.menuCaption}>Settings</p>
              </div>
              <div className={Style.nonActiveMenu}>
                <img src={phone} alt="Phone"></img>
                <p className={Style.menuCaption}>Support</p>
              </div>
              <div className={Style.nonActiveMenu}>
                <img src={signOut} alt="SignOut"></img>
                <p className={Style.menuCaption}>Logout</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={Style.repositoriesOuterContainer}>
        <div className={Style.repositoriesInnerContainer}>
          <div className={Style.repositoriesContainer}>
            <div className={Style.repositoriesAndButtonContainer}>
              <div className={Style.repositoriesHeadingContainer}>
                <p className={Style.repositoriesHeading}>Repositories</p>
                <p className={Style.repositoriesLength}>
                  {repoDetails.length} total repositories
                </p>
              </div>
              <div className={Style.buttonContainer}>
                <button
                  className={Style.refreshButton}
                  onClick={() => setRefreshState(!refreshState)}
                >
                  <img src={refresh} alt="Refresh"></img>
                  Refresh All
                </button>
                <button className={Style.addRepoButton}>
                  <span className={Style.addSymbol}>+</span> Add Repositories
                </button>
              </div>
            </div>
            <div className={Style.searchContainer}>
              <img src={search} alt="Search" />
              <input
                className={Style.input}
                placeholder="Search Repositories"
              />
            </div>
          </div>
          <div className={Style.line}></div>
          {!!repoDetails &&
            repoDetails.map((repo, index) => {
              const repoDate = new Date(repo.updated_at);
              const todayDate = new Date();
              let update = "";
              if (todayDate.getFullYear() === repoDate.getFullYear()) {
                if (todayDate.getMonth() === repoDate.getMonth()) {
                  if (todayDate.getDate() === repoDate.getDay()) {
                    update = "0 day";
                  } else {
                    const value = todayDate.getDate() - repoDate.getDate();
                    update = value + `${value === 1 ? " day" : " days"}`;
                  }
                } else {
                  const value = todayDate.getMonth() - repoDate.getMonth();
                  update = value + `${value === 1 ? " month" : " months"}`;
                }
              } else {
                const value = todayDate.getFullYear() - repoDate.getFullYear();
                update = value + `${value === 1 ? " year" : " years"}`;
              }
              return (
                <div key={index}>
                  <div
                    className={
                      repoDetails.length - 1 !== index
                        ? Style.repoDetailsContainer
                        : Style.repoDetailsContainerLastChild
                    }
                  >
                    <div className={Style.repoHeadingContainer}>
                      <p className={Style.repoName}>{repo.name}</p>
                      <div className={Style.repoVisibility}>
                        {repo.visibility}
                      </div>
                    </div>
                    <div className={Style.repoStatsContainer}>
                      <div className={Style.repoStats}>
                        <p className={Style.repoStatsCaption}>
                          {repo.watchers_count} Watcher
                        </p>
                        <div className={Style.repoCircle}></div>
                      </div>
                      <div className={Style.repoStats}>
                        <img src={database} alt="Database"></img>
                        <p className={Style.repoStatsCaption}>{repo.size} KB</p>
                      </div>
                      <div className={Style.repoStats}>
                        <p className={Style.repoStatsCaption}>
                          Updated {update} ago
                        </p>
                      </div>
                    </div>
                  </div>
                  {repoDetails.length - 1 !== index ? (
                    <div className={Style.line}></div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
