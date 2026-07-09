let value: number | string | boolean;

value = 42;
value = 'Hello, TypeScript!';
value = true;

type StringOrNumber = string | number;

function processValue(input: StringOrNumber): void {
    if (typeof input === 'string') {
        console.log(`String value: ${input}`);
    } else {
        console.log(`Number value: ${input}`);
    }
}

processValue(100);
processValue('TypeScript is awesome!');

type PythonBoolean = 'True' | 'False';

let pyBool: PythonBoolean;
pyBool = 'True';
pyBool = 'False';

function checkPythonBoolean(value: PythonBoolean): void {
    if (value === 'True') {
        console.log('The value is True');
    } else {
        console.log('The value is False');
    }
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    [key: string]: any;
}

const person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fast: true,
    height: 180,
};

function greet(person: Person): void {
    console.log(`Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`);
}

greet(person);

function pow(x: number, n: number): number {
    return Math.pow(x, n);
}

console.log(pow(4, 2));

const arr: number[] = []

arr.push(1);
arr.push(2);

console.log(arr);

const people: Person[] = []

people.push({ firstName: 'Alice', lastName: 'Smith', age: 25 });
people.push({ firstName: 'Bob', lastName: 'Johnson', age: 35 });

console.log(people);

type MyList = [number?, string?, boolean?];

const myList: MyList = [42, 'Hello', true];

console.log(myList);

const myListEmpty: MyList = [];

console.log(myListEmpty);

class Observable<T> {
    constructor(public value: T) {}

    subscribe(callback: (value: T) => void): void {
        callback(this.value);
    }
}

const observable = new Observable<number>(42);
observable.subscribe(value => {
    console.log(`Received value: ${value}`);
});