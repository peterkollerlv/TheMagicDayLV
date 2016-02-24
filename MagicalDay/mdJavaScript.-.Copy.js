//Magical Day JS
var defaultProdSlideDiv;
var defaultProdSlideItems;
var indexRotation = 0;
var indexRotationZero;
var indexRotationOne;
var indexRotationTwo;
var indexRotationThree;
var indexRotationFour;
var indexRotationArray = [];
var indexRotationTimer = 5000;
var sideStripImgsTotalIndex;
var galleryUpArrowClicks = 0;
var maxClicks;
var gallerySlideRotation = 0;
var txtBoxValue;
var txtBoxObj;
var emlMsgValue;
var emlMsgChanged = false;
var emlMsgValueTyped;

function defaultProdSlide() {
    defaultProdSlideDiv = document.getElementById('defaultProductSlide');
    defaultProdSlideItems = defaultProdSlideDiv.getElementsByTagName('img');
    indexRotationZero = defaultProdSlideItems[0];
    indexRotationOne = defaultProdSlideItems[1];
    indexRotationTwo = defaultProdSlideItems[2];
    indexRotationThree = defaultProdSlideItems[3];
    indexRotationFour = defaultProdSlideItems[4];
    indexRotationArray = [indexRotationZero, indexRotationOne, indexRotationTwo, indexRotationThree, indexRotationFour];
    indexRotationArray[0].className = 'dPSTopInitial';
    indexRotationArray[1].className = 'dPSLeftInitial';
    indexRotationArray[2].className = 'dPSBackLeftInitial';
    indexRotationArray[3].className = 'dPSBackRightinitial';
    indexRotationArray[4].className = 'dPSRightInitial';
    rotateDefaultProdSlide();
}

function rotateDefaultProdSlide() {
    setTimeout(function () {
        indexRotationArray[4].classRemove = 'dPSRight';
        indexRotationArray[4].className = 'dPSTop';
        indexRotationArray[0].className = 'dPSLeft';
        indexRotationArray[1].className = 'dPSBackLeft';
        indexRotationArray[2].className = 'dPSBackRight';
        indexRotationArray[3].className = 'dPSRight';
    }, indexRotationTimer);
    setTimeout(function () {
        indexRotationArray[3].className = 'dPSTop';
        indexRotationArray[4].className = 'dPSLeft';
        indexRotationArray[0].className = 'dPSBackLeft';
        indexRotationArray[1].className = 'dPSBackRight';
        indexRotationArray[2].className = 'dPSRight';
    }, indexRotationTimer * 2);
    setTimeout(function () {
        indexRotationArray[2].className = 'dPSTop';
        indexRotationArray[3].className = 'dPSLeft';
        indexRotationArray[4].className = 'dPSBackLeft';
        indexRotationArray[0].className = 'dPSBackRight';
        indexRotationArray[1].className = 'dPSRight';
    }, indexRotationTimer * 3);
    setTimeout(function () {
        indexRotationArray[1].className = 'dPSTop';
        indexRotationArray[2].className = 'dPSLeft';
        indexRotationArray[3].className = 'dPSBackLeft';
        indexRotationArray[4].className = 'dPSBackRight';
        indexRotationArray[0].className = 'dPSRight';
    }, indexRotationTimer * 4);
    setTimeout(function () {
        indexRotationArray[0].className = 'dPSTop';
        indexRotationArray[1].className = 'dPSLeft';
        indexRotationArray[2].className = 'dPSBackLeft';
        indexRotationArray[3].className = 'dPSBackRight';
        indexRotationArray[4].className = 'dPSRight';
        rotateDefaultProdSlide();
    }, indexRotationTimer * 5);
}

function resizeGallerySideStripImg() {
    var reApplyResize = setInterval(function () {
        var gallerySideStrip = document.getElementById('gallerySideStrip');
        var sideStripImgs = gallerySideStrip.getElementsByTagName('img');
        var gallerySlide = document.getElementById('gallerySlideDiv');
        var gallerySlideImg = gallerySlide.getElementsByTagName('img');
        for (var i = 0; i < sideStripImgs.length; i++) {
            var imgWidth = sideStripImgs[i].naturalHeight;
            var imgHeight = sideStripImgs[i].naturalWidth;
            if (imgHeight > imgWidth) {
                sideStripImgs[i].style.width = '160px';
            }
            if (imgHeight < imgWidth) {
                sideStripImgs[i].style.height = '160px';
            }
        }
    }, 1000);
    setTimeout(function () { clearInterval(reApplyResize) }, 10000);
}
function galleryLoaded() {
    if (document.readyState === 'complete') {
        setTimeout(function () {
            document.getElementById('gallerySlider').style.visibility = 'visible';
            initialView();
        }, 1000);
    }
    else {
        setTimeout(galleryLoaded, 500);
    }
}

function initialView() {
    var gallerySideStrip = document.getElementById('gallerySideStrip');
    var sideStripImgs = gallerySideStrip.getElementsByTagName('img');
    var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySlideImg = gallerySlide.getElementsByTagName('img');
    maxClicks = sideStripImgs.length;
    sideStripImgsTotalIndex = sideStripImgs.length;
    gallerySlideImg[1].className = 'minOpacity';
    gallerySlideImg[2].className = 'minOpacity';
    gallerySlideImg[0].src = "lib/pic/gallery/blankImg.png";
    gallerySlideImg[1].src = sideStripImgs[0].src;
    gallerySlideImg[2].src = sideStripImgs[1].src;
    resizeSlide()
    setTimeout(function () {
        gallerySlideImg[1].className = 'maxOpacity';
        gallerySlideImg[2].className = 'maxOpacity';
    }, 500);

}

function galleryUpArrow()
{
    galleryUpArrowClicks++;
    rotateSlide(galleryUpArrowClicks)
}

function galleryDownArrow()
{
    galleryUpArrowClicks--;
    rotateSlide(galleryUpArrowClicks)
}

function rotateUp()
{

}

function rotateSlide(galleryUpArrowClicks) {
    document.getElementById('headerText').innerHTML = galleryUpArrowClicks;
    var gallerySideStrip = document.getElementById('gallerySideStrip');
    var sideStripImgs = gallerySideStrip.getElementsByTagName('img');
    var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySlideImg = gallerySlide.getElementsByTagName('img');
    var gallerySlideLi = gallerySlide.getElementsByTagName('li');
    
    if (galleryUpArrowClicks == 1) {
        gallerySlideImg[0].className = 'minOpacity';
        gallerySlideImg[1].className = 'minOpacity';
        gallerySlideImg[2].className = 'minOpacity';
        gallerySlideImg[0].src = sideStripImgs[2].src; gallerySlideLi[0].className = 'gallerySlideSlotThreeLi';
        gallerySlideImg[1].src = sideStripImgs[0].src; gallerySlideLi[1].className = 'gallerySlideSlotOneLi';
        gallerySlideImg[2].src = sideStripImgs[1].src; gallerySlideLi[2].className = 'gallerySlideSlotTwoLi';
        resizeSlide();
    }
    if (galleryUpArrowClicks == sideStripImgsTotalIndex - 1) {
        gallerySlideImg[0].className = 'minOpacity';
        gallerySlideImg[1].className = 'minOpacity';
        gallerySlideImg[2].className = 'minOpacity';
        gallerySlideImg[0].src = sideStripImgs[galleryUpArrowClicks - 1].src; gallerySlideLi[0].className = 'gallerySlideSlotOneLi';
        gallerySlideImg[1].src = sideStripImgs[galleryUpArrowClicks].src; gallerySlideLi[1].className = 'gallerySlideSlotTwoLi';
        gallerySlideImg[2].src = "lib/pic/gallery/blankImg.png"; gallerySlideLi[2].className = 'gallerySlideSlotThreeLi';
        resizeSlide();
    }
    if (galleryUpArrowClicks == sideStripImgsTotalIndex) {
        galleryUpArrowClicks = 0;
        gallerySlideRotation = 0;
        initialView();
    }
    if (galleryUpArrowClicks <= sideStripImgsTotalIndex - 2 && galleryUpArrowClicks > 1) {
        gallerySlideRotation++;
        gallerySlideImg[0].className = 'minOpacity';
        gallerySlideImg[1].className = 'minOpacity';
        gallerySlideImg[2].className = 'minOpacity';
        if (gallerySlideRotation == 1) {
            gallerySlideImg[0].src = sideStripImgs[galleryUpArrowClicks].src; gallerySlideLi[0].className = 'gallerySlideSlotTwoLi';
            gallerySlideImg[1].src = sideStripImgs[galleryUpArrowClicks + 1].src; gallerySlideLi[1].className = 'gallerySlideSlotThreeLi';
            gallerySlideImg[2].src = sideStripImgs[galleryUpArrowClicks - 1].src; gallerySlideLi[2].className = 'gallerySlideSlotOneLi';
            resizeSlide();
        }
        if (gallerySlideRotation == 2) {
            gallerySlideImg[0].src = sideStripImgs[galleryUpArrowClicks - 1].src; gallerySlideLi[0].className = 'gallerySlideSlotOneLi';
            gallerySlideImg[1].src = sideStripImgs[galleryUpArrowClicks].src; gallerySlideLi[1].className = 'gallerySlideSlotTwoLi';
            gallerySlideImg[2].src = sideStripImgs[galleryUpArrowClicks + 1].src; gallerySlideLi[2].className = 'gallerySlideSlotThreeLi';
            resizeSlide();
        }
        if (gallerySlideRotation == 3) {
            gallerySlideImg[0].src = sideStripImgs[galleryUpArrowClicks + 1].src; gallerySlideLi[0].className = 'gallerySlideSlotThreeLi';
            gallerySlideImg[1].src = sideStripImgs[galleryUpArrowClicks - 1].src; gallerySlideLi[1].className = 'gallerySlideSlotOneLi';
            gallerySlideImg[2].src = sideStripImgs[galleryUpArrowClicks].src; gallerySlideLi[2].className = 'gallerySlideSlotTwoLi';
            resizeSlide();
            gallerySlideRotation = 0;
        }
    }
}

function resizeSlide() {
      var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySlideImg = gallerySlide.getElementsByTagName('img');
   for (var i = 0; i < gallerySlideImg.length; i++) {
        imgWidth = 0;
        imgHeight = 0;
        imgWidth = gallerySlideImg[i].naturalWidth;
        imgHeight = gallerySlideImg[i].naturalHeight;
        if (imgWidth > imgHeight) {
           gallerySlideImg[i].style.width = '648px';
            gallerySlideImg[i].style.height = imgHeight / imgWidth * 649 + 'px';
        }
        if (imgWidth < imgHeight) {
            gallerySlideImg[i].style.width = imgWidth / imgHeight * 450 + 'px';
            gallerySlideImg[i].style.height = '449px';
        }
    }
    setTimeout(function () {
        gallerySlideImg[0].className = 'maxOpacity';
        gallerySlideImg[1].className = 'maxOpacity';
        gallerySlideImg[2].className = 'maxOpacity';
    }, 200);
}
//

//document.getElementById('headerText').innerHTML = emlMsgChanged;
