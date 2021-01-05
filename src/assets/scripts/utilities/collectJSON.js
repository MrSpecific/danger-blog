const collectJSON = (selector) => {
  const jsonElement = document.querySelector(selector);

  if (!jsonElement) return false;

  return JSON.parse(jsonElement.innerHTML);
}

export default collectJSON;
