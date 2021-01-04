var age = $("#age");
var timeDiff = Math.abs((new Date()).getTime() - (new Date("02/14/1996")).getTime());
age.text(Math.floor(timeDiff / (1000 * 3600 * 24 *365)) + " Años");
var difdt = new Date(new Date() - new Date('02/14/1996'));
var days = difdt.getDate() - (difdt.getMonth() != 0 ? 0 : 1);
/*age.text((difdt.toISOString().slice(0, 4) - 1970) + " Años" +
          (difdt.getMonth() != 0 ? ", " + difdt.getMonth() + " Mes" + (difdt.getMonth() == 1 ? "" : "es") : "") +
          (days != 0 ? " y " + days + " Día" + (days == 1 ? "" : "s") : ""));*/

age.text((difdt.toISOString().slice(0, 4) - 1970) + " Años");