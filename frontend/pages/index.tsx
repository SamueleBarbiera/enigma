import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import getConfig from 'next/config'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        const loginInfoEmail = window.localStorage.getItem('email user local auth')
        console.log('get items --> ' + loginInfoEmail)
    }, [])
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/question-solid.svg" />
                <meta charSet="utf-8" className="next-head" />
            </Head>
            <Header />
            <div className="h-screen">main</div>
            {/*articles.map(({article}:any) => (
					<div className="article" key={article.id}>
						<h3>{article.Title}</h3>
						<p dangerouslySetInnerHTML={{ __html: article.Body}} />
					</div>
            ))*/}
            <Footer />
        </>
    )
}
/*
export async function getServerSideProps({ ctx }: any) {
    
    const res = await fetch(`${process.env.NEXTAUTH_URL}/`, {
		headers: {
			Authorization: `Bearer ${jwt}`
		}
    })
    
    const articles = await res.json()

    return {
        props: {
            //articles: await jwtJson,
        },
    }
}*/
