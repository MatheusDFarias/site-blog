
import {AtSign, Facebook, Linkedin, Slack, Twitter} from 'lucide-react'

export type Shareconfig ={
    url:string;
    title?:string;
    text?:string;
}

export type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'twitter' | 'threads'| 'clipboard';

export const SOCIAL_PROVIDERS ={
    linkedin:{
        name:'LinkedIn',
        icon:<Linkedin className='h-4 w-4'/>,
        shareUrl: (config:Shareconfig)=> `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`
    },
    facebook:{
        name:'Facebook',
        icon:<Facebook className='h-4 w-4'/>,
        shareUrl: (config:Shareconfig)=> `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`
    },
    slack:{
        name:'Slack',
        icon:<Slack className='h-4 w-4'/>,
        shareUrl: (config:Shareconfig)=> `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title||'')}`
    },
    twitter:{
        name:'Twitter',
        icon:<Twitter className='h-4 w-4'/>,
        shareUrl: (config:Shareconfig)=> `https://x.com/intent/tweet?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title||'')}`
    },
    threads:{
        name:'Threads',
        icon:<AtSign className='h-4 w-4'/>,
        shareUrl: (config:Shareconfig)=> `https://threads.net/intent/post?text=${encodeURIComponent(`${config.title||''} ${encodeURIComponent(config.url)}`)}`
    }  

}