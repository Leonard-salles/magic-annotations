import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const InputButton = ({ value, loading, submit }) => {
  return (
    <label className="p-2 bg-white text-gray-900 cursor-pointer font-medium font-sans text-center text-xl">
      {loading && <CircularProgress size={24} color="" />}
      {!loading && <input className="w-full cursor-pointer" type="submit" value={value} />}
    </label>
  );
};
