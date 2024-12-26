import LeftSignInContainer from "../components/LeftSignInContainer";
import RightSignInContainer from "../components/RightSignInContainer";

import Style from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={Style.container}>
      <div className={Style.leftContainer}>
        <LeftSignInContainer />
      </div>
      <div className={Style.line}></div>
      <div className={Style.rightContainer}>
        <RightSignInContainer />
      </div>
    </div>
  );
}

export default SignIn;
