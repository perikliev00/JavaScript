function createPerson(firstName,lastName) {
    return {
        firstName:firstName,
        lastName:lastName,
        get fullName() {
            return this.firstName+' '+this.lastName;
        },
        set fullName(value) {
            let splitName=value.split(' ');
            if(this.firstName!=splitName[0]||this.lastName!=splitName[1]) {
                value=splitName[0]+' '+splitName[1];  
            }
            if(splitName.length==2) {
            this.firstName=splitName[0];
            this.lastName=splitName[1];
            }
        }
    }
}
