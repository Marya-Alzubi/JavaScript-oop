class Student {
    constructor (id, Name, email, mobileNumber){
        this.id = id ;
        this.Name = Name ; 
        this.email = email ;
        this.mobileNumber = mobileNumber ;
    }
  name(){
     return this.name ;}
     //.toString()


mobile() {
  return Number(this.mobileNumber) ;}
}

let maria = new Student ("123443" ,"Sara" ,"sara@orange.com" , "0777777777" ) ;

console.log(maria.name());
console.log(maria.mobile());



