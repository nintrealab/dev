export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'NINTREA';
  const description = process.env.BLOG_DES
    ? decodeURI(process.env.BLOG_DES)
    : 'Nintrea | Listen, Relax Before Bed';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'nintrea';

  return {
    name,
    // blogTitle,
    footerText,
  };
};
