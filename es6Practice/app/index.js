//import {circle, rectangle, tsaCylinder} from './area.js'

//console.log(circle(5))
//Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.
/*let array = [3,62,234,7,23,74,23,76,92];
console.log(array.filter((n) => n > 70));
*/


/*Q2.

<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>


a. Select all the list items on the page and convert to array.
b. Filter for only the elements that contain the word 'flexbox'
c. Map down to a list of time strings
d. Map to an array of seconds
e. Reduce to get total using .filter and .map
*/
 

/*Q3. Create a markup template using string literal

const song = {
 name: 'Dying to live',
 artist: 'Tupac',
 featuring: 'Biggie Smalls'
};


 

Result:
"<div class="song">
   <p>
     Dying to live — Tupac
     (Featuring Biggie Smalls)
   </p>
 </div>
“
*/

//Solution
/*const song = {
  name: 'Dying to live',
  artist: 'Tupac',
  featuring: 'Biggie Smalls'
 };
 
 console.log(`<div class="song">
<p>
${song.name} — ${song.artist}
(Featuring ${song.featuring})
</p>
</div>
`);*/


//*Q4. Extract all keys inside address object from user object using destructuring ?

/*const user = {
firstName: 'Sahil',
lastName: 'Dua',
Address: {
Line1: 'address line 1',
Line2: 'ddress line 2',
State: 'Delhi',
Pin: 110085,
Country: 'India',
City: 'New Delhi',
},
phoneNo: 9999999999
}

let {Address} = user;
let key = Object.keys(Address);
console.log(key);
*/



 

//Q4. Filter unique array members using Set.
/*let array1 = [1,2,2,3,4,1,5,3,5,6,7];
let set = new Set(array1);
console.log(set);
*/
//Q5. Find the possible combinations of a string and store them in a MAP? 

/*let randomLetters = 'fenfwoifnwiefnewdefhifkdmoewjfowejweod';
let newMap = new Map();
for(let i=0;i<randomLetters.length;i++){
let letter = randomLetters[i];
if(!newMap.has(letter)){
newMap.set(letter,1)
}else{
newMap.set(letter,newMap.get(letter) + 1);
}
}
console.log(newMap)
*/

//Q6. Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.
/*
class Animal{
  constructor(name,height){
  this.name = name;
  this.height = height;
  }
  hello(){
  console.log(`i am ${this.name} from lion kingdom`); 
  }
  } 
  let king = new Animal("mufasa",4.5);
  king.hello();
  
  class Lion extends Animal{
  constructor(name,height,color){
  super(name,height);
  this.color = color;
  }
  hello(){
  console.log(`i am ${this.name} and my color is ${this.color}`);
  }
  }
  let kid = new Lion("simba",4.5,"safron");
  kid.hello();
  
  class Cub extends Lion{
  constructor(name,height,color,weight){
  super(name,height,color);
  this.weight = weight;
  }
  hello(){
  console.log(`i am ${this.name} and my color is ${this.color} and weight is ${this.weight}`);
  }
  }
  let littleCub = new Cub("simba jr.",2.5,"safron",'20Kg');
  littleCub.hello();
*/

//Q7. Write a program to implement a class having static functions
/*class Calculator{
  static multiply(a,b){
      return a * b;
  }

  static add(a,b){
      return a + b;
  }
}

let a = Calculator.add(4,5);

console.log(a)
*/

//Q8. Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.


//console.log(circle(5));

//console.log(rectangle(2,5));

//console.log(tsaCylinder(5,6))

//Q9. Import a module for filtering unique elements in an array.
//import filtering from './filtering.js'

//let array2 = [1,1,2,3,4,5,6,1,3,2,3,4,7]

//console.log(filtering(array2));

//Q10. Write a program to flatten a nested array to single level using arrow functions.

//Q11. Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)

class Node{
  constructor(data, next = null){
      this.data = data,
      this.next = next
  }
}

class LinkedList{
  constructor(){
      this.head = null;
  }
}

let list = new LinkedList();

//Add first
LinkedList.prototype.addFirst = function(data){
      let newNode = new Node(data);
  
      newNode.next = this.head;
      
      this.head = newNode;
      return this.head;
  }

//Add last
LinkedList.prototype.addLast = function(data){
      
      let newNode = new Node(data);
  
      if(!this.head){
          this.head = newNode;
          return this.head;
      }
  
     let tail = this.head;
     while(tail.next !== null){
          tail = tail.next;
     }
     tail.next = newNode;
     return this.head;
  }

//for lenght

//Q12. Implement Map and Set using Es6

// set 
let setVar = new Set();
setVar.add(4);
setVar.add("agsywddw");
setVar.add({
x:200,y:8272
});
console.log(setVar);
console.log(setVar.size);
console.log(setVar.has(4));

// map
let map = new Map();
let key1 = "string";
let key2 = {a: 'key'};
let key3 = function() {};
map.set(key1,"this is string");
map.set(key2,"object key");
map.set(key3,"function mapping")
map.set("dif","div");
console.log(map);

//Q13. Implementation of stack (using linked list)
