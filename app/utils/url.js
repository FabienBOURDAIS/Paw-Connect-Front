export const setUrlAnimal = (url) => {
  if (url.startsWith('/uploads/')) {
    return `https://paw-connect-back-1i38.onrender.com${url}`;
  }
  return url;
};
