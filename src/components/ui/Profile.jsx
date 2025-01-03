import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import DropdownItem from "./DropdownItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { AvatarComponent } from "../feed";
import Avatar from "../common/Avatar";

const Profile = () => {
  const { name, user } = useSelector(selectCurrentUser);
  return (
    <>
      <hr className="h-px border-0 bg-gray-300 dark:bg-[#464e61]" />
      <DropdownItem path="@me">
        {/* <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          className="h-[35px] w-[35px] rounded-full"
          alt=""
        /> */}

        {/* <div className="flex w-auto"> */}
        <Avatar user={user} status={false} />
        <div style={{ lineHeight: 1.1 }}>
          <h4
            className="text-[.9rem] whitespace-nowrap text-slate-900 font-medium dark:text-white"
            id="user-name"
          >
            {`${name}`}
          </h4>
          <small className="text-[.75rem] whitespace-nowrap text-sky-600 dark:text-sky-500">
            Main account
          </small>
        </div>
        {/* </div> */}
        <FontAwesomeIcon
          icon={faCheck}
          className="absolute right-8 w-4 h-4 text-blue-400 "
        />
      </DropdownItem>
      <hr className="h-px border-0 bg-gray-300 dark:bg-[#464e61]" />
    </>
  );
};

export default Profile;
