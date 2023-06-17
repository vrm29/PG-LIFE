
let arr=[1,2,3,4,5];
let squares=arr.filter(x=>x* x%2==0);
squares.forEach(function(element)
{
    document.write(element+" ");

});