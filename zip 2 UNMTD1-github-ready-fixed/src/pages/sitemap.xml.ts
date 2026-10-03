import type { APIRoute } from 'astro';
import { getEpisodes, getPeople, getSeries, episodePath, personPath, seriesPath } from '../utils/content';

export const GET: APIRoute = async ({ site }) => {
  const [episodes, people, series] = await Promise.all([getEpisodes(), getPeople(), getSeries()]);
  const urls = [
    `${site}${import.meta.env.BASE_URL}fr/`,
    `${site}${import.meta.env.BASE_URL}en/`,
    `${site}${import.meta.env.BASE_URL}fr/stories/`,
    `${site}${import.meta.env.BASE_URL}en/stories/`,
    `${site}${import.meta.env.BASE_URL}fr/series/`,
    `${site}${import.meta.env.BASE_URL}en/series/`,
    `${site}${import.meta.env.BASE_URL}fr/people/`,
    `${site}${import.meta.env.BASE_URL}en/people/`,
    ...episodes.flatMap((entry) => [episodePath('fr', entry), episodePath('en', entry)]),
    ...people.flatMap((entry) => [personPath('fr', entry), personPath('en', entry)]),
    ...series.flatMap((entry) => [seriesPath('fr', entry), seriesPath('en', entry)]),
  ];
  const unique = [...new Set(urls)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${unique.map((url) => `<url><loc>${url}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
