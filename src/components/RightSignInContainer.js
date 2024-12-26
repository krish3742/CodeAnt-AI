import { useState } from "react";

import sso from "../svg/SSO.svg";
import logo from "../svg/Logo.svg";
import gitlab from "../svg/Gitlab.svg";
import github from "../svg/Github.svg";
import bitbucket from "../svg/Bitbucket.svg";
import azureDevops from "../svg/AzureDevops.svg";

import Style from "./RightSignInContainer.module.css";

function RightSignInContainer() {
  const [option, setOption] = useState("SAAS");
  return (
    <>
      <div className={Style.container}>
        <div className={Style.contentContainer}>
          <div className={Style.logoContainer}>
            <img src={logo} alt="Logo" />
            <p className={Style.companyName}>CodeAnt AI</p>
          </div>
          <div>
            <p className={Style.welcomeHeading}>Welcome to CodeAnt AI</p>
          </div>
          <div className={Style.signInOptionsContainer}>
            <div
              className={
                option === "SAAS"
                  ? Style.activeOptionsContainer
                  : Style.nonActiveOptionsContainer
              }
              onClick={() => setOption("SAAS")}
            >
              <p className={Style.option}>SAAS</p>
            </div>
            <div
              className={
                option === "SelfHosted"
                  ? Style.activeOptionsContainer
                  : Style.nonActiveOptionsContainer
              }
              onClick={() => setOption("SelfHosted")}
            >
              <p className={Style.option}>Self Hosted</p>
            </div>
          </div>
        </div>
        <div className={Style.line}></div>
        <div className={Style.optionsBasedContentContainer}>
          {option === "SAAS" ? (
            <>
              <div className={Style.optionsContainer}>
                <img src={github} alt="Github"></img>
                <p className={Style.optionCaption}>Sign in with Github</p>
              </div>
              <div className={Style.optionsContainer}>
                <img src={bitbucket} alt="Bitbucket"></img>
                <p className={Style.optionCaption}>Sign in with Bitbucket</p>
              </div>
              <div className={Style.optionsContainer}>
                <img src={azureDevops} alt="Azure Devops"></img>
                <p className={Style.optionCaption}>Sign in with Azure Devops</p>
              </div>
              <div className={Style.optionsContainer}>
                <img src={gitlab} alt="GitLab"></img>
                <p className={Style.optionCaption}>Sign in with GitLab</p>
              </div>
            </>
          ) : (
            <>
              <div className={Style.optionsContainer}>
                <img src={gitlab} alt="GitLab"></img>
                <p className={Style.optionCaption}>Self Hosted GitLab</p>
              </div>
              <div className={Style.optionsContainer}>
                <img src={sso} alt="SSO"></img>
                <p className={Style.optionCaption}>Sign in with SSO</p>
              </div>
              <div className={Style.optionsContainerHidden}></div>
              <div className={Style.optionsContainerHidden}></div>
            </>
          )}
        </div>
      </div>
      <p className={Style.description}>
        By signing up you agree to the{" "}
        <span className={Style.privacy}>Privacy Policy.</span>
      </p>
    </>
  );
}

export default RightSignInContainer;
