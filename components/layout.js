import Link from "next/link"
import Nav from "./nav.js"
import Footer from "./footer.js"
import Head from "./head.js"

export default function Layout({children, isBook}) {
    return <body>

        <Head/>

        <Nav/>

        <main className={isBook ? "book" : ""}>
        {children}
        </main>

        {/* <Footer {...isBook}/> */}

        <footer>
        &nbsp;~&nbsp;
        {isBook ?(
            <>
            <Link href="/book/000"><a className="link"> &larr; </a></Link>
                &nbsp;~&nbsp;
            <Link href="/book/001"><a className="link"> &rarr; </a></Link>
            </>
        ):(
            <Link href="/book/000"><a className="link">read</a></Link>
        )}
        &nbsp;~&nbsp;
    </footer>
        
    </body>

}
