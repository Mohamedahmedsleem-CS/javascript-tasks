// =================> TASK 1 <===================

// function myFunc(a) {
//   var sum =0
// for (var i = 0 ; i <9; i++)
// {
//   sum+=a[i]
// }

//   return  document.write ("The average is " +sum/a.length +" the sum is " + sum );
  
  
// }


// var a = [1,2,3,4,5,6,7,8,9,10]
// // document.write ("The average is " +myFunc(a));

// myFunc(a)


//=================> TASK 2 <===================

// function area(b, h){
//   return document.write("the area of the triangle is "+ (0.5*(b*h)))
// }

// area(5,7);

//=================> TASK 3 <===================

// function age(years){
//   console.log('You are '+ years*365 +' days old');
// }

// age(10);

//=================> TASK 4 <===================

// function sum(x, y) {
//   var  z= x + y;
//   return document.write("the sum of "+ x + " + "+y+" is "+ z);
//return document.write("the sum of "+ x + " + "+y+" is "+ (x+y));
// }

// sum(5, 7);

//=================> TASK 5 <===================

// function fristElememnt(arr){
//   return document.write(arr[0]);
// }

// var x = [1,2,3,4,5,6,7,8,9,10];
// fristElememnt(x);

//=================> TASK 6 <===================

// function show(nam){
//   return document.write("my full name is " + nam)
// }

// show("mohamed ahmed selim");

//=================> TASK 7 <===================

// function converter(h) {
//   return document.write(h+' hours equal to '+(h*60*60)+' seconds')
// }

// converter(1);

//=================> TASK 8 <===================

// function sumOfNumber(x, y, z, a){
//   j = x + y +  z + a ;
//   if  (j  > 360 ) {
//     return document.write('the sum of numbers is  :'+ j +' and it\'s true');}

//   else if (j == 360) {
//     return document.write('the sum of numbers is  :'+ j +' and it\'s equal ');
//   } 
//     else{
//       return document.write('the sum of numbers is  :'+ j +' and it\'s false');
//     }
//   }

// sumOfNumber(100,100,100,60)

//=================> TASK 9 <===================

// function test(a){
// if (a == 0) {
//   return document.write(true);
// }
// else {
//   return document.write(false);
// }
// }

// test(0)

//=================> TASK 10 <===================

// function mod(x, y){
//   return  document.write((x % y));
// }

// mod(21,2);

//=================> TASK 11 <===================

// function largestOfNumber(x, y, ){
  
//   if  (x  > y ) {
//     return document.write('The largest number is number 1: '+ x );}

//   else if (x <y) {
//     return document.write(' The largest number is number 2: '+ x );
//   } 
//     else{
//       return document.write('the number is equal');
//     }
//   }

// largestOfNumber(100,10);

//=================> TASK 12 <===================

// function chick(x){
//  if (typeof(x) =="number"){
//   document.write('This variable is a number') ;
//  }
//  else{
//   document.write('This variable is not a number');
//  }
// }
// var x = 100;

// chick(x);

//=================> TASK 13 <===================\

function getFullDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();


  return document.write(year+"-"+month+"-"+day);
}
getFullDate();
