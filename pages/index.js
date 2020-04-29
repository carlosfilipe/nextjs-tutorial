import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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
    </Layout>
  )
}