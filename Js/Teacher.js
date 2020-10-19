class Teacher extends Student {
  
    constructor (id, name, email, mobileNumber, Salary , Subjects){
        super (id, name, email, mobileNumber);
        this.Salary = Salary ;
        this.Subjects = Subjects ; 
    }
    slary(){
        return Number(this.salary);
    }
    subjects(){
        return Array.from(this.Subjects.split( ","))
    }
}

let alaa = new Teacher (96432, "Sadi" ,"Sadi@orange.com", "0777788888", 800, "[English, Arabic, Math, science] " );

console.log(alaa);
console.log(alaa.slary());
console.log(alaa.subjects());