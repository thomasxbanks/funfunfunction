function fizzBuzz(length, fizzNumber, buzzNumber){
	var output
	for(var i=1;i<=length;i++){
		output = ''
		if(i%fizzNumber === 0){
			output+='Fizz'
		}
		else if(i%buzzNumber === 0){
			output+='Buzz'
		}
		else {
			output+=i
		}
    console.log(output)
	}
}

fizzBuzz(15, 3, 5)
