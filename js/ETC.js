/* //First Cut prices -- aka sometime in May
var dwarvenOil=430*3
var grainSolvent=dwarvenOil+825*4
var temperingAlloy=dwarvenOil+grainSolvent+3900*8
var embroidery=185*3
var elegantLining=embroidery+435*4
var dreughWax=embroidery+elegantLining+2750*8
var turpen=180*3
var mastic=turpen+450*4
var rosin=turpen+mastic+2650*8
var denata=160
var rekuta=720
var kuta=4500
*/

//Current as of 2015-05-31
var dwarvenOil=390*3
var grainSolvent=dwarvenOil+825*4
var temperingAlloy=dwarvenOil+grainSolvent+4500*8
var embroidery=120*3
var elegantLining=embroidery+380*4
var dreughWax=embroidery+elegantLining+2600*8
var turpen=120*3
var mastic=turpen+390*4
var rosin=turpen+mastic+2600*8
var denata=120
var rekuta=650
var kuta=4500

var headImpCost=0;
var chestImpCost=0;
var legImpCost=0;
var feetImpCost=0;
var shoulderImpCost=0;
var handImpCost=0;
var beltImpCost=0;
var shieldImpCost=0;
var w1ImpCost=0;
var w2ImpCost=0;
var w3ImpCost=0;


var headEnchCost=0;
var chestEnchCost=0;
var legEnchCost=0;
var feetEnchCost=0;
var shoulderEnchCost=0;
var handEnchCost=0;
var beltEnchCost=0;
var shieldEnchCost=0;
var w1EnchCost=0;
var w2EnchCost=0;
var w3EnchCost=0;

var headTotalCost=0;
var chestTotalCost=0;
var legTotalCost=0;
var feetTotalCost=0;
var shoulderTotalCost=0;
var handTotalCost=0;
var beltTotalCost=0;
var shieldTotalCost=0;
var w1TotalCost=0;
var w2TotalCost=0;
var w3TotalCost=0;

var totalCost=0;
//var finalCost=0;

function qualSelected(obj) {
	obj.style.backgroundColor=obj.options[obj.selectedIndex].style.backgroundColor
	switch(obj.id) {
		case "headqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					headImpCost = 0;
					break;
				case 1:
					headImpCost = dwarvenOil;
					break;
				case 2:
					headImpCost = grainSolvent;
					break;
				case 3:
					headImpCost = temperingAlloy;
					break;
				case 4:
					headImpCost = 0;
					break;
				case 5:
					headImpCost = embroidery;
					break;
				case 6:
					headImpCost = elegantLining;
					break;
				case 7:
					headImpCost = dreughWax;
					break;
				case 8:
					headImpCost = 0;
					break;
				case 9:
					headImpCost = embroidery;
					break;
				case 10:
					headImpCost = elegantLining;
					break;
				case 11:
					headImpCost = dreughWax;
					break;
			}
			break;
		case "chestqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					chestImpCost = 0;
					break;
				case 1:
					chestImpCost = dwarvenOil;
					break;
				case 2:
					chestImpCost = grainSolvent;
					break;
				case 3:
					chestImpCost = temperingAlloy;
					break;
				case 4:
					chestImpCost = 0;
					break;
				case 5:
					chestImpCost = embroidery;
					break;
				case 6:
					chestImpCost = elegantLining;
					break;
				case 7:
					chestImpCost = dreughWax;
					break;
				case 8:
					chestImpCost = 0;
					break;
				case 9:
					chestImpCost = embroidery;
					break;
				case 10:
					chestImpCost = elegantLining;
					break;
				case 11:
					chestImpCost = dreughWax;
					break;
			}
			break;	

		case "legqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					legImpCost = 0;
					break;
				case 1:
					legImpCost = dwarvenOil;
					break;
				case 2:
					legImpCost = grainSolvent;
					break;
				case 3:
					legImpCost = temperingAlloy;
					break;
				case 4:
					legImpCost = 0;
					break;
				case 5:
					legImpCost = embroidery;
					break;
				case 6:
					legImpCost = elegantLining;
					break;
				case 7:
					legImpCost = dreughWax;
					break;
				case 8:
					legImpCost = 0;
					break;
				case 9:
					legImpCost = embroidery;
					break;
				case 10:
					legImpCost = elegantLining;
					break;
				case 11:
					legImpCost = dreughWax;
					break;
			}
			break;	

		case "feetqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					feetImpCost = 0;
					break;
				case 1:
					feetImpCost = dwarvenOil;
					break;
				case 2:
					feetImpCost = grainSolvent;
					break;
				case 3:
					feetImpCost = temperingAlloy;
					break;
				case 4:
					feetImpCost = 0;
					break;
				case 5:
					feetImpCost = embroidery;
					break;
				case 6:
					feetImpCost = elegantLining;
					break;
				case 7:
					feetImpCost = dreughWax;
					break;
				case 8:
					feetImpCost = 0;
					break;
				case 9:
					feetImpCost = embroidery;
					break;
				case 10:
					feetImpCost = elegantLining;
					break;
				case 11:
					feetImpCost = dreughWax;
					break;
			}
			break;	

		case "shoulderqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					shoulderImpCost = 0;
					break;
				case 1:
					shoulderImpCost = dwarvenOil;
					break;
				case 2:
					shoulderImpCost = grainSolvent;
					break;
				case 3:
					shoulderImpCost = temperingAlloy;
					break;
				case 4:
					shoulderImpCost = 0;
					break;
				case 5:
					shoulderImpCost = embroidery;
					break;
				case 6:
					shoulderImpCost = elegantLining;
					break;
				case 7:
					shoulderImpCost = dreughWax;
					break;
				case 8:
					shoulderImpCost = 0;
					break;
				case 9:
					shoulderImpCost = embroidery;
					break;
				case 10:
					shoulderImpCost = elegantLining;
					break;
				case 11:
					shoulderImpCost = dreughWax;
					break;
			}
			break;	

	case "handqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					handImpCost = 0;
					break;
				case 1:
					handImpCost = dwarvenOil;
					break;
				case 2:
					handImpCost = grainSolvent;
					break;
				case 3:
					handImpCost = temperingAlloy;
					break;
				case 4:
					handImpCost = 0;
					break;
				case 5:
					handImpCost = embroidery;
					break;
				case 6:
					handImpCost = elegantLining;
					break;
				case 7:
					handImpCost = dreughWax;
					break;
				case 8:
					handImpCost = 0;
					break;
				case 9:
					handImpCost = embroidery;
					break;
				case 10:
					handImpCost = elegantLining;
					break;
				case 11:
					handImpCost = dreughWax;
					break;
			}
			break;	

		case "beltqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					beltImpCost = 0;
					break;
				case 1:
					beltImpCost = dwarvenOil;
					break;
				case 2:
					beltImpCost = grainSolvent;
					break;
				case 3:
					beltImpCost = temperingAlloy;
					break;
				case 4:
					beltImpCost = 0;
					break;
				case 5:
					beltImpCost = embroidery;
					break;
				case 6:
					beltImpCost = elegantLining;
					break;
				case 7:
					beltImpCost = dreughWax;
					break;
				case 8:
					beltImpCost = 0;
					break;
				case 9:
					beltImpCost = embroidery;
					break;
				case 10:
					beltImpCost = elegantLining;
					break;
				case 11:
					beltImpCost = dreughWax;
					break;
			}
			break;	

		case "shieldqual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					shieldImpCost = 0;
					break;
				case 1:
					shieldImpCost = turpen;
					break;
				case 2:
					shieldImpCost = mastic;
					break;
				case 3:
					shieldImpCost = rosin;
					break;
				
			}
			break;	

		case "w1qual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					w1ImpCost = 0;
					break;
				case 1:
					w1ImpCost = dwarvenOil;
					break;
				case 2:
					w1ImpCost = grainSolvent;
					break;
				case 3:
					w1ImpCost = temperingAlloy;
					break;
				case 4:
					w1ImpCost = 0;
					break;
				case 5:
					w1ImpCost = dwarvenOil;
					break;
				case 6:
					w1ImpCost = grainSolvent;
					break;
				case 7:
					w1ImpCost = temperingAlloy;
					break;
				case 8:
					w1ImpCost = 0;
					break;
				case 9:
					w1ImpCost = dwarvenOil;
					break;
				case 10:
					w1ImpCost = grainSolvent;
					break;
				case 11:
					w1ImpCost = temperingAlloy;
					break;
				case 12:
					w1ImpCost = 0;
					break;
				case 13:
					w1ImpCost = dwarvenOil;
					break;
				case 14:
					w1ImpCost = grainSolvent;
					break;
				case 15:
					w1ImpCost = temperingAlloy;
					break;
				case 16:
					w1ImpCost = 0;
					break;
				case 17:
					w1ImpCost = dwarvenOil;
					break;
				case 18:
					w1ImpCost = grainSolvent;
					break;
				case 19:
					w1ImpCost = temperingAlloy;
					break;
				case 20:
					w1ImpCost = 0;
					break;
				case 21:
					w1ImpCost = dwarvenOil;
					break;
				case 22:
					w1ImpCost = grainSolvent;
					break;
				case 23:
					w1ImpCost = temperingAlloy;
					break;
				case 24:
					w1ImpCost = 0;
					break;
				case 25:
					w1ImpCost = dwarvenOil;
					break;
				case 26:
					w1ImpCost = grainSolvent;
					break;
				case 27:
					w1ImpCost = temperingAlloy;
					break;
				case 28:
					w1ImpCost = 0;
					break;
				case 29:
					w1ImpCost = turpen;
					break;
				case 30:
					w1ImpCost = mastic;
					break;
				case 31:
					w1ImpCost = rosin;
					break;
				case 32:
					w1ImpCost = 0;
					break;
				case 33:
					w1ImpCost = turpen;
					break;
				case 34:
					w1ImpCost = mastic;
					break;
				case 35:
					w1ImpCost = rosin;
					break;
				case 36:
					w1ImpCost = 0;
					break;
				case 37:
					w1ImpCost = turpen;
					break;
				case 38:
					w1ImpCost = mastic;
					break;
				case 39:
					w1ImpCost = rosin;
					break;
				case 40:
					w1ImpCost = 0;
					break;
				case 41:
					w1ImpCost = turpen;
					break;
				case 42:
					w1ImpCost = mastic;
					break;
				case 43:
					w1ImpCost = rosin;
					break;
			}
			break;	

		case "w2qual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					w2ImpCost = 0;
					break;
				case 1:
					w2ImpCost = dwarvenOil;
					break;
				case 2:
					w2ImpCost = grainSolvent;
					break;
				case 3:
					w2ImpCost = temperingAlloy;
					break;
				case 4:
					w2ImpCost = 0;
					break;
				case 5:
					w2ImpCost = dwarvenOil;
					break;
				case 6:
					w2ImpCost = grainSolvent;
					break;
				case 7:
					w2ImpCost = temperingAlloy;
					break;
				case 8:
					w2ImpCost = 0;
					break;
				case 9:
					w2ImpCost = dwarvenOil;
					break;
				case 10:
					w2ImpCost = grainSolvent;
					break;
				case 11:
					w2ImpCost = temperingAlloy;
					break;
				case 12:
					w2ImpCost = 0;
					break;
				case 13:
					w2ImpCost = dwarvenOil;
					break;
				case 14:
					w2ImpCost = grainSolvent;
					break;
				case 15:
					w2ImpCost = temperingAlloy;
					break;
				case 16:
					w2ImpCost = 0;
					break;
				case 17:
					w2ImpCost = dwarvenOil;
					break;
				case 18:
					w2ImpCost = grainSolvent;
					break;
				case 19:
					w2ImpCost = temperingAlloy;
					break;
				case 20:
					w2ImpCost = 0;
					break;
				case 21:
					w2ImpCost = dwarvenOil;
					break;
				case 22:
					w2ImpCost = grainSolvent;
					break;
				case 23:
					w2ImpCost = temperingAlloy;
					break;
				case 24:
					w2ImpCost = 0;
					break;
				case 25:
					w2ImpCost = dwarvenOil;
					break;
				case 26:
					w2ImpCost = grainSolvent;
					break;
				case 27:
					w2ImpCost = temperingAlloy;
					break;
				case 28:
					w2ImpCost = 0;
					break;
				case 29:
					w2ImpCost = turpen;
					break;
				case 30:
					w2ImpCost = mastic;
					break;
				case 31:
					w2ImpCost = rosin;
					break;
				case 32:
					w2ImpCost = 0;
					break;
				case 33:
					w2ImpCost = turpen;
					break;
				case 34:
					w2ImpCost = mastic;
					break;
				case 35:
					w2ImpCost = rosin;
					break;
				case 36:
					w2ImpCost = 0;
					break;
				case 37:
					w2ImpCost = turpen;
					break;
				case 38:
					w2ImpCost = mastic;
					break;
				case 39:
					w2ImpCost = rosin;
					break;
				case 40:
					w2ImpCost = 0;
					break;
				case 41:
					w2ImpCost = turpen;
					break;
				case 42:
					w2ImpCost = mastic;
					break;
				case 43:
					w2ImpCost = rosin;
					break;
			}
			break;	
		case "w3qual":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					w3ImpCost = 0;
					break;
				case 1:
					w3ImpCost = dwarvenOil;
					break;
				case 2:
					w3ImpCost = grainSolvent;
					break;
				case 3:
					w3ImpCost = temperingAlloy;
					break;
				case 4:
					w3ImpCost = 0;
					break;
				case 5:
					w3ImpCost = dwarvenOil;
					break;
				case 6:
					w3ImpCost = grainSolvent;
					break;
				case 7:
					w3ImpCost = temperingAlloy;
					break;
				case 8:
					w3ImpCost = 0;
					break;
				case 9:
					w3ImpCost = dwarvenOil;
					break;
				case 10:
					w3ImpCost = grainSolvent;
					break;
				case 11:
					w3ImpCost = temperingAlloy;
					break;
				case 12:
					w3ImpCost = 0;
					break;
				case 13:
					w3ImpCost = dwarvenOil;
					break;
				case 14:
					w3ImpCost = grainSolvent;
					break;
				case 15:
					w3ImpCost = temperingAlloy;
					break;
				case 16:
					w3ImpCost = 0;
					break;
				case 17:
					w3ImpCost = dwarvenOil;
					break;
				case 18:
					w3ImpCost = grainSolvent;
					break;
				case 19:
					w3ImpCost = temperingAlloy;
					break;
				case 20:
					w3ImpCost = 0;
					break;
				case 21:
					w3ImpCost = dwarvenOil;
					break;
				case 22:
					w3ImpCost = grainSolvent;
					break;
				case 23:
					w3ImpCost = temperingAlloy;
					break;
				case 24:
					w3ImpCost = 0;
					break;
				case 25:
					w3ImpCost = dwarvenOil;
					break;
				case 26:
					w3ImpCost = grainSolvent;
					break;
				case 27:
					w3ImpCost = temperingAlloy;
					break;
				case 28:
					w3ImpCost = 0;
					break;
				case 29:
					w3ImpCost = turpen;
					break;
				case 30:
					w3ImpCost = mastic;
					break;
				case 31:
					w3ImpCost = rosin;
					break;
				case 32:
					w3ImpCost = 0;
					break;
				case 33:
					w3ImpCost = turpen;
					break;
				case 34:
					w3ImpCost = mastic;
					break;
				case 35:
					w3ImpCost = rosin;
					break;
				case 36:
					w3ImpCost = 0;
					break;
				case 37:
					w3ImpCost = turpen;
					break;
				case 38:
					w3ImpCost = mastic;
					break;
				case 39:
					w3ImpCost = rosin;
					break;
				case 40:
					w3ImpCost = 0;
					break;
				case 41:
					w3ImpCost = turpen;
					break;
				case 42:
					w3ImpCost = mastic;
					break;
				case 43:
					w3ImpCost = rosin;
					break;
			}
			break;	
		case "headench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					headEnchCost = 0;
					break;
				case 1:
					headEnchCost = denata;
					break;
				case 2:
					headEnchCost = rekuta;
					break;
				case 3:
					headEnchCost = kuta;
					break;
				case 4:
					headEnchCost = 0;
					break;
				case 5:
					headEnchCost = denata;
					break;
				case 6:
					headEnchCost = rekuta;
					break;
				case 7:
					headEnchCost = kuta;
					break;
				case 8:
					headEnchCost = 0;
					break;
				case 9:
					headEnchCost = denata;
					break;
				case 10:
					headEnchCost = rekuta;
					break;
				case 11:
					headEnchCost = kuta;
					break;
			}
			break;
		case "chestench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					chestEnchCost = 0;
					break;
				case 1:
					chestEnchCost = denata;
					break;
				case 2:
					chestEnchCost = rekuta;
					break;
				case 3:
					chestEnchCost = kuta;
					break;
				case 4:
					chestEnchCost = 0;
					break;
				case 5:
					chestEnchCost = denata;
					break;
				case 6:
					chestEnchCost = rekuta;
					break;
				case 7:
					chestEnchCost = kuta;
					break;
				case 8:
					chestEnchCost = 0;
					break;
				case 9:
					chestEnchCost = denata;
					break;
				case 10:
					chestEnchCost = rekuta;
					break;
				case 11:
					chestEnchCost = kuta;
					break;
			}
			break;
		case "legench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					legEnchCost = 0;
					break;
				case 1:
					legEnchCost = denata;
					break;
				case 2:
					legEnchCost = rekuta;
					break;
				case 3:
					legEnchCost = kuta;
					break;
				case 4:
					legEnchCost = 0;
					break;
				case 5:
					legEnchCost = denata;
					break;
				case 6:
					legEnchCost = rekuta;
					break;
				case 7:
					legEnchCost = kuta;
					break;
				case 8:
					legEnchCost = 0;
					break;
				case 9:
					legEnchCost = denata;
					break;
				case 10:
					legEnchCost = rekuta;
					break;
				case 11:
					legEnchCost = kuta;
					break;
			}
			break;
		case "feetench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					feetEnchCost = 0;
					break;
				case 1:
					feetEnchCost = denata;
					break;
				case 2:
					feetEnchCost = rekuta;
					break;
				case 3:
					feetEnchCost = kuta;
					break;
				case 4:
					feetEnchCost = 0;
					break;
				case 5:
					feetEnchCost = denata;
					break;
				case 6:
					feetEnchCost = rekuta;
					break;
				case 7:
					feetEnchCost = kuta;
					break;
				case 8:
					feetEnchCost = 0;
					break;
				case 9:
					feetEnchCost = denata;
					break;
				case 10:
					feetEnchCost = rekuta;
					break;
				case 11:
					feetEnchCost = kuta;
					break;
			}
			break;
		case "shoulderench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					shoulderEnchCost = 0;
					break;
				case 1:
					shoulderEnchCost = denata;
					break;
				case 2:
					shoulderEnchCost = rekuta;
					break;
				case 3:
					shoulderEnchCost = kuta;
					break;
				case 4:
					shoulderEnchCost = 0;
					break;
				case 5:
					shoulderEnchCost = denata;
					break;
				case 6:
					shoulderEnchCost = rekuta;
					break;
				case 7:
					shoulderEnchCost = kuta;
					break;
				case 8:
					shoulderEnchCost = 0;
					break;
				case 9:
					shoulderEnchCost = denata;
					break;
				case 10:
					shoulderEnchCost = rekuta;
					break;
				case 11:
					shoulderEnchCost = kuta;
					break;
			}
			break;
		case "handench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					handEnchCost = 0;
					break;
				case 1:
					handEnchCost = denata;
					break;
				case 2:
					handEnchCost = rekuta;
					break;
				case 3:
					handEnchCost = kuta;
					break;
				case 4:
					handEnchCost = 0;
					break;
				case 5:
					handEnchCost = denata;
					break;
				case 6:
					handEnchCost = rekuta;
					break;
				case 7:
					handEnchCost = kuta;
					break;
				case 8:
					handEnchCost = 0;
					break;
				case 9:
					handEnchCost = denata;
					break;
				case 10:
					handEnchCost = rekuta;
					break;
				case 11:
					handEnchCost = kuta;
					break;
			}
			break;
		case "beltench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					beltEnchCost = 0;
					break;
				case 1:
					beltEnchCost = denata;
					break;
				case 2:
					beltEnchCost = rekuta;
					break;
				case 3:
					beltEnchCost = kuta;
					break;
				case 4:
					beltEnchCost = 0;
					break;
				case 5:
					beltEnchCost = denata;
					break;
				case 6:
					beltEnchCost = rekuta;
					break;
				case 7:
					beltEnchCost = kuta;
					break;
				case 8:
					beltEnchCost = 0;
					break;
				case 9:
					beltEnchCost = denata;
					break;
				case 10:
					beltEnchCost = rekuta;
					break;
				case 11:
					beltEnchCost = kuta;
					break;
			}
			break;
		case "shieldench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					shieldEnchCost = 0;
					break;
				case 1:
					shieldEnchCost = denata;
					break;
				case 2:
					shieldEnchCost = rekuta;
					break;
				case 3:
					shieldEnchCost = kuta;
					break;
				case 4:
					shieldEnchCost = 0;
					break;
				case 5:
					shieldEnchCost = denata;
					break;
				case 6:
					shieldEnchCost = rekuta;
					break;
				case 7:
					shieldEnchCost = kuta;
					break;
				case 8:
					shieldEnchCost = 0;
					break;
				case 9:
					shieldEnchCost = denata;
					break;
				case 10:
					shieldEnchCost = rekuta;
					break;
				case 11:
					shieldEnchCost = kuta;
					break;
			}
			break;
		case "w1ench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					w1EnchCost = 0;
					break;
				case 1:
					w1EnchCost = denata;
					break;
				case 2:
					w1EnchCost = rekuta;
					break;
				case 3:
					w1EnchCost = kuta;
					break;
				case 4:
					w1EnchCost = 0;
					break;
				case 5:
					w1EnchCost = denata;
					break;
				case 6:
					w1EnchCost = rekuta;
					break;
				case 7:
					w1EnchCost = kuta;
					break;
				case 8:
					w1EnchCost = 0;
					break;
				case 9:
					w1EnchCost = denata;
					break;
				case 10:
					w1EnchCost = rekuta;
					break;
				case 11:
					w1EnchCost = kuta;
					break;
				case 12:
					w1EnchCost = 0;
					break;
				case 13:
					w1EnchCost = denata;
					break;
				case 14:
					w1EnchCost = rekuta;
					break;
				case 15:
					w1EnchCost = kuta;
					break;
				case 16:
					w1EnchCost = 0;
					break;
				case 17:
					w1EnchCost = denata;
					break;
				case 18:
					w1EnchCost = rekuta;
					break;
				case 19:
					w1EnchCost = kuta;
					break;
				case 20:
					w1EnchCost = 0;
					break;
				case 21:
					w1EnchCost = denata;
					break;
				case 22:
					w1EnchCost = 0;
					break;
				case 23:
					w1EnchCost = denata;
					break;
				case 24:
					w1EnchCost = rekuta;
					break;
				case 25:
					w1EnchCost = kuta;
					break;
				case 26:
					w1EnchCost = 0;
					break;
				case 27:
					w1EnchCost = denata;
					break;
				case 28:
					w1EnchCost = rekuta;
					break;
				case 29:
					w1EnchCost = kuta;
					break;
				case 30:
					w1EnchCost = 0;
					break;
				case 31:
					w1EnchCost = denata;
					break;
				case 32:
					w1EnchCost = 0;
					break;
				case 33:
					w1EnchCost = denata;
					break;
				case 34:
					w1EnchCost = rekuta;
					break;
				case 35:
					w1EnchCost = kuta;
					break;
				case 36:
					w1EnchCost = 0;
					break;
				case 37:
					w1EnchCost = denata;
					break;
				case 38:
					w1EnchCost = rekuta;
					break;
				case 39:
					w1EnchCost = kuta;
					break;
				case 40:
					w1EnchCost = 0;
					break;
				case 41:
					w1EnchCost = denata;
					break;
				case 42:
					w1EnchCost = rekuta;
					break;
				case 43:
					w1EnchCost = kuta;
					break;
				case 44:
					w1EnchCost = 0;
					break;
				case 45:
					w1EnchCost = denata;
					break;
				case 46:
					w1EnchCost = rekuta;
					break;
				case 47:
					w1EnchCost = kuta;
					break;
				case 48:
					w1EnchCost = 0;
					break;
				case 49:
					w1EnchCost = denata;
					break;
				case 50:
					w1EnchCost = rekuta;
					break;
				case 51:
					w1EnchCost = kuta;
					break;
				
			}
			break;
		case "w2ench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					w2EnchCost = 0;
					break;
				case 1:
					w2EnchCost = denata;
					break;
				case 2:
					w2EnchCost = rekuta;
					break;
				case 3:
					w2EnchCost = kuta;
					break;
				case 4:
					w2EnchCost = 0;
					break;
				case 5:
					w2EnchCost = denata;
					break;
				case 6:
					w2EnchCost = rekuta;
					break;
				case 7:
					w2EnchCost = kuta;
					break;
				case 8:
					w2EnchCost = 0;
					break;
				case 9:
					w2EnchCost = denata;
					break;
				case 10:
					w2EnchCost = rekuta;
					break;
				case 11:
					w2EnchCost = kuta;
					break;
				case 12:
					w2EnchCost = 0;
					break;
				case 13:
					w2EnchCost = denata;
					break;
				case 14:
					w2EnchCost = rekuta;
					break;
				case 15:
					w2EnchCost = kuta;
					break;
				case 16:
					w2EnchCost = 0;
					break;
				case 17:
					w2EnchCost = denata;
					break;
				case 18:
					w2EnchCost = rekuta;
					break;
				case 19:
					w2EnchCost = kuta;
					break;
				case 20:
					w2EnchCost = 0;
					break;
				case 21:
					w2EnchCost = denata;
					break;
				case 22:
					w2EnchCost = 0;
					break;
				case 23:
					w2EnchCost = denata;
					break;
				case 24:
					w2EnchCost = rekuta;
					break;
				case 25:
					w2EnchCost = kuta;
					break;
				case 26:
					w2EnchCost = 0;
					break;
				case 27:
					w2EnchCost = denata;
					break;
				case 28:
					w2EnchCost = rekuta;
					break;
				case 29:
					w2EnchCost = kuta;
					break;
				case 30:
					w2EnchCost = 0;
					break;
				case 31:
					w2EnchCost = denata;
					break;
				case 32:
					w2EnchCost = 0;
					break;
				case 33:
					w2EnchCost = denata;
					break;
				case 34:
					w2EnchCost = rekuta;
					break;
				case 35:
					w2EnchCost = kuta;
					break;
				case 36:
					w2EnchCost = 0;
					break;
				case 37:
					w2EnchCost = denata;
					break;
				case 38:
					w2EnchCost = rekuta;
					break;
				case 39:
					w2EnchCost = kuta;
					break;
				case 40:
					w2EnchCost = 0;
					break;
				case 41:
					w2EnchCost = denata;
					break;
				case 42:
					w2EnchCost = rekuta;
					break;
				case 43:
					w2EnchCost = kuta;
					break;
				case 44:
					w2EnchCost = 0;
					break;
				case 45:
					w2EnchCost = denata;
					break;
				case 46:
					w2EnchCost = rekuta;
					break;
				case 47:
					w2EnchCost = kuta;
					break;
				case 48:
					w2EnchCost = 0;
					break;
				case 49:
					w2EnchCost = denata;
					break;
				case 50:
					w2EnchCost = rekuta;
					break;
				case 51:
					w2EnchCost = kuta;
					break;
				
			}
			break;
		case "w3ench":
			switch(obj.selectedIndex){
				case null:
				case "":
				case 0:
				default:
					w3EnchCost = 0;
					break;
				case 1:
					w3EnchCost = denata;
					break;
				case 2:
					w3EnchCost = rekuta;
					break;
				case 3:
					w3EnchCost = kuta;
					break;
				case 4:
					w3EnchCost = 0;
					break;
				case 5:
					w3EnchCost = denata;
					break;
				case 6:
					w3EnchCost = rekuta;
					break;
				case 7:
					w3EnchCost = kuta;
					break;
				case 8:
					w3EnchCost = 0;
					break;
				case 9:
					w3EnchCost = denata;
					break;
				case 10:
					w3EnchCost = rekuta;
					break;
				case 11:
					w3EnchCost = kuta;
					break;
				case 12:
					w3EnchCost = 0;
					break;
				case 13:
					w3EnchCost = denata;
					break;
				case 14:
					w3EnchCost = rekuta;
					break;
				case 15:
					w3EnchCost = kuta;
					break;
				case 16:
					w3EnchCost = 0;
					break;
				case 17:
					w3EnchCost = denata;
					break;
				case 18:
					w3EnchCost = rekuta;
					break;
				case 19:
					w3EnchCost = kuta;
					break;
				case 20:
					w3EnchCost = 0;
					break;
				case 21:
					w3EnchCost = denata;
					break;
				case 22:
					w3EnchCost = 0;
					break;
				case 23:
					w3EnchCost = denata;
					break;
				case 24:
					w3EnchCost = rekuta;
					break;
				case 25:
					w3EnchCost = kuta;
					break;
				case 26:
					w3EnchCost = 0;
					break;
				case 27:
					w3EnchCost = denata;
					break;
				case 28:
					w3EnchCost = rekuta;
					break;
				case 29:
					w3EnchCost = kuta;
					break;
				case 30:
					w3EnchCost = 0;
					break;
				case 31:
					w3EnchCost = denata;
					break;
				case 32:
					w3EnchCost = 0;
					break;
				case 33:
					w3EnchCost = denata;
					break;
				case 34:
					w3EnchCost = rekuta;
					break;
				case 35:
					w3EnchCost = kuta;
					break;
				case 36:
					w3EnchCost = 0;
					break;
				case 37:
					w3EnchCost = denata;
					break;
				case 38:
					w3EnchCost = rekuta;
					break;
				case 39:
					w3EnchCost = kuta;
					break;
				case 40:
					w3EnchCost = 0;
					break;
				case 41:
					w3EnchCost = denata;
					break;
				case 42:
					w3EnchCost = rekuta;
					break;
				case 43:
					w3EnchCost = kuta;
					break;
				case 44:
					w3EnchCost = 0;
					break;
				case 45:
					w3EnchCost = denata;
					break;
				case 46:
					w3EnchCost = rekuta;
					break;
				case 47:
					w3EnchCost = kuta;
					break;
				case 48:
					w3EnchCost = 0;
					break;
				case 49:
					w3EnchCost = denata;
					break;
				case 50:
					w3EnchCost = rekuta;
					break;
				case 51:
					w3EnchCost = kuta;
					break;
				
				
			}
			break;
	}  
	headTotalCost = headImpCost+headEnchCost;
	chestTotalCost = chestImpCost+chestEnchCost;
	legTotalCost = legImpCost+legEnchCost;
	feetTotalCost = feetImpCost+feetEnchCost;
	shoulderTotalCost = shoulderImpCost+shoulderEnchCost;
	handTotalCost = handImpCost+handEnchCost;
	beltTotalCost = beltImpCost+beltEnchCost;
	shieldTotalCost = shieldImpCost+shieldEnchCost;
	w1TotalCost = w1ImpCost+w1EnchCost;
	w2TotalCost = w2ImpCost+w2EnchCost;
	w3TotalCost = w3ImpCost+w3EnchCost;


	if(document.getElementById("headcost")!=null){
		document.getElementById("headcost").innerHTML = headTotalCost;
	}
	if(document.getElementById("chestcost")!=null){
		document.getElementById("chestcost").innerHTML = chestTotalCost;
	}
	if(document.getElementById("legcost")!=null){
		document.getElementById("legcost").innerHTML = legTotalCost;
	}
	if(document.getElementById("feetcost")!=null){
		document.getElementById("feetcost").innerHTML = feetTotalCost;
	}
	if(document.getElementById("shouldercost")!=null){
		document.getElementById("shouldercost").innerHTML = shoulderTotalCost;
	}
	if(document.getElementById("handcost")!=null){
		document.getElementById("handcost").innerHTML = handTotalCost;
	}
	if(document.getElementById("beltcost")!=null){
		document.getElementById("beltcost").innerHTML = beltTotalCost;
	}
	if(document.getElementById("shieldcost")!=null){
		document.getElementById("shieldcost").innerHTML = shieldTotalCost;
	}
	if(document.getElementById("w1cost")!=null){
		document.getElementById("w1cost").innerHTML = w1TotalCost;
	}
	if(document.getElementById("w2cost")!=null){
		document.getElementById("w2cost").innerHTML = w2TotalCost;
	}
	if(document.getElementById("w3cost")!=null){
		document.getElementById("w3cost").innerHTML = w3TotalCost;
	}

	totalCost = headTotalCost+chestTotalCost+legTotalCost+feetTotalCost+shoulderTotalCost+handTotalCost
		+beltTotalCost+shieldTotalCost+w1TotalCost+w2TotalCost+w3TotalCost;
	if(document.getElementById("totalcost")!=null){
		document.getElementById("totalcost").innerHTML = totalCost;
//		document.getElementById("FormTotalcost").value = totalCost;
	}



 	
}
