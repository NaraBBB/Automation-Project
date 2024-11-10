class Helpers {

    // // [ Alice, Eva, Frank, Henry, Karon ]
    getUsersByAge(response, ageMin, ageMax) {
        const users = [];
for(let apiUser of response.users){
    if(apiUser.age >= ageMin && apiUser.age <=ageMax){
        users.push(apiUser.name)
    }
}


        // Your code here

        return users;
    }
//[ Alice, Eva, Henry ]
    getUsersByRole(response, role) {
        const users = [];
for(let apiUser of response.users){
    if(apiUser.role === role){
        users.push(apiUser.name)
    }
}
        // Your code here

        return users;
    }
//[ 'Alice', 'David', 'Henry' ]
    getUsersByCountry(response, country) {
        const users = [];
for(let apiUser of response.users){
    if(apiUser.country === country){
        users.push(apiUser.name)
    }
}
        // Your code here

        return users;
    }
   
    getUsersByBalance(response, balanceMin, balanceMax){
        const users = [];
        for(let apiUser of response.users){
            if(apiUser.balance >= balanceMin &&
                apiUser.balance <= balanceMax ){
                users.push(apiUser.name)  
            }
        }
        return users
    } 
}

export default new Helpers()