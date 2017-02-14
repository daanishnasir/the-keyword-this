//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
          //It's the object that owns the code. Its value is decided if its explicit, implicit, window or new.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
        //Explicit, Implicit,  Window,  New.
          //Explicit is specifically set, we invoke the function with using Call, Apply or Bind.
          //Implicit --- What is left of the dot. We aren't using call, apply or bind.
          //Window --- If it isn't explicit or implicit it will go to window.
          // New -- can act as a constructor , a constructor call. A brand new object can be created


  // 3) What is the difference between call and apply?
        //Call takes in the parameters in order. Apply takes in an array; it APPLIES an array.
      //Answer

  // 4) What does .bind do?
        //  It can create a brand new function
      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  'username' : 'daanishnasir',
  'email': 'daanishnasir@gmail.com',
  'getUsername' : function(){
    return this.username;
  }
};

    //Code Here

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername;

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make,model,year,move){
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = move;
  this.moveCar = function(){
    return move + 10;
  }
}


  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).





//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
