function findCandidate(data,criteria) {
    data=JSON.stringify(data);
    data=data.substr(0,data.length);
    console.log(Array(data))
    let arr=[];
    criteria=JSON.stringify(criteria);
    criteria=criteria.substr(1,criteria.length-2)
    console.log(criteria);
    criteria=criteria.split('-');
    console.log(criteria[0]);
    for(let i=0;i<data.length;i++) {
        if(data[i][criteria[0]]==criteria[1]) {
                arr.push(data[i]);
            }
        }
        for (let i=0;i<arr.length;i++) {
            console.log(arr[i]);
        }
}
findCandidate([{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }], 
'gender-Female'
)