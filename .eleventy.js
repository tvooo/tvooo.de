const format = require("date-fns/format");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return format(dateObj, "dd LLL yyyy");
  });
};
