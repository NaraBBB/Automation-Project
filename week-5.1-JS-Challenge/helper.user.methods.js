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
    for (let apiUser of response.users) {
      if (
        apiUser.role.name === role &&
        apiUser.role.id === roleId &&
        apiUser.role.description.trim() === "System administrator"
      ) {
        users.push(apiUser.name);
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
    response.users.filter((apiUser) => {
      if (apiUser.currency === currency) {
        const balance = apiUser.balance.replace("$", "");
        balances.push(Number(balance));
      }
    });
    return balances;
  }
}
export default new Helpers();
