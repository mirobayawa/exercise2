export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface ID {
  name: string;
  value: number;
}

export interface Registered {
  date: string;
  age: number
}

export interface Dob {
  date: string;
  age: number;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Timezone {
  latitude: string;
  longitude: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface HttpResponse<IUsers> extends Response {
  parsedBody?: IUsers,
}

export interface IUsers {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}
