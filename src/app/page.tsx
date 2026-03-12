import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

export const metadata: Metadata ={
    title:'Site-set',
    description:'Venda seus produto como afiliado em um único lugar',
    robots:'index,follow',
    openGraph:{
        title:'Site-set',
        description:'Venda seus produto como afiliado em um único lugar',
        url:'https://site-blog-khaki-gamma.vercel.app/og-image.jpg',
        siteName:'Site-set',
        locale:'pt_BR',
        type:'website',
        images:{
            url:'https://site-blog-khaki-gamma.vercel.app/og-image.jpg',
            width:800,
            height: 600,
            alt:'Site-set'
        }
    }
}

export default function HomePage(){
    return(
        
        <LandingPage/>
    )
}