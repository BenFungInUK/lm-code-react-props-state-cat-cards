export default interface Cat {
  name: string;
  species: string;
  favFoods: Array<string>; // or string[]
  birthYear: number;
  id?: string;
}

export interface CatImageProps {
  image: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
  id?: string;
}
