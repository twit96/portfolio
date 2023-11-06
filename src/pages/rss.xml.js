import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const publishedPosts = (await getCollection('posts')).filter(post => !post.data.draft && !post.data.archived);
	publishedPosts.sort(function(a, b) {
		let a_date = Date.parse(a.data.datePublished);
		let b_date = Date.parse(b.data.datePublished);
		if (b_date > a_date) return 1;
		if (a_date > b_date) return -1;
		return 0;
	});
	return rss({
    stylesheet: '/rss/feed.xsl',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom",
    },
		customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
		items: publishedPosts.map((post) => ({
			title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.data.description,
      link: `${post.data.category}/${post.slug}`,
      customData: `<media:content
          type="image/${post.data.heroImage.split('.').pop()}"
          medium="image"
          url="${context.site}${post.data.heroImage.slice(1)}" />
      `,
		})),
	});
}
