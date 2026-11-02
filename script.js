function calculateMinCost() {
  //your code here
  let data=document.getElementById("rope-lengths").value
   let arr=data.split(",")
	arr.sort((a,b)=>a-b)
  let finalCost=0
	for(let i=0;i<arr.length;i++)
		{
			let cost=Number(arr[i])+Number(arr[i+1])
			finalCost+=cost+Number(arr[i])
		}
  let result= document.getElementById("result")
	result.innerText=finalCost
}  
