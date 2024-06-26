import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useCustomLocation from "@/hooks/useCustomLocation";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { selectCurrentUserProfile } from "@/features/auth/reducers/user/userProfileSlice";

const useUserData = () => {
  const location = useLocation();
  const { user } = useSelector(selectCurrentUser);
  const currentProfile = useSelector(selectCurrentUserProfile);

  const isProfile = location.pathname.includes("@me");
  const [userData, setUserData] = useState(isProfile ? user : currentProfile);

  useEffect(() => {
    setUserData(isProfile ? user : currentProfile);
  }, [isProfile, currentProfile, user]);

  return userData;
};

export default useUserData;
