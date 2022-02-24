import { Person } from './interfaces';

export const getName = (person: Person) => {
  return person.name;
}

export const getAge = (person: Person) => {
  return person.age;
}

export const getGender = (person: Person) => {
  return person.gender;
}