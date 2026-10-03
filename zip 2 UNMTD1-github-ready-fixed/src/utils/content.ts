import {getCollection} from 'astro:content';
import type {CollectionEntry} from 'astro:content';
import type {Locale} from '../data/site';
export async function getEpisodes(){return (await getCollection('episodes',({data})=>!data.draft)).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf());}
export async function getSeries(){return (await getCollection('series')).sort((a,b)=>a.data.number-b.data.number);}
export async function getPeople(){return (await getCollection('people')).sort((a,b)=>a.data.name.localeCompare(b.data.name));}
const id=(e:any)=>e.id.replace(/\.md$/,'');
const base=import.meta.env.BASE_URL.replace(/\/$/,'');
const url=(p:string)=>`${base}${p}`;
export const episodePath=(l:Locale,e:CollectionEntry<'episodes'>)=>url(`/${l}/stories/${id(e)}/`);
export const seriesPath=(l:Locale,e:CollectionEntry<'series'>)=>url(`/${l}/series/${id(e)}/`);
export const personPath=(l:Locale,e:CollectionEntry<'people'>)=>url(`/${l}/people/${id(e)}/`);
export const formatDate=(d:Date,l:Locale)=>new Intl.DateTimeFormat(l==='fr'?'fr-FR':'en-GB',{day:'2-digit',month:'long',year:'numeric'}).format(d);
