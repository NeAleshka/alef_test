export interface IParent {
  name: string;
  age: string;
  children?: IChildren[];
}
export interface IChildren {
  childrenName: string;
  childrenAge: string;
}

export interface ChildrenInput {
  id: string;
  childrenName: string;
  childrenAge: string;
}
