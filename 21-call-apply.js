const car1 = {
  brand: "Porsche",
  getCarDescription: function (cost, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`
    );
  },
};

const car2 = {
  brand: "Lamborghini",
};

const car3 = {
  brand: "Ford",
};

car1.getCarDescription(80000, 2010, "blue");
car1.getCarDescription.call(car2, 200000, 2013, "yellow");
//apply method passing an arguments as array
car1.getCarDescription.apply(car3, [35000, 2012, "black"]);

//The call method simply gives you an alternative way 
//of calling your functions instead of the way that we used to
//So what the call method does is it gives us a different way of passing arguments into our function.
//It also gives us the ability to change the THIS context which you cannot 
//do if you call a function the normal way
