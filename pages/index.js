import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Oi, eu sou o <b>Carlos</b>. Sou um Engenheiro de Software, pai de família e guitarrista nas horas vagas. Me segue lá no <a href="https://www.instagram.com/_carlosfilipe/" target="_blank">Insta</a> =D</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.list}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (

            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`} >
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
             
            </li>
          ))}

        </ul>

      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  console.log("getStaticProps");
  const allPostsData = getSortedPostsData();
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  };
};