export interface Dragon {
  _id: string,
  name: string,
  type: string,
  created_at: string,
  slug: string,
  histories: Array<string>,
};

export interface NewDragon {
  name: string,
  type: string,
};
