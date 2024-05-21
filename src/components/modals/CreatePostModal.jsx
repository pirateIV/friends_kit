import useUserData from "@/hooks/useUserData";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";

const CreatePostModal = ({ openModal, setOpenModal }) => {
  const [email, setEmail] = useState("");
  const user = useUserData();

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Modal
        show={openModal}
        popup
        dismissible
        size="xl"
        onClose={onCloseModal}
        className="bg-black bg-black/70 rounded-lg"
      >
        <Modal.Header className="bg-white dark:bg-[#141a23] border-t border-blue-gray-800" />
        <Modal.Body className="bg-white dark:bg-[#141a23]">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Create Post
            </h3>
            <div>
              <div className="post-content">
                <Textarea
                  rows="9"
                  className="p-3.5 border-gray-400 !bg-opacity-20 outline-none ring-0 placeholder:text-gray-600 focus:!border-blue-500"
                  placeholder={`What's on your mind, ${user?.firstName}`}
                ></Textarea>
              </div>
            </div>

            <div className="w-full flex items-center gap-3 *:min-w-28 *:text-sm *:p-2.5 *:rounded-md *:font-medium justify-end">
              <button class="text-white bg-blue-700 border-t border-blue-500 dark:border-blue-400 hover:bg-blue-600">
                {" "}
                Create Post
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreatePostModal;
