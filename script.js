function bug1()
{
  var string = "";
  for(var i = 1; i < 11; i++)
   {
      string = string + i + " ";
   } 
 string = string.substring(0, string.length-1);
  console.log(string);
  //should print: "1 2 3 4 5 6 7 8 9 10"
}