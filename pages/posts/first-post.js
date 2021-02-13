import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta name='keywords' content='blog posts' />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Go to Home Page</a>
        </Link>
      </h2>
    </Layout>
  )
}