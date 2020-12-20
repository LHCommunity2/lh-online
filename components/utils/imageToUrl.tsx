export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://lh-backend.herokuapp.com";

export const fromImageToUrl = (image: any) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
