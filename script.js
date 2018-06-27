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

document.body.insertAdjacentHTML('beforeend','<div id="console" style="position: fixed;height: 100px;width: 300px;padding: 30px;color: gray;background: white;border-radius: 4px;box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);bottom: 30px;left: 30px;z-index: 1;font-family: \'arial\';"></div>');

window.log = function () {

  percentage = this.viewability(adElement, document.hasFocus())
  adIsViewable = percentage > 0 ? true : false;
  viewabilityTime = adIsViewable ? viewabilityTime + 0.5 : viewabilityTime;

  document.getElementById("console").innerHTML = "<div>Ad is viewable: " + adIsViewable + "</div> <div>Viewability time of the ad in sec: " + viewabilityTime.toFixed(1) + "</div><div>Percentage: " + percentage + "%</div><div>Click counter: " + clickCounter + "</div><br/><div style='font-size: 12px;font-weight: bold;'>You can see these information also in the console.</div>"

  console.clear()
  console.log("Ad is viewable: ", adIsViewable, "\nViewability time of the ad in sec:", viewabilityTime.toFixed(1), "\nPercentage:", percentage + '%', '\nClick counter:', clickCounter);
};


function viewability(element, hasFocus) {
  var percentX = (element.offsetWidth - Math.min(element.offsetWidth, Math.max(0, window.scrollX - element.offsetLeft))) * 100 / element.offsetWidth
  var percentY = (element.offsetHeight - Math.min(element.offsetHeight, Math.max(0, window.scrollY - element.offsetTop))) * 100 / element.offsetHeight
  return hasFocus ? (((percentX * percentY) / 100).toFixed()) : 0
}


function countCLick(event) {
  clickCounter++
}



