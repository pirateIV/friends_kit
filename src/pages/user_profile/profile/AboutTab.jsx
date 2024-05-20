import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { user } = useSelector(selectCurrentUser);

  return (
    <div className="about-user-container mb-7">
      <div className="h-72 grid grid-cols-12 *:bg-white divide-x divide-gray-400 dark:divide-gray-800">
        <aside className="col-span-3 shadow-tiny h-full w-full dark:bg-[#1c232e] rounded-s-md">
          <h2 className="!text-xl ms-4 mt-4 dark:text-white">About</h2>
          <div className="mt-4">
            <AboutTabButton
              tab="overview"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Overview
            </AboutTabButton>
            <AboutTabButton
              tab="contact"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Contact and basic info
            </AboutTabButton>
            <AboutTabButton
              tab="places"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Places lived
            </AboutTabButton>
          </div>
        </aside>
        <aside className="col-span-9 p-4 shadow-tiny h-full w-full space-y-2 dark:text-white dark:bg-[#1c232e]">
          <h3>Contact Info</h3>
          <div id="overview" className="space-y-3">
            <div className="bio">
              <h3 className="opacity-80">Bio</h3>
              <small>{user.bio || "This user has no bio"}</small>
            </div>

            <div className="email">
              <div className="flex gap-2 items-start dark:text-white">
                <img
                  className="flex-shrink-0"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/vKPF8R4VXuJ.png?_nc_eui2=AeEAE-499_uzwR7eTHBdZw10Ix5aY0AQgi0jHlpjQBCCLehhHKtEJx0Mj1_2jjlCjaNYIv1xg1COnWBGCqdupf78"
                  alt=""
                  height="24"
                  width="24"
                />
                <div>
                  <p>{user.email}</p>
                  <small className="opacity-80">Email</small>
                </div>
              </div>
            </div>
          </div>
          <div id="contact">
            <h3> Contact and basic info</h3>

            <div>
              <Button>Add current location </Button>
              <Button>add city</Button>
              <Button>add hometown</Button>
            </div>
          </div>
          <div id="places">Places lived</div>
        </aside>
      </div>
    </div>
  );
};

const Button = ({ children }) => {
  return (
    <button>
      <i
        data-visualcompletion="css-img"
        style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/KFXedikuxuj.png?_nc_eui2=AeE6KGtGLAE0lgOx0GriFqMexVBbQoa7ge7FUFtChruB7lJ3DUH7IHieOtGWHz5K6mmrjqR47GkLWeLDME-BqyL2"); background-position: 0px -50px; background-size: auto; width: 24px; height: 24px; background-repeat: no-repeat; display: inline-block;'
      ></i>
      {children}
    </button>
  );
};

const AboutTabButton = ({ children, activeTab, setActiveTab, tab }) => {
  const active = "bg-blue-500 text-white";

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <button
      className={`block w-full text-start p-2.5 px-3.5 text-sm dark:text-white ${activeTab === tab && active}`}
      onClick={() => handleTabClick(tab)}
    >
      {children}
    </button>
  );
};

export default AboutTab;
