class Helpers {
  getUsersByStatus(response, status) {
    const users = [];
    for (let apiUser of response.users) {
      if (
        apiUser.role.status === status &&
        apiUser.role.description !== null &&
        apiUser.role.description.trim() !== ""
      ) {
        users.push(apiUser.name);
      }
    }

    return users;
  }

  //Alice, David ]
  getUsersByRole(response, role, roleId) {
    const users = [];
for(let apiUser of response.users){
  if(
    apiUser.role.name === role &&
    apiUser.role.id === roleId &&
    apiUser.role.description.trim() === "System administrator"
  ){
    users.push(apiUser.name)
  }
}
    return users;
  }
  // [ Alice, Karen ]
  getUsersByEmailDomain(response, domain) {
    const users = [];

    for (let apiUser of response.users) {
      const fullDomain = apiUser.email.split("@")[1];
      const domainName = fullDomain.split(".")[0];
      if (domainName === domain.toLowerCase().trim()) {
        users.push(apiUser.name);
      }
    }
   

    return users;
  }

  getUserBalanceByCurrency(response, currency) {
    const balances = [];
    for (let apiUser of response.users) {
     
      if (apiUser.currency === currency.trim().toUpperCase()) {
       
        const numericBalance = parseInt(
          apiUser.balance.replace("$", "").trim(),
          10
        );
        balances.push(numericBalance); 
      }
    }

    return balances;
  }
}
export default new Helpers();
