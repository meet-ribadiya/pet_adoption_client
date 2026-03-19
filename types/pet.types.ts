export interface Pet {
  _id: string;
  name: string;
  age: number;
  species: string;
  breed: string;
  description: string;
  imageUrl: string;
  status: string;
  createdAt: number;
  updatedAt: number;
}

export interface PetResponse {
  status: number;
  message: string;
  isNextPageAvailable: boolean;
  data: Pet[];
}
