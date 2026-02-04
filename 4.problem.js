// Problem 4: Shopping Bill Calculator
// Function name: calcBill(prices, items)
// Statement:  Calculate total bill amount and count how many times each item appears.
// Test case 1
// Input:
//      prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
//      items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

// Output:
// {
//   total: 376,
//   itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
// }

function calcBill(prices, items){
    // console.log(prices, item)
    let itemCount = {}
    for(const item of items){
        // console.log(item)
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        }
        else{
            itemCount[item] = 1;
        }

    }
    let total = 0;
    for(const itm in prices){
        // console.log(itm)
        const price = prices[itm]
        const quantity = itemCount[itm]
        const priceWithQ = price* quantity
         total = total+priceWithQ;
        // console.log(priceWithQ)
    }

    // console.log(itemCount)
    return{
        total: total,
        itemCount: itemCount
    }
}


const prices = { pen: 10, book: 50 }
const item = ["pen", "pen", "book", "pen"];
const input = calcBill(prices, item)
console.log(input)
