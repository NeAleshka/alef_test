export interface IParent {
    name:string
    age:string
    children?:IChildren[]
}
interface IChildren extends IParent{}