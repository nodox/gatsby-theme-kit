---
path: "/javascript-closures-explained"
date: "2016-05-16"
title: "Javascript Closures Explained"
tags: ["javascript"]
---

When you dive into JavaScript, the term “closure” is bound to come up. Many programmers find this concept to be a complex however put simply a closure is a technique used to access different scopes within JavaScript functions. A closure is created when a function returns another function that accesses the variables in the scope of first function. Most people get lost by now but lets dive into some code.

```
function welcomeTo(place) {
  var city = place;
  
  return function(name) {
    return “Welcome to “ + city + “, “ + name;
  };
}
var welcomeToNY = welcomeTo(“New York”);
var welcomeToLA = welcomeTo(“Los Angeles”);
welcomeToNY(“Peter”); // Welcome to New York, Peter
welcomeToNY(“Jose”);  // Welcome to New York, Jose
welcomeToLA(“James”); // Welcome to Los Angeles, James
```

Here we have a closure. The inner function uses the city variable contained within the scope of the welcomeTo function. The first scope ends when the first return statement is encountered. The code above serves as a factory for creating welcome messages with different cities and person names. One important observation is that closure variables are kept accessible even after the function has returned. The welcomeToNY(“Peter”) saves “New York” as the city variable for the closure and then executes the inner function with the given name. A call to welcomeToNY(“Jose”) outputs the welcome message with “New York” still saved as the city to be used in the greeting.
Closures can also return objects with multiple functions that can do different things.

```
var tvRemote = function() {
  var channel = 10;
  
  return {
    increaseChannel: function() {
       return channel += 1; 
    },
    decreaseChannel: function() { 
      return channel -= 1;
    }
  };  
};
tvRemote.increaseChannel(); // 11
tvRemote.increaseChannel(); // 12
tvRemote.decreaseChannel(); // 11
```

The tvRemote function returns an object with two properties. Each property is a function which accesses the variables in the scope of the first function.

In practice, closures are a JavaScript specific concept of encapsulation. Encapsulation is a way of restricting access to an object’s internal components from the outside environment. Compiled languages like Java or C have keywords to create private variables. Javascript does not have private keywords but with closures we are able to create private variables. Let’s test this with our above function.

```
tvRemote.channel; // undefined
```

If we try to access the channel variable directly the result is undefined. The only way to manipulate the private variables is with the returned functions.

There are plenty of closure articles out there if you want to supplement what you learned here today. Stackoverflow has a great community post on closures. The Mozilla Developer Network discusses the performance and practical applications of closures. Thank you for reading!