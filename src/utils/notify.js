import toast from "react-hot-toast";

const customStyle = {
  padding: "16px",
  color: "rgb(75,85,99)",
};

export const notify = {
  success: (msg) => {
    toast.success(msg);
  },
  error: (msg) => {
    toast.error(msg, {
      style: customStyle,
      iconTheme: {
        primary: "#ff6666",
      },
    });
  },
};
