export type ListChildren = {
  id: number;
  content: string;
};

export type Grouping = {
  id: number;
  groupName: string;
  children: ListChildren[];
};
