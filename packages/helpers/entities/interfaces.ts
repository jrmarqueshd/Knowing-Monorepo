export type PersonGender = "Male" | "Female"

export interface Person {
  name: string
  age: number
  gender?: PersonGender
}