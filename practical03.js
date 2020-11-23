var usbStick = 4;
var converterToMb = 1024;
var usbStickInMb = usbStick * converterToMb;
var newsArticle = 0.098;
var howManyDoFit = usbStickInMb / newsArticle;
console.log(usbStickInMb);
console.log(howManyDoFit);