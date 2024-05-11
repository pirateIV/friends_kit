import { useState } from "react";

const useLoadingState = () => {
  const [loading, setLoading] = useState(false);

  const handleLoading = async (callback) => {
    setLoading(true);
    await callback;
    setLoading(false);
  };

  return {
    loading,
    handleLoading,
  };
};

export default useLoadingState;
