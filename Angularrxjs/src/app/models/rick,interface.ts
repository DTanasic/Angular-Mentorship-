export interface Rick {
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

export interface Origin extends Rick {
  name: string;
  url: string;
}

export interface Location extends Rick {
  name: string;
  url: string;
}
