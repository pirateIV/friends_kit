import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreatePostMutation } from "@/features/auth/reducers/posts/postsApi";
import useUserData from "@/hooks/useUserData";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useDropzone } from "react-dropzone/.";

const CreatePostModal = ({ openModal, setOpenModal }) => {
  const [post, setPost] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const user = useUserData();
  const [createPost, { isLoading, isError }] = useCreatePostMutation();
  const { toast } = useToast();

  const onCloseModal = () => {
    setOpenModal(false);
    setPost(""); // Reset the post when closing the modal
  };

  const createNewPost = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("content", post);
      formData.append("user", user.id);

      const files = document.getElementById("image_upload").files;

      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      // Debugging: Log the FormData contents
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      const createdPost = await createPost(formData).unwrap();
      toast({
        title: "Post Created",
        description: "Your post has been successfully created.",
      });
      console.log(createdPost);
      setPost(""); // Reset the post field after successful creation
      onCloseModal();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue creating your post. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleUploadImage = (e) => {
    const files = e.target.files;
    document.getElementById("preview").innerHTML = "";

    for (const file of files) {
      const image = document.createElement("img");
      image.src = URL.createObjectURL(file);
      image.className = "w-20 ml-auto";

      document.getElementById("preview").appendChild(image);
    }
  };

  return (
    <>
      <Dialog
        open={openModal}
        onOpenChange={setOpenModal}
        className="dark:bg-[#202937]"
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="dark:text-gray-100">
              Create Post
            </DialogTitle>
            <DialogDescription>
              Share your thoughts with your followers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-start">
            <input
              type="file"
              name="image_upload"
              id="image_upload"
              className="absolute -z-10 opacity-0"
              accept=".jpg, .jpeg, .png"
              onChange={handleUploadImage}
            />
            <label
              htmlFor="image_upload"
              className="mb-3 py-1.5 px-3 bg-indigo-500 text-white text-xs font-medium text-start border-t border-indigo-400 rounded-md hover:bg-indigo-600"
            >
              Choose Image to upload (jpg, png)
            </label>

            <div
              id="preview"
              className="w-full border-2 border-white/30 text-red-500 text-sm rounded-md touch-none"
            >
              {/* You have not chosen any images yet */}
            </div>
          </div>
          <Textarea
            rows={4}
            value={post}
            className="resize-none dark:text-gray-100"
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's on your mind?"
            disabled={isLoading}
          />
          {isError && (
            <p className="text-red-500 text-sm mt-2">
              Something went wrong. Please try again.
            </p>
          )}
          <DialogFooter>
            <Button
              // type="submit"
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40"
              disabled={isLoading || post.length < 3}
              onClick={createNewPost}
            >
              {isLoading ? "Creating..." : "Create Post"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCloseModal}
              className="dark:text-red-500"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePostModal;
