interface AttrDate {
    name: string,
    age: number,
    weight?: string                 // ? mean optional
}

// module engage {                    // helps with namespaces and libraries

/**
 * Animal class
 */
export class Animal {
    constructor(private name: string, private age: Number) { }       //only class can interact with it

    public getName(): string {
        return this.name;
    }

}

/**
 * Bunny class of Animal
 */
export class Bunny extends Animal {
    constructor(private attr: AttrDate) {
        super(attr.name, attr.age);
    }

}

var animal = new Animal('George', 4);
animal.getName();

var bunny = new Bunny({name: 'fluffy', age: 10, weight: '50'});
bunny.getName();
