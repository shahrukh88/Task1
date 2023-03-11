function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];

       
    } 
    else  if(result.length == array1[x].length)
    {
        const result2 =array1[x]; 
        const count = result.match(/[aeiou]/gi).length;
        
        const count2 = result2.match(/[aeiou]/gi).length;
         if(count>count2){
            result = array1[x];
          }
        else if(count< count2){
            result = result2;
         
        }
   }        
        
    
  }
  return result;
}

console.log(find_longest_word('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers'));



