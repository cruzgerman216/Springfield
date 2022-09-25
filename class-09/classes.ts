class User{
  name:string = "";
  age:number = 0;

  constructor(firstName:string, lifeAge: number){
    this.name = firstName; 
    this.age = lifeAge;
  }


  printMyName(){
    console.log(this.name)
  }

  printMyAge(){
    console.log(this.age)
  }

  printDetails(){
    this.printMyName();
    this.printMyAge();
  }
  
  // constructor(name:string){
  //   this.name = name; 
  //   this.age = age;
  // }
}

let adam = new User("adam", 30);
let Amy = new User("Amy", 30);
let John:User = new User("john", 10)
adam.printMyName(); // "adam"