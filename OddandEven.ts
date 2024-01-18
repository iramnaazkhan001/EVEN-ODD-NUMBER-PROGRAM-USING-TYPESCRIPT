

// function EvenOddNumbers(): void {
//     for (let i = 1; i <= 50; i++) {
//       if (i % 2 === 0) {
//         console.log(`${i} is even number`);
//       } else {
//         console.log(`${i} is odd number`);
//       }
//     }
//   }
  
//   EvenOddNumbers();
  
let odd:number[]=[]
	let even:number[]=[]
	for(let i:number=1; i<=50; i++ ){
	    if(i%2===0){
	        even.push(i)
	    }
	    else{
	        odd.push(i)
	    }
	}
	console.log("Even numbers are: ", even)
	console.log("odd numbers are: ", odd)
