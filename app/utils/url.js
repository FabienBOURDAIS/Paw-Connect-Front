export const setUrlAnimal = (url) => {
  if (url.startsWith('/uploads/')) {
    return `https://paw-connect-back-5ze2.onrender.com${url}`;
  }
  return url;
};
