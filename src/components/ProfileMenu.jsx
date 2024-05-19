import { Link } from "react-router-dom";
import useCustomLocation from "@/hooks/useCustomLocation";

const ProfileMenu = () => {
  const isProfile = useCustomLocation("app/@me");

  const btnClass =
    "text-white bg-blue-700 border-t border-blue-500 dark:border-blue-400 hover:bg-blue-600";
  const btnClass2 =
    "text-white bg-green-700 border-t border-green-500 dark:border-green-400 hover:bg-green-600";

  const btn2Class =
    "flex items-center justify-center bg-gray-400 gap-2  border-t border-gray-400 dark:border-gray-100 hover:bg-gray-400/70";

  const btn2Class2 =
    "flex items-center  text-white justify-center bg-blue-600 gap-2  border-t dark:border-blue-400 hover:bg-blue-500";

  return (
    <div className="profile-menu flex items-center justify-end mt-3">
      <div className="flex items-center gap-3 *:min-w-28 *:text-sm *:p-2.5 *:rounded-md *:font-medium">
        <button className={isProfile ? btnClass : btnClass2}>
          {isProfile ? " Create Post" : "Send Friend Request"}
        </button>
        <button className={isProfile ? btn2Class : btn2Class2}>
          {isProfile && (
            <img
              className="x1b0d499 xep6ejk"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png?_nc_eui2=AeGz4njojBTDyD2_Ab65igYy_i5mCW1n3JD-LmYJbWfckK3h4P9cwNlF1P30IrgEvXkeossGcCcQGC7EdJgPMeHg"
              alt=""
              height="16"
              width="16"
            />
          )}
          {isProfile ? " Edit profile" : "Message"}
        </button>

        {/* <button className="flex items-center bg-gray-400 !w-auto hover:bg-gray-400/70">
          <i data-visualcompletion="css-img" className="x1b0d499 xep6ejk" style={{ backgroundImage: `url("&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PKMikE4Bap6.png?_nc_eui2=AeFuHIgwr517AZehVQdxyhk6YLXLAxd1BsBgtcsDF3UGwL3Vc7Szz2_8q5qDUtBrgop6Ezu-tpLMi6RVhLP7os73&quot")`, backgroundPosition: "0px -437px; background-size: auto; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block" }}></i>
        </button> */}
      </div>
    </div>
  );
};

export default ProfileMenu;
