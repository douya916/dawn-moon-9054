import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** 站点基本信息（按需修改） */
export const SITE = {
  name: '哔哔一二',
  description: '一个关于技术、生活与思考的个人博客。',
  author: '大可',
  url: 'https://bber.cn',
};

/** 备案信息 */
export const BEIAN = {
  number: '豫ICP备2025146225号',
  url: 'https://beian.miit.gov.cn/',
};

/** 分类对应的渐变色（用于卡片封面） */
const CATEGORY_GRADIENTS: Record<string, string> = {
  技术: 'from-indigo-500 to-violet-500',
  生活: 'from-emerald-500 to-teal-500',
  读书: 'from-amber-500 to-orange-500',
  随笔: 'from-rose-500 to-pink-500',
  美化: 'from-fuchsia-500 to-pink-500',
};

const DEFAULT_GRADIENT = 'from-sky-500 to-blue-600';

export function categoryGradient(category: string): string {
  return CATEGORY_GRADIENTS[category] ?? DEFAULT_GRADIENT;
}

/** 根据正文估算中文阅读时长（分钟） */
export function readingTime(body: string): number {
  const cn = (body.match(/[一-龥]/g) || []).length;
  const en = (body.replace(/[一-龥]/g, ' ').match(/[a-zA-Z0-9]+/g) || []).length;
  const minutes = Math.ceil(cn / 350 + en / 200);
  return Math.max(1, minutes);
}

/** 格式化日期为中文 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/** 获取已发布文章（按时间倒序） */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export interface CategoryCount {
  name: string;
  count: number;
}

export async function getCategories(): Promise<CategoryCount[]> {
  const posts = await getPosts();
  const map = new Map<string, number>();
  for (const p of posts) {
    map.set(p.data.category, (map.get(p.data.category) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export async function getTags(): Promise<CategoryCount[]> {
  const posts = await getPosts();
  const map = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      map.set(t, (map.get(t) ?? 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/** 文档（教程）类型 */
export type Doc = CollectionEntry<'docs'>;

/** 获取教程文档（按 order 正序，再按 slug） */
export async function getDocs(): Promise<Doc[]> {
  const docs = await getCollection('docs');
  return docs.sort(
    (a, b) => a.data.order - b.data.order || a.slug.localeCompare(b.slug),
  );
}
