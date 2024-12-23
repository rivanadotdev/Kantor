export const createHTMLFragment = (str?: string | Element) => {
  if (!str) return null;
  if (typeof str == "string") {
    const template = document.createElement("template");
    template.innerHTML = str.trim(); // Parse the string into DOM nodes
    return template.content.firstElementChild;
  }
  return str;
};
