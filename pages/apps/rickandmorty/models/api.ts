type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

interface CharacterInfo {
  count: number;
  next: string;
  pages: number;
  prev: number;
}

export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
    info: CharacterInfo,
    results: CharacterData[]
}
