import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCustomLocation from "./useCustomLocation";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { selectCurrentUserProfile } from "@/features/auth/reducers/user/userProfileSlice";

const useUserData = () => {
  const { user } = useSelector(selectCurrentUser);
  const currentProfile = useSelector(selectCurrentUserProfile);
  const isProfile = useCustomLocation("app/@me");

  const [userData, setUserData] = useState(isProfile ? user : currentProfile);

  useEffect(() => {
    setUserData(isProfile ? user : currentProfile);
  }, [isProfile, currentProfile, user]);

  console.log(userData);
  return userData;
};

export default useUserData;
