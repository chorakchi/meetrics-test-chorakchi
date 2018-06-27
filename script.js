/************************************************************************************************
 *                                                                                              *
 *                              VARIABLES DECLARATION                                           *
 *                                                                                              *
 ************************************************************************************************/
var adIsViewable = false,
  viewabilityTime = 0.0,
  adElement = document.getElementById("ad"),
  clickCounter = 0,
  percent;

  adElement.onclick = countCLick;

/**
 * Logs the viewability values in the console
 *
 * @override
 */

  

window.log = function () {

  percentage = this.viewability(adElement, document.hasFocus())
  adIsViewable = percentage > 0  ?  true :  false;
  viewabilityTime = adIsViewable  ?  viewabilityTime + 0.5 :  viewabilityTime;

  console.clear()
  console.log("Ad is viewable: ", adIsViewable, "\nViewability time of the ad in sec:", viewabilityTime.toFixed(1), "\nPercentage:", percentage + '%','\nClick counter:',clickCounter);
};



function viewability (element, hasFocus) {
  var percentX =    (element.offsetWidth-Math.min(element.offsetWidth ,Math.max(0,window.scrollX-element.offsetLeft ))) * 100 /element.offsetWidth
  var percentY =    (element.offsetHeight-Math.min(element.offsetHeight ,Math.max(0,window.scrollY-element.offsetTop ))) * 100 /element.offsetHeight
   return hasFocus ? (((percentX * percentY) / 100 ).toFixed()) : 0
}


function countCLick(event) {
  clickCounter++
}
