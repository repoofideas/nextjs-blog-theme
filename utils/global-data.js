export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Kris Pan';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'AI Research Engineer with experience in large-scale machine learning algorithm and infrastructure.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved. My Blog posts do not represent my employer.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
