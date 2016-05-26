
class Weapon {
    constructor(private name: string) {
        
    }
    
    public getName(): string {            // type - void returns nothing
        return this.name;
    }
    
    public setName(name: string): void {
        this.name = name;
    }
}


class Gun {
    public weapon: Weapon;
    constructor(private name: string) {
        this.weapon = new Weapon(name);
    }
    public getName() {
        return this.weapon.getName()
    }
}

var gunSword = new Gun('sword');
gunSword.getName();

var twoDArray = [               // twoDArray [x][y] = x is row, y is col
    [{}, {}, {}],               // 0,0      0,1     0,2
    [{}, {}, {}],               // 1,0      1,1     1,2
    [{}, {}, {}]                // 2,0      2,1     2,2
]