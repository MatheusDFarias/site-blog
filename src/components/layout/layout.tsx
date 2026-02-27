import { useRouter } from "next/router";
import { Header } from "./header";
import { Footer } from "./footer";
import { Inter, PT_Sans_Caption } from "next/font/google";


type LayoutProps ={
    children:React.ReactNode;
}
const inter = Inter({
    subsets: ['latin'],
    weight:['400','500'],
    variable: '--font-inter'
})
const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight:'700',
    variable: '--font-sans'
})
export function Layout({children}:LayoutProps){
    const router = useRouter();

    return(
        <div className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}>
            { router.pathname !== '/_error' && <Header/>}
            <main className="flex-1 flex flex-col mt-10 mb-12">
                {children}
            </main>
            { router.pathname !== '/_error' && <Footer/>}
        </div>
    )
}