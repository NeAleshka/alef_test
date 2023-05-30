export interface IParent {
    name:string
    age:string
    children?:IChildren[]
}
export interface IChildren {
    childrenName:string
    childrenAge:string
}

export interface ChildrenInput {
    childrenName:HTMLInputElement
    childrenAge:HTMLInputElement
}