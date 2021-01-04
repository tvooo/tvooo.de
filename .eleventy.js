const pluginTOC = require("eleventy-plugin-nesting-toc");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const format = require("date-fns/format");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAbbr = require("markdown-it-abbr");
const markdownItEmoji = require("markdown-it-emoji");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return format(dateObj, "dd LLL yyyy");
  });

  // Markdown
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true, linkify: true, typographer: true })
      .use(markdownItAnchor)
      .use(markdownItAbbr)
      .use(markdownItEmoji)
  );

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3", "h4"], // Which heading tags are selected (headings must each have an ID attribute)
    wrapper: "nav", // Element to put around the root `ol`
    wrapperClass: "toc", // Class for the element around the root `ol`
    headingText: "Table of contents", // Optional text to show in heading above the wrapper element
    headingTag: "h2", // Heading tag when showing heading above the wrapper element
  });
};
