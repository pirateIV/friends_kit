import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { exitUploadArea } from "./uploadAreaSlice";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const BannerUploadArea = () => {
  const dispatch = useDispatch();
  const showArea = useSelector((state) => state.uploadArea);

  const handleUpdateArea = () => {
    dispatch(exitUploadArea());
    console.log(showArea);
  };

  const bgImageLink =
    "https://cdn.thedesigninspiration.com/wp-content/uploads/2014/07/Icon-Pattern-l.jpg";
  return (
    <>
      <section className="mt-4">
        <Cropper
          zoomTo={0.5}
          viewMode={1}
          src={bgImageLink}
          autoCropArea={1}
          responsive={true}
          background={false}
          className="cropper"
          minCropBoxWidth={10}
          minCropBoxHeight={10}
          initialAspectRatio={1}
          checkOrientation={false}
          onInitialized={(instance) => {
            console.log(instance);
          }}
          guides={true}
        />
      </section>

      <Button onClick={() => handleUpdateArea()}>Reset Picture</Button>
    </>
  );
};

export default BannerUploadArea;
