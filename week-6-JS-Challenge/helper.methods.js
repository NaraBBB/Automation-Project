class Helpers {
  filterMatchesByLocationAndStatus(response) {
    const users = response.matches
      .filter(apiMatches =>
          apiMatches.locationlvl1 === "Germany" &&
          apiMatches.status === "canceled")
      .map((apiMatches) => apiMatches.matchId);

    return users;
  }

  filterMatchesByCoatingAndShower(response) {
    const result = response.matches
      .filter(apiMatches =>
          apiMatches.matchInfo.coating === "Main.artificialGrass" &&
          apiMatches.matchInfo.isShower === true)
      .map((apiMatches) => apiMatches.matchId);

    return result;
  }

  filterMatchesByLocationAndPrice(response) {
    const result = response.matches
      .filter(words => words.locationlvl2 === "Berlin" && words.price > 0)
      .map((newArray) => newArray.matchId);

    return result;
  }

  filterMatchesByCreatorFeeAndStatus(response) {
    const result = response.matches
    .filter(apiMatches => 
        apiMatches.creatorFeePerPlayer > 0 &&
        apiMatches.status === "canceled")
    .map(newArray => newArray.matchId)
    
    return result;
  }

  filterMatchesByCoveringAndDressingRoom(response) {
    const result = response.matches
    .filter(apiMatches => 
        apiMatches.matchInfo.covering === "Main.onTheStreet" &&
        apiMatches.matchInfo.isDressingRoom === true)
    .map(newArray => newArray.matchId)
    return result;
  }
}

export default new Helpers();
