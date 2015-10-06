var zeroMatrix = function(a){

	rows = [];
	cols = [];
 
	for(i = 0; i<a.length; i++){

			for(j=0; j<a[i].length; j++){

				if (a[i][j]==0){

					if(rows[i] !=true ) rows[i] = true;
					if(cols[j] !=true ) cols[j] = true;
				}
			}
	}

	for (i = 0; i<a.length; i++){

		if (rows[i]){
			for(b=0;b<a.length;b++){
			a[i][b]=0
			}
		}
		
	}

	for(j=0; j<a.length; j++){

		for(b=0;b<a[j].length;b++){
			if(cols[b])a[j][b]=0;
		}
	}

}




var combinations = 0

var makeJump = function(stepsLeft){

	if (stepsLeft == 0 || stepsLeft ==1){
		return combinations + 1;
	} 

	else if (stepsLeft==2){

		return combinations + 2;
	}

	else if (stepsLeft ==3){

		return combinations + 4;
	}

	else {

		for(jumps = 3; jumps > 0 ; jumps--){

			combinations = makeJump(stepsLeft-jumps);
		}

	}

		return combinations;
}






var stockProfit = function(stock_prices_yesterday){
    
    
    	var returnBuyTime = 0;
        var returnSellTime = 1;
    	var tempMax;
    	
    	for (buyTime in stock_prices_yesterday){
            tempMax = buyTime+1;
         	for (i = buyTime; i<stock_prices_yesterday.length; i++){
                if (stock_prices_yesterday[i]>stock_prices_yesterday[tempMax]){
                 	tempMax= i;    
                }
                
                if(stock_prices_yesterday[returnSellTime] - stock_prices_yesterday[returnBuyTime] <
                stock_prices_yesterday[tempMax] - stock_prices_yesterday[buyTime]){
                 	returnBuyTime = buyTime;
                    returnSellTime = tempMax;
                }
            }
         
        }
    
    return stock_prices_yesterday[returnSellTime] - stock_prices_yesterday[returnBuyTime];
}



var a = [5,500,2,3];
                   
console.log(stockProfit(a));                   
                   




var bigIntMultiply = function() {

var a = [1,2,3,2,3,4,3,5,4,3,2,3,5,6];
var b = [4,6,4,6,8,0,4,5,4,5,6];


var carryOver = 0;
var zeroIterator = 0;
var productArray = [];

var smallestArray = (a.length>b.length)? b : a;

var largestArray = (a.length<b.length)? b : a;
var prodValue= [];
var values;

for (i=smallestArray.length; i>0; i--){

	for(j=largestArray.length; j>0; j--){

		temp= "" + largestArray[j-1]*smallestArray[i-1];
		values = temp.split('');

		prodValue.unshift(parseInt(values[1])+carryOver);
		carryOver=parseInt(values[0]);
	}

	productArray.push(prodValue * (10^0));
	zeroIterator++;

}





}


var twoDRotateFail = function(a){

	var tempArray= [];
	var tempValue;
	var layer = 0;
	var n = a[0].length;

	for (layer = 0; layer< n/2; layer++){

		// top store/switch
		for(j = 0; j < n-layer; j++){

			tempArray[j] = a[layer][j];
			
		}

		//right switch/store

			for(j = 0; j < n-layer; j++){

			tempValue = tempArray[j]
			tempArray[j] =  a[j][n-layer-1]
			a[j][n-layer-1] = tempValue;
		
		}


		//bottom switch/store
		for(j = 0; j < n-layer; j++){

			tempValue = tempArray[j]
			tempArray[j] =  a[n-layer-1][n-layer-j-1]
			a[n-layer-1][n-layer-j-1] = tempValue;
		}


		//left switch/store

			for(j = 1; j < n-layer; j++){
			tempValue = tempArray[j]
			tempArray[j] =  a[n-layer-j-1][layer]
			a[n-layer-j-1][layer] = tempValue;
			a[layer][j] = tempArray[j]

		}


	}



}



var twoDRotate = function(a){

	var tempArray= [];
	var tempValue;
	var layer = 0;
	var n = a[0].length;

	for (layer = 0; layer< n/2; layer++){

		// top store/switch
		for(j = 0; j < n-layer-1; j++){

			tempArray = [];
			tempArray.push(a[layer][j+layer]);
			tempArray.push(a[j+layer][n-layer-1]);
			tempArray.push(a[n-layer-1][n-layer-j-1]);
			tempArray.push(a[n-layer-j-1][layer]);
			
			a[j+layer][n-layer-1] = tempArray[0];
			a[n-layer-1][n-layer-j-1] = tempArray[1];
			a[n-layer-j-1][layer]= tempArray[2];
			a[layer][j+layer] = tempArray[3];

			
		}
	}

}



var reverseSentence= function(){



}


//find shift of circulatory sorted array with duplicates
var findShift = function (a){


	n= a.length;
	high= n-1;
	low = 0;
	result = n-1;
	
	while(low<=high){
		
		mid = Math.floor((high+low)/2);
		if (a[mid] < a[result] || a[mid] == a[result]){

			result = mid; // new lowest
			high = mid-1// search left of the element to see if anything is lower or equal

		}
		else {
			
			low = mid +1;

		}

	}

	return result;


}

//spiral print 2D array




printSpiralArray = function (a){

	var n= a.length;
	var offset = 0;
	var resultArray = [];
	var termination = (n%2==0)? n/2 : n/2+1
	
	while(termination >=0){

		//traverse top
		for(i=offset;i<n;i++){
			resultArray.push(a[offset][i]);
			}
		// traverse right
		for(i=offset+1;i<n;i++){

			resultArray.push(a[i][n-1]);
			}

		// traverse bottom
		for(i=n-2;i>=offset;i--){

			resultArray.push(a[n-1][i]);

			}


		// traverse left
		for(i=n-2;i>=offset+1;i--){

			resultArray.push(a[i][offset]);

			}
	
		n--;
		offset++;
		termination--;


		}


		return resultArray;


}


var printArrayDiaganols = function(a){

	var n = a.length;
	var diagonals= 2*n-1;
	var iterator = 1;
	var resultArray = [];
	var direction = -1;
	var currRow = 0;
	var currCol = 0;

	for(i=0;i<diagonals;i++){

		for(j=0; j< iterator; j++){
			if(direction == 1){
				resultArray.push(a[currRow][currCol]);
				if(i<n-1){
				currRow = (currRow==0)? 0 : currRow-1;
				currCol = (currCol== n-1) ? n-1 : currCol+1;
				} else {
				currRow = (currRow==n-iterator-1)? n-iterator-1 : currRow-1;
				currCol = (currCol== n-1) ? n-1 : currCol+1;
				}
				
				}
			else{
				resultArray.push(a[currRow][currCol]);
				if(i<n-1){
				currRow = (currRow==n-1)? n-1 : currRow+1;
				currCol = (currCol==0)? 0 : currCol-1;
					} else{
					currRow = (currRow==n-1)? n-1 : currRow+1;
					currCol = (currCol==n-iterator-1)? n-iterator-1 : currCol-1;

					}
				}
		}
		if(i< n-1){
		iterator++;
		} else {
		iterator--;
		}
		direction = -direction
	}
	return resultArray;
}




var BloomFilter = function(n, hashFunctions){

	var values = new Array(n);

	var add = function(elem){

		for(hashFunction in hashFunctions){

			var index = hashFunction(elem)%n;
			if(!values[index]){
				values[index]=1;
			}

		}


	} 


	var constains = function(elem){

		for(hashFunction in hashFunctions){

			var index = hashFunction(elem)%n;

			if(values[index]!=1) return false;

		}

		return true;
	}




}









var printLevels= function(root){

	var printArray = [];


	printArray.push(root.value)

	//Helper function which iterates through array and prints values with spaces
	print(printArray);
	printArray.empty();

	var node = root;
	var nextParentArray = [root];
	var newNextParrentArray;
	var moreLevels = false;

	while (!nextParrentArray.length==0){
		newNextParrentArray= [];
	for(node in nexParentArray){

		if(node.left){
			 printArray.push(node.left);
			 newNextParentArray.push(node.left);
			
		} 
		if (node.right)
			{
				printArray.push(node.right);
				newNextParentArray.push(node.right);
			} 


	}
	print(printArray);
	printArray.empty();
	nextParrentArray = newNextParrentArray;

	}



}

var print = function(a){
	var printString = '';
	for (value in a){

		printString = printString + ' ' + value;
	}
	console.log(printString);


}










