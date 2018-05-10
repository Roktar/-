function userData(name = "", phone = "") {
    this.name = name;
    this.phone = phone;
  
    return {
      setName : function(name) {
        name = name;
      },
      getName : function() {
        return name;
      },
      setPhone : function(phone) {
        phone = phone;
      },
      getPhone : function() {
        return phone;
      },
      addProperty : function(prop_name, func, type=true) {
        this[prop_name] = func;
        if(!type)
            func = null;
      },
      deleteProperty : function(prop_name) {
          this[prop_name] = null;
      },
    };
  }

var obj1 = userData("name", "phoneNumber");

obj1.addProperty("printNameAndPhone", function() {
    return this.getName() + ", " + this.getPhone();
});

obj1.addProperty("addAddress", function(address) {
    this.address = address;
}, false);

obj1.addProperty("getAddress", function() {
    return this.address;
});

obj1.addProperty("setAddress", function(address) {
    this.address = address;
});

obj1.addProperty("printNameAndAddr", function() {
    return this.getName() + ", " + this.getAddress();
});

console.log(obj1.printNameAndPhone());
obj1.addAddress("oldAddr");
console.log(obj1.getAddress());
obj1.setAddress("newAddr");
console.log(obj1.getAddress());
console.log(obj1.printNameAndAddr());
obj1.deleteProperty("printNameAndAddr");
console.log(obj1.printNameAndAddr());