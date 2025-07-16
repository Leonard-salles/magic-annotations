import { twMerge } from "tailwind-merge";

export const Input = ({ label, value, change, type }) => {
  return (
    <label className={`flex flex-col gap-1 w-full`}>
      <span className="font-medium">{label}</span>
      <input
        type={type ? type : "text"}
        value={value}
        className={`p-2 outline-none ${
          value && twMerge("border border-gray-300 rounded-sm")
        }`}
        onChange={(e) => change(e.target.value)}
      />
    </label>
  );
};
