import { twMerge } from "tailwind-merge";

export const InputWithIcon = ({ icon, value, change, type, placeholder, required }) => {
  return (
    <label className={`flex gap-1 items-center w-full ${
        value && twMerge("border-b border-gray-300")
      }`}>
      <span className="font-medium">{icon}</span>
      <input
        type={type ? type : "text"}
        value={value}
        required={required}
        placeholder={placeholder}
        className={`p-2 w-xs outline-none`}
        onChange={(e) => change(e.target.value)}
      />
    </label>
  )
}
