var age = $("#age");
var timeDiff = Math.abs((new Date()).getTime() - (new Date("02/14/1996")).getTime());
age.text(Math.floor(timeDiff / (1000 * 3600 * 24 *365)) + " Años");
