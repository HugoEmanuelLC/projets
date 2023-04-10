
const tabValors = {
    title: "title test",
    until: 00-00-0000,
    description: "un exemple de description",
    AllValors: function() {
        return this.title + " " + this.until + " " + this.description;
    }
}



function addNew(title,until,description){

    let tabTampo = {
        title: title,
        until: until,
        description: description
    }

    // let elemts = t.fullName.bind(member);
    // let elemts = tabValors.AllValors.prototype;

    return console.log(tabValors.AllValors.bind(tabTampo))
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }