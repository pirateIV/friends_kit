import Steps from "./Steps";
import { progressDetails } from "./icons";
import ProgressBar from "./ProgressBar";

import "./CustomSignupProgress.css";

const CustomSignupProgress = () => {
  return (
    <>
      <ProgressBar>
        <Steps steps={progressDetails} />
      </ProgressBar>
    </>
  );
};

export default CustomSignupProgress;
