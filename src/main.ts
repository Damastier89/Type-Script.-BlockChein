class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const name: string = 'Sergei',
      age: number = 18,
      gender: string = 'мужчина';

const kate = new Human('Kate', 32, 'женщина');   

function sayHi(name: string, age: number, gender: string): string {
  return `Привет, ${name}, тебе уже исполнилось ${age} и ты ${gender}?`;
}

function sayHello(user: Human): string  {
  return `Привет ${user.name}, тебе ${user.age} и ты ${user.gender}?`
}

console.log(sayHi(name, age, gender));
console.log(sayHello(kate));


export {}