export const errorToast = (message) => {
   errorMessage = typeof message === "string" ? message : "Something went wrong";

  if (typeof message !== "string") {
    if (typeof message?.response?.data?.message === "string") {
      errorMessage = message.response.data.message;
    } else if (typeof message?.response?.data === "string") {
      errorMessage = message.response.data;
    } else if (typeof message?.response === "string") {
      errorMessage = message.response;
    } else if (typeof message?.data === "string") {
      errorMessage = message.data;
    } else if (typeof message?.error === "string") {
      errorMessage = message.error;
    } else if (typeof message?.message === "string") {
      errorMessage = message.message;
    } else if (
      Array.isArray(message) &&
      message.length > 0 &&
      typeof message[0] === "string"
    ) {
      errorMessage = message[0];
    }
  }

  toast.dismiss();
  toast.error(errorMessage, {
    position: "top-center",
    hideProgressBar: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
