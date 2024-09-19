export const setUrlAnimal = (url) => {
  if (url.startsWith('/uploads/')) {
    return `https://paw-connect-back.onrender.com${url}`;
  }
  return url;
};
