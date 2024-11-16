import helperMethods from "./helper.methods.js";
import response from './response.matches.json' assert { type: 'json' };


console.log(helperMethods.filterMatchesByLocationAndStatus(response)); 
console.log(helperMethods.filterMatchesByCoatingAndShower(response)); 
console.log(helperMethods.filterMatchesByLocationAndPrice(response)); 
console.log(helperMethods.filterMatchesByCreatorFeeAndStatus(response)); 
console.log(helperMethods.filterMatchesByCoveringAndDressingRoom(response)); 