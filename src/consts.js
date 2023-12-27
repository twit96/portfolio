// Place any global data in this file.
export const SITE_TITLE = 'Tyler Wittig | Full-Stack Web Developer';
export const SITE_DESCRIPTION = 'Full-Stack Web Developer in South Texas, specializing in custom websites and website redesigns for small businesses.';
export const SITE_IMAGE = '/img/og-image.png';
export const SITE_AUTHOR = 'Tyler Wittig';

/**
 * Each contact info entry is an array corresponding to its base URL [0] and its pathname [1].
 * This allows usernames to be referenced separately without needing to parse each string,
 * but requires concatenation of the parts to build the full href.
 * 
 * 'Contact Link': [ 'URL', 'path' ]
*/
export const CONTACT_INFO = {
  'Codepen':  [ 'https://codepen.io/', 'twit96' ],
  'Email':    [ 'mailto:', 'tylerwittig.work@gmail.com' ],
  'GitHub':   [ 'https://github.com/', 'twit96' ],
  'LinkedIn': [ 'https://www.linkedin.com/in/', 'tylerwittig' ],
  'Resume':   [ '/', 'resume-tylerwittig-20230424.pdf' ],
  'RSS':      [ '/', 'rss.xml' ],
  'X':        [ 'https://x.com/', 'tyler_wittig' ],
};

export const POSTS_PER_PAGE = 9;
