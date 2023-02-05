const dateFormatter = (date) => {
  return new Date(date)
    .toLocaleDateString("en-us", {
      day: "numeric",
      year: "numeric",
      month: "short",
    })
    .replace(",", "");
};

const cleanText = (text) => {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
};

export { dateFormatter, cleanText };
