import fs from 'node:fs';
import path from 'node:path';

const srcDir = 'C:/Users/dake/Desktop/视频对应文档';
const outDir = 'src/content/docs';
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md')).sort();

for (const file of files) {
  const full = path.join(srcDir, file);
  let content = fs.readFileSync(full, 'utf8');

  const m = file.match(/^(\d+)[-_](.+)\.md$/);
  const order = m ? parseInt(m[1], 10) : 999;
  const titleFromName = m ? m[2].replace(/[-_]/g, ' ') : file.replace(/\.md$/, '');

  // 解析已有 frontmatter（若有）
  let existing = {};
  let body = content;
  if (content.startsWith('---')) {
    const end = content.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = content.slice(3, end).trim();
      body = content.slice(end + 4);
      fm.split('\n').forEach((line) => {
        const mm = line.match(/^([\w-]+):\s*(.*)$/);
        if (mm) existing[mm[1]] = mm[2].replace(/^["']|["']$/g, '');
      });
    }
  }

  const title = existing.title || titleFromName;
  const description =
    existing.description || `瓜奇搭建教程 · 第 ${order} 章：${title}`;
  const slugNote = '';

  const fmOut = `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
order: ${order}
---
`;

  fs.writeFileSync(path.join(outDir, file), fmOut + body.replace(/^\s+/, ''));
  console.log(`imported ${file} -> order=${order} title=${title}`);
}

console.log('done');
