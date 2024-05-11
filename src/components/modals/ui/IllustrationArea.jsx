import { useDispatch } from "react-redux";
import { showUploadArea } from "./uploadAreaSlice";
import addCover from "@/assets/illustrations/add-cover.svg";

const IllustrationArea = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="group banner-area h-80"
      onClick={() => dispatch(showUploadArea())}
    >
      <div className="flex-center flex-col text-center h-full w-full">
        <img
          src={addCover}
          width="200"
          height="200"
          className="bg-cover grayscale-[60%] select-none group-hover:grayscale-0"
          alt=""
        />
        <p className="text-gray-500">
          Click here to <br /> upload a cover image.
        </p>
      </div>
    </div>
  );
};

export default IllustrationArea;
