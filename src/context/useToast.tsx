import { toast, ToastOptions } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";

export function useToast() {
  const show = (type: ToastType, message: string, options?: ToastOptions) => {
    toast[type](message, { ...options });
  };

  const success = (message: string, options?: ToastOptions) =>
    show("success", message, {
      closeOnClick: true,
      pauseOnHover: false,
      autoClose: 3000,
      icon: false,
      className:
        "!bg-black/70 !font-press !text-xs !text-white !border-2 !border-green-400 !rounded-lg !shadow-xl",
      progressClassName: "!bg-green-300",
      ...options,
    });

  const error = (message: string, options?: ToastOptions) =>
    show("error", message, {
      closeOnClick: true,
      pauseOnHover: false,
      autoClose: 3000,
      icon: false,
      className:
        "!bg-black/70 !font-press !text-xs !text-white !border-2 !border-red-400 !rounded-lg !shadow-xl",
      progressClassName: "!bg-red-300",
      ...options,
    });

  const info = (message: string, options?: ToastOptions) =>
    show("info", message, {
      className:
        "bg-gradient-to-r from-blue-800 to-purple-700 border-2 border-blue-400 shadow-xl rounded-lg font-press text-xs",
      progressClassName: "bg-blue-300",
      ...options,
    });

  const warning = (message: string, options?: ToastOptions) =>
    show("warning", message, {
      className:
        "bg-gradient-to-r from-yellow-800 to-orange-700 border-2 border-yellow-400 shadow-xl rounded-lg font-press text-xs",
      progressClassName: "bg-yellow-300",
      ...options,
    });

  return { success, error, info, warning };
}
