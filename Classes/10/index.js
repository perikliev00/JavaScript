function Car(array) {
    class Cars {
        constructor(brand,model,numbers) {
            this.brand=brand;
            this.model=model;
            this.numbers=numbers;
        }
    }
    let arr=[];
    for(let i=0;i<array.length;i++) {
        let elements=array[i].split(' | ');
        arr.push(new Cars(elements[0],elements[1],elements[2]));
    }
    for(let i=0;i<arr.length;i++) {
        for(let x=i+1;x<arr.length;x++) {
            if(arr[i].brand==arr[x].brand&&arr[i].model==arr[x].model) {
                arr[i].numbers=Number(arr[i].numbers)+Number(arr[x].numbers)
                arr.splice(x,1);
            }
        }
    }
    for(let i=0;i<arr.length;i++) {
        console.log(arr[i].brand);
        console.log(`###${arr[i].model} -> ${arr[i].numbers}`)
        for(let x=i+1;x<arr.length;x++) {
            if(arr[i].brand==arr[x].brand) {
                console.log(`###${arr[x].model} -> ${arr[x].numbers}`)
                arr.splice(x,1);
            }
        }
    }
}
Car(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)

