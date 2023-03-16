import { Logo } from '@/components/svg/logo';
import { MagicMirrorLogo } from '@/components/svg/mmLogo';
import { ChatifyLogo } from '@/components/svg/chLogo';
import { PvLogo } from '@/components/svg/faceLogo';
import {
  chakra,
  nuxt,
  electron,
  figma,
  nextjs,
  nodejs,
  react,
  js,
  vue,
  firebase,
  socketIO,
  storybook,
  typescript,
  html5,
  css3
} from './tools';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    logo: <ChatifyLogo />,
    title: 'Chatify Web-App',
    description:
      'A chatting application which can be used for text conversations using email, integrated with Firebase Auth for authentication',
    tools: [react, nextjs, firebase, chakra],
    live: 'https://chatify-navy.vercel.app/',
    proto: null,
    repo: 'https://github.com/jatin-sharma-11/chatify',
    id: uuidv4(),
    feature: true
  },
  {
    logo: null,
    title: 'brainTrust (Blog)',
    description:
      'My own blog website based on static files with .md extention with minimilistic design, inspired from a template on vercel ',
    tools: [nuxt, nextjs, vue, typescript],
    live: 'brain-trust-blog.vercel.app',
    proto:null,
    repo: 'https://github.com/jatin-sharma-11/braintrust',
    id: uuidv4(),
    feature: false
  },
  {
    logo: <Logo />,
    title: 'Portfolio V1',
    description:
      'The first iteration of my personal portfolio built with React and Chakra UI.',
    tools: [html5, css3, js],
    live: 'https://jatinsharma.netlify.app',
    prototype: null,
    repo: 'https://github.com/Jatin-Sharma-11/portfolio-jatin.github.io',
    id: uuidv4(),
    feature: true
  }
];
