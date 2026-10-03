import { defineConfig } from 'astro/config';
const repo=process.env.GITHUB_REPOSITORY?.split('/')[1]??'unmtd1';
const owner=process.env.GITHUB_REPOSITORY_OWNER??'YOUR-USERNAME';
const projectPage=!repo.endsWith('.github.io');
export default defineConfig({site:process.env.SITE_URL||`https://${owner}.github.io`,base:process.env.NODE_ENV==='production'&&projectPage?`/${repo}`:'',output:'static',compressHTML:true});
