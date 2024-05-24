import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import useCustomLocation from "@/hooks/useCustomLocation";
import useUserData from "@/hooks/useUserData";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("about_tab") || "overview",
  );
  const user = useUserData();
  const isProfile = useCustomLocation("app/@me");

  const handleUpdateUser = (field, value) => {
    const updatedUser = { ...user, [field]: value };
    // updateUser(updatedUser);
  };

  useEffect(() => {
    localStorage.setItem("about_tab", activeTab);
    setActiveTab(activeTab);
  }, [activeTab]);

  const [formData, setFormData] = useState({
    bio: user?.bio || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    interests: user?.interests || "",
    job: user?.job || "",
    education: user?.education || "",
    socialLinks: user?.socialLinks || [],
  });

  const handleSubmit = () => {
    updateUser(formData);
  };

  return (
    <div className="about-user-container mb-7">
      <div className=" h-80 grid grid-cols-12 divide-x divide-gray-400 dark:divide-gray-800">
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
            <AboutTabButton
              tab="work"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Work and Education
            </AboutTabButton>
            <AboutTabButton
              tab="social"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Social Links
            </AboutTabButton>
          </div>
        </aside>
        <aside className="col-span-9 p-4 shadow-tiny h-full w-full space-y-2 dark:text-white dark:bg-[#1c232e]">
          {activeTab === "overview" && (
            <div id="overview" className="space-y-3">
              <div className="bio">
                <h3>Bio</h3>
                <small className="text-gray-700 dark:text-gray-300">
                  {user?.bio || "This user has no bio"}
                </small>
              </div>
            </div>
          )}
          {activeTab === "contact" && (
            <div id="contact" className="space-y-3">
              <h3>Contact and Basic Info</h3>
              <div className="email my-4">
                <div className="email my-4">
                  <div className="flex gap-2 items-start dark:text-white">
                    <img
                      className="flex-shrink-0"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/vKPF8R4VXuJ.png?_nc_eui2=AeEAE-499_uzwR7eTHBdZw10Ix5aY0AQgi0jHlpjQBCCLehhHKtEJx0Mj1_2jjlCjaNYIv1xg1COnWBGCqdupf78"
                      height="24"
                      width="24"
                    />
                    <div>
                      <p className="text-sm">{user?.email}</p>
                      <small className="block w-full opacity-80">Email</small>
                    </div>
                  </div>
                </div>
                <div className="phone my-4">
                  <div className="flex gap-2 items-start dark:text-white">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/mxbGn5aKz1f.png?_nc_eui2=AeG2kJFx093klCZTfsPtAfr0wxC4XQNSnoPDELhdA1Keg_XAgZX0N_F9HLiDIqRQGwDEp7wf8SR6UF_eEX9LhYxU"
                      alt=""
                      height="24"
                      width="24"
                    />
                    <div>
                      <p className="text-sm">{user?.phone || "Not added"}</p>
                      <small className="block w-full opacity-80">Phone</small>
                    </div>
                  </div>
                </div>
                <div className="address my-4">
                  <div className="flex gap-2 items-start dark:text-white">
                    <img
                      className="flex-shrink-0"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-E_wEDExySt.png"
                      height="24"
                      width="24"
                    />
                    <div>
                      <p className="text-sm">{user?.address || "Not added"}</p>
                      <small className="opacity-80">Address</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "places" && (
            <div id="places" className="space-y-3">
              <h3>Places Lived</h3>
              <div className="mt-4 text-sm space-y-3 flex flex-col items-start gap-2 text-blue-600">
                <button>
                  <span>+</span>{" "}
                  <span className="hover:underline">Add current location</span>
                </button>
                <button>
                  <span>+</span>{" "}
                  <span className="hover:underline">Add city</span>
                </button>
                <button>
                  <span>+</span>{" "}
                  <span className="hover:underline">Add hometown</span>
                </button>
              </div>
            </div>
          )}
          {activeTab === "work" && (
            <div id="work" className="space-y-3">
              <h3>Work and Education</h3>
              <div className="my-4">
                <div className="text-sm text-gray-500">Coming soon...</div>
              </div>
            </div>
          )}
          {activeTab === "social" && (
            <div id="social" className="space-y-3">
              <h3>Social Links</h3>
              {/* <div className="social-links space-y-2">
                {formData.socialLinks.map((link, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      className="w-full p-2 dark:bg-gray-800 dark:text-white"
                      type="text"
                      value={link.url}
                      onChange={(e) => handleSocialLinkChange(index, e.target.value)}
                    />
                    <button onClick={() => handleRemoveSocialLink(index)}>Remove</button>
                  </div>
                ))}
                <button onClick={handleAddSocialLink}>Add Social Link</button>
              </div> */}
              <div className="my-4">
                <div className="text-sm text-gray-500">Coming soon...</div>
              </div>
            </div>
          )}
          {/* <Button className="mt-4 p-2 bg-blue-500 text-white" onClick={handleSubmit}>
            Save Changes
          </Button> */}
        </aside>
      </div>
    </div>
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
