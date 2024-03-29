/**
 * Loads an article from the database and renders it
 */
import { Database } from '@/lib/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { remark } from 'remark';
import html from 'remark-html';

import styles from '@/styles/Article.module.css';
import ArticleSidebar from '@/components/article/ArticleSidebar';

export default async function Article({ params }: { params: { id: number } }) {
  // fetch article from database
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .limit(1)
    .single();

  if (error) {
    console.log(error);
    return <div>Error loading article</div>;
  }

  // convert markdown to html
  const content = await remark().use(html).process(data!.content);
  const articleContent = content.toString();
  return (
    <div className="flex min-h-screen flex-row">
      <ArticleSidebar />
      <main
        dangerouslySetInnerHTML={{ __html: articleContent }}
        className={styles.article}
      ></main>
    </div>
  );
}
