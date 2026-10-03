export type Locale='fr'|'en';
const base=import.meta.env.BASE_URL.replace(/\/$/,'');
const u=(p:string)=>`${base}${p}`;
export const nav={fr:[['Stories',u('/fr/stories/')],['Series',u('/fr/series/')],['People',u('/fr/people/')],['Watch',u('/fr/watch/')],['Listen',u('/fr/listen/')],['Archive',u('/fr/archive/')],['About',u('/fr/about/')]],en:[['Stories',u('/en/stories/')],['Series',u('/en/series/')],['People',u('/en/people/')],['Watch',u('/en/watch/')],['Listen',u('/en/listen/')],['Archive',u('/en/archive/')],['About',u('/en/about/')]]};
