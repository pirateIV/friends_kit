import { useState } from "react";
import useCustomLocation from "@/hooks/useCustomLocation";
import CreatePostModal from "./modals/CreatePostModal";
import { btn2Class, btn2Class2, btnClass, btnClass2 } from ".";

const ProfileMenu = () => {
  const [openModal, setOpenModal] = useState(false);

  const isProfile = useCustomLocation("@me");
  const switchOnCase = (case_one, case_two) =>
    isProfile ? case_one : case_two;

  return (
    <>
      <div className="profile-menu flex items-center justify-end mt-3">
        <div className="flex items-center gap-3 *:min-w-28 *:text-sm *:p-2.5 *:rounded-md *:font-medium">
          <button
            className={switchOnCase(btnClass, btnClass2)}
            onClick={() => switchOnCase(setOpenModal(true), "")}
          >
            {switchOnCase("Create Post", "Send Friend Request")}
          </button>
          <button className={switchOnCase(btn2Class, btn2Class2)}>
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
        </div>
      </div>
      <CreatePostModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default ProfileMenu;
