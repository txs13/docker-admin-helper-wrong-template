class Person {
  constructor(name:string) {
      this.name=name;
  }
  name: string;
}

function greeter (person:Person){ 
    return "hallo "+person.name;
}

var person=new Person("Toxes");

$((function(){
    var message = greeter(person);
    $("#status")[0].innerHTML=message;
}));