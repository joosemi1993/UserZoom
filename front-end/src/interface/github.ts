export type EmptyResponse = Record<string, never>;

export interface OwnerOutput {
  name: string;
  avatar: string;
}

export interface RepositoryOutput {
  id: number;
  name: string;
  private: boolean;
  url: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  owner: OwnerOutput;
}

export interface IsFavouriteOutput {
  isFavourite: Boolean;
}
