export interface Country {
   name: Name;
   tld: string[];
   cca2: string;
   ccn3: string;
   cca3: string;
   independent: boolean;
   status: string;
   unMember: boolean;
   currency: Currency;
   idd: Idd;
   capital?: string[];
   altSpellings: string[];
   region: string;
   subregion: string;
   languages: Language;
   translations: Translation;
   latlng: number[];
   landlocked: boolean;
   area: number;
   demonym: Demonym;
   flag: string;
   maps: Map;
   population: number;
   car: Car;
   timezones: string[];
   continents: string[];
   flags: Flag;
   coatOfArms: CoatOfArms;
   startOfWeek: string;
   capitalInfo: CapitalInfo;
}

interface Name {
   common: string;
   official: string;
   nativeName: {
      [key: string]: {
         official: string;
         common: string;
      };
   };
}

interface Currency {
   [key: string]: {
      name: string;
      symbol: string;
   };
}

interface Idd {
   root: string;
   suffix: string[];
}

interface Language {
   [key: string]: string;
}

interface Translation {
   [key: string]: {
      official: string;
      common: string;
   };
}

interface Demonym {
   [key: string]: {
      f: string;
      m: string;
   };
}

interface Map {
   googleMaps: string;
   openStreetMaps: string;
}

interface Car {
   signs: string[];
   side: string;
}

interface Flag {
   png: string;
   svg: string;
}

interface CoatOfArms {
   png: string;
   svg: string;
}

interface CapitalInfo {
   latlng: number[];
}
