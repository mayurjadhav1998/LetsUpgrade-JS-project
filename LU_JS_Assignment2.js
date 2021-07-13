c5=0
c3=0
for(i = 1; i<=100; i++){
c3=c3+1
c5=c5+1
S= ""
if(c3==3){
S = S+"Fizz"
c3=0
}
if(c5==5){
S = S+"Buzz"
 c5=0
}
if(S==""){
console.log(i)
}
else{
console.log(S)
}
}
