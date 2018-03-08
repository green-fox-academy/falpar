export class SumOfInt {
    sum(list: any []){
        let sumList:number = 0;
        for(let i = 0; i < list.length; i++){
            if (Number.isInteger(list[i])) {
                sumList += list[i];
            }
        }
        return sumList;
    }
}

// let newSum = new SumOfInt();
//  console.log(newSum.sum([1, 3, '1', 2]));