class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable=spaceAvailable;
        this.plants=[];
        this.storage=[];
    }
    addPlant(plantName,spaceRequired) {
        if(spaceRequired>=this.spaceAvailable) {
            throw new Error('Not enought space in the garden');
        } else {
            this.spaceAvailable=this.spaceAvailable-spaceRequired;
            let obj={
                plantName:plantName,
                spaceRequired:spaceRequired,
                ripe:false,
                quantity:0
            }
            this.plants.push(obj);
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }
    ripenPlant(plantName,quantity) {
        for(let i=0;i<this.plants.length;i++) {
            if(i==this.plants.length-1 && this.plants[i].plantName!=plantName) {
                throw new Error(`There is no ${plantName} in the garden.`);
            } else if(this.plants[i].plantName==plantName&&this.plants[i].ripe==true) {
                throw new Error(`The ${plantName} is already ripe.`)
            } else if(quantity<=0) {
                throw new Error("The quantity cannot be zero or negative.");
            } else if(this.plants[i].plantName==plantName) {
                this.plants[i].quantity=this.plants[i].quantity+quantity;
                this.plants[i].ripe=true;
                if(quantity==1) {
                    return `${quantity} ${plantName} has successfully ripened.`
                } else {
                    return `${quantity} ${plantName}s have successfully ripened.`
                }
            }
        }
    }
    harvestPlant(plantName) {
        for(let i=0;i<this.plants.length;i++) {
            if(this.plants[i].plantName!=plantName&&i==this.plants.length-1) {
                throw new Error(`There is no ${plantName} in the garden.`);
            }  else if(this.plants[i].plantName==plantName&&this.plants[i].ripe==false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
            } else if(this.plants[i].plantName==plantName&&this.plants[i].ripe==true) {
                let obj= {
                    plantName:plantName,
                    quantity:this.plants[i].quantity
                };
                this.storage.push(obj);
                this.spaceAvailable=this.spaceAvailable+this.plants[i].spaceRequired;
                this.plants.splice(i,1);
                return `The ${plantName} has been successfully harvested.`;
            }
        }
    }
    generateReport() {
        let space=`The garden has ${this.spaceAvailable} free space left`;
        let plantsInGarden=`Plants in the garden: `;
        let plantsStorage=``;
        let arr=[];
        for(let i=0;i<this.plants.length;i++) {
            arr.push(this.plants[i].plantName);
        }
        arr.sort();
        for(let i=0;i<arr.length;i++) {
            plantsInGarden=plantsInGarden+`${arr[i]}, `
        }
        if(this.storage<1) {
            plantsStorage="Plants in storage: The storage is empty."
        } else {
            plantsStorage='Plants in storage: '
            for(let i=0;i<this.storage.length;i++) {
                plantsStorage=plantsStorage+this.storage[i].plantName+` (${this.storage[i].quantity}), `
            }
        }
        return `${space} \n ${plantsInGarden} \n ${plantsStorage}`;
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


