import inquirer from "inquirer";

console.log("\n\tWELCOME TO THE ULTIMATE PERSONALITY CHECK!\n");

class Person {
  //declare a field to represent the personality
  private personality: string;
  //constructor
  constructor() {
    this.personality = "a Mystery.";
  }
  /**
   * Askquestion
   */
  public Askquestion(answer: number) {
    if (answer === 1) {
      this.personality = "Extrovert.";
    } else if (answer === 2) {
      this.personality = "Introvert.";
    } else {
      this.personality = "You are still a mystery.";
    }
  }
  //this method return the value of personality
  /**
   * Getpersonality
   */
  public Getpersonality() {
    return this.personality;
  }
}

//here we can either write or read data to this class
class Student extends Person {
  private _name: string = "";
  //public Name: string=
  /**
   * Name
   */

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}

class Program {
  //name:string;
  static async Main() {
    try {
      let input = await inquirer.prompt([
        {
          name: "input",
          type: "number",
          message:
            "Type 1 if you like to talk to others and type 2 if you rather keep to yourself :",
            validate :(input)=>{
                if (isNaN(input)) {
                    return "Please enter a number."
                }
                else{
                    return true;
                }
            }
        },
      ]);
      //console.log("Type 1 if you like to talk to others and type 2 if you rather keep to yourself:");
      let MyPerson = new Person();
      MyPerson.Askquestion(parseInt(input.input));
      console.log("You Are:" + MyPerson.Getpersonality());
      let name = await inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "What is Your name?",
        },
      ]);
      let MyStudent = new Student();
      MyStudent.name = name.name;
      console.log(
          MyStudent.name +
          " Your personality is " +
          MyPerson.Getpersonality()
      );
    } catch (error) {
      console.log("Please enter a number.");
    }
  }
}

Program.Main();
