let use1 = {
  name: 'Jingshi',
  age: 16
}
let use2 = {
  name: 'buer',
  age: 16
}
function says() {
  console.log(this.name, '#')
}
use1.f = says;
use2.f = says;
use1.f(); //Jingshi
use2.f(); //buer
use1['f'](); //Jingshi
use2['f'](); //buer

let users1 = {
  name: 'Jingshi',
  age: 16
}
let users2 = {
  name: 'buer',
  age: 16
}
function say() {
  let arrow = () => console.log(this.name, '**')
  //setTimeout(arrow, 3000)
  arrow()
}
users1.f = say;
users2.f = say;
users1.f(); //Jingshi
users2.f(); //buer
users1['f'](); //Jingshi
users2['f'](); //buer

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  }
};
group.showList();
let group1 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ': ' + student)
    });
  }
};
group1.showList();

let groups = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.map(
      student => console.log(this.title + ': ' + student)
    );
  }
};
groups.showList();
let groups1 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.map(function(student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ': ' + student)
    });
  }
};
groups1.showList();
