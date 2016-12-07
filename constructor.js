class Person{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
    getFullName() {
    return this.fname + " " + this.lname;
  }
}

class Student extends Person {

  constructor(studentId, fname, lname) {
    super(fname, lname);
    this.studentId = studentId;
  }

  getStudentInfo() {
    return this.studentId + " " + this.lname + ", " + this.fname;
  }

}

var student = new Student(1, "Ajay","SM");
console.log(student.getFullName());
console.log(student.getStudentInfo());
