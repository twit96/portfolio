
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const publishedPosts = (await getCollection('posts'))
    .filter(post => !post.data.hidden);

  publishedPosts.sort((a, b) =>
    Date.parse(b.data.datePublished) - Date.parse(a.data.datePublished)
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.datePublished),
      description: post.data.description,
      link: `/${post.id}/`,
      customData: post.data.heroImage
        ? `<media:content
            type="image/${post.data.heroImage.split('.').pop()}"
            medium="image"
            url="${post.data.heroImage}" />`
        : '',
    })),
  });
}
