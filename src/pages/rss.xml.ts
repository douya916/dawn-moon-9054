import rss from '@astrojs/rss';
import { SITE, getPosts } from '@/lib/blog';

export async function GET(context: { site?: URL }) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? new URL(SITE.url),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
