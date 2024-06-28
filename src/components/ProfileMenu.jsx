import { useEffect, useState } from "react";
import useCustomLocation from "@/hooks/useCustomLocation";
import CreatePostModal from "./modals/CreatePostModal";
import { btn2Class, btn2Class2, btnClass, btnClass2, btnClass3 } from ".";
import { useParams } from "react-router-dom";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "@/features/auth/reducers/login/loginSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "@/api/client";

const ProfileMenu = () => {
  const { userId } = useParams();
  const { user } = useSelector(selectCurrentUser);
  const [openModal, setOpenModal] = useState(false);
  const token = useSelector(selectCurrentToken);

  const isProfile = useCustomLocation("@me");
  const isFriend = user?.friends.find((u) => (u.id === userId ? u : null));

  const sendFriendRequest = async () => {
    console.log("sending friend request to", userId);
    const response = await axios.post(`${baseURL}/friends/${userId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    console.log(data);
  };
  // useEffect(() => {
  // }, []);

  const getButtonConfig = () => {
    if (isProfile) {
      return {
        className: btnClass,
        content: "Create Post",
        onClick: () => setOpenModal(true),
      };
    } else if (isFriend) {
      return {
        className: btnClass3,
        content: "Block",
        onClick: () => {},
      };
    } else {
      return {
        className: btnClass2,
        content: "Send Friend Request",
        onClick: () => sendFriendRequest(),
      };
    }
  };

  const buttonConfig = getButtonConfig();

  return (
    <>
      <div className="profile-menu flex items-center justify-end mt-3">
        <div className="flex items-center gap-3 *:min-w-28 *:text-sm *:p-2.5 *:rounded-md *:font-medium">
          <button {...buttonConfig}>{buttonConfig.content}</button>
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
            {isProfile ? "Edit profile" : "Message"}
          </button>
        </div>
      </div>
      <CreatePostModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default ProfileMenu;
