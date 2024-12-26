import logo from "../svg/Logo.svg";
import issues from "../svg/Issues.svg";
import arrowUp from "../svg/ArrowUp.svg";
import subtractLogo from "../svg/SubtractLogo.svg";

import Style from "./LeftSignInContainer.module.css";

function LeftSignInContainer() {
  return (
    <div className={Style.container}>
      <div className={Style.contentContainer}>
        <div className={Style.container1}>
          <div className={Style.logoContainer}>
            <img src={logo} alt="Logo" />
            <p className={Style.logoHeading}>AI to Detect & Autofix Bad Code</p>
          </div>
          <div className={Style.line}></div>
          <div className={Style.statisticsContainer}>
            <div className={Style.statisticsContent}>
              <p className={Style.statisticsCount}>30+</p>
              <p className={Style.statisticsCategory}>Language Support</p>
            </div>
            <div className={Style.statisticsContent}>
              <p className={Style.statisticsCount}>10K+</p>
              <p className={Style.statisticsCategory}>Developers</p>
            </div>
            <div className={Style.statisticsContent}>
              <p className={Style.statisticsCount}>100K+</p>
              <p className={Style.statisticsCategory}>Hours Saved</p>
            </div>
          </div>
        </div>
        <div className={Style.container2}>
          <div className={Style.issuesContainer}>
            <img src={issues} alt="Issues" />
            <div className={Style.weekContainer}>
              <div className={Style.arrowUpContainer}>
                <img src={arrowUp} alt="Arrow Up" />
                <p className={Style.percentage}>14%</p>
              </div>
              <p className={Style.percentageHeading}>This week</p>
            </div>
          </div>
          <div className={Style.issuesStatistics}>
            <p className={Style.issuesStatisticsHeading}>Issues Fixed</p>
            <p className={Style.issuesStatisticsNumber}>500K+</p>
          </div>
        </div>
      </div>
      <div className={Style.subtractImage}>
        <img src={subtractLogo} alt="Logo" />
      </div>
    </div>
  );
}

export default LeftSignInContainer;
