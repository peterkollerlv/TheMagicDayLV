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
var galleryArrowClicks = 0;
var maxClicks;
var gallerySlideRotation = 0;
var txtBoxValue;
var txtBoxObj;
var emlMsgValue;
var emlMsgChanged = false;
var emlMsgValueTyped;
var picLarge = false;

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
    var gallerySideStrip = document.getElementById('gallerySideStrip');
    var gallerySideStripSelection = gallerySideStrip.getElementsByTagName('li')
    gallerySideStripSelection[0].className = 'gallerSideStripSelected';
    maxClicks = sideStripImgs.length - 1;
    sideStripImgsTotalIndex = sideStripImgs.length;
    gallerySlideImg[1].className = 'minOpacity';
    gallerySlideImg[2].className = 'minOpacity';
    gallerySlideImg[0].src = "lib/pic/gallery/blankImg.png";
    gallerySlideImg[1].src = sideStripImgs[0].src;
    gallerySlideImg[2].src = sideStripImgs[1].src;
    resizeSlide();
    setTimeout(function () {
        gallerySlideImg[1].className = 'maxOpacity';
        gallerySlideImg[2].className = 'maxOpacity';
    }, 500);

}

function galleryUpArrow() {
    if (galleryArrowClicks == 0 || galleryArrowClicks < 0) {
        rotateSlide(maxClicks);
        return;
    }
    galleryArrowClicks--;
    rotateUp();
    rotateSlide(galleryArrowClicks)
}

function galleryDownArrow() {
    //alert(galleryArrowClicks+' '+maxClicks)
    if (galleryArrowClicks == maxClicks) {

        rotateSlide(0);
        return;
    }
    galleryArrowClicks++;
    rotateDown();
    rotateSlide(galleryArrowClicks)
}

function rotateUp() {
    var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySlideLi = gallerySlide.getElementsByTagName('li');
    gallerySlideLi[0].className = 'gallerySlideSlotThreeLi';
    if (picLarge == true) {
        gallerySlideLi[1].className = 'largePic';
    }
    if (picLarge == false) {
        gallerySlideLi[1].className = 'gallerySlideSlotOneLi';
    }

    gallerySlideLi[2].className = 'gallerySlideSlotTwoLi';
    setTimeout(function () {
        gallerySlideLi[0].className = 'gallerySlideSlotOneLiReset';
        if (picLarge == true) {
            gallerySlideLi[1].className = 'largePic';
        }
        if (picLarge == false) {
            gallerySlideLi[1].className = 'gallerySlideSlotTwoLiReset';
        }
        gallerySlideLi[2].className = 'gallerySlideSlotThreeLiReset';
    }, 250);
}

function rotateDown() {
    var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySlideLi = gallerySlide.getElementsByTagName('li');
    gallerySlideLi[0].className = 'gallerySlideSlotTwoLi';
    if (picLarge == true) {
        gallerySlideLi[1].className = 'largePic';
    }
    if (picLarge == false) {
        gallerySlideLi[1].className = 'gallerySlideSlotThreeLi';
    }
    gallerySlideLi[2].className = 'gallerySlideSlotOneLi';
    setTimeout(function () {
        gallerySlideLi[0].className = 'gallerySlideSlotOneLiReset';
        if (picLarge == true) {
            gallerySlideLi[1].className = 'largePic';
        }
        if (picLarge == false) {
            gallerySlideLi[1].className = 'gallerySlideSlotTwoLiReset';
        }
        gallerySlideLi[2].className = 'gallerySlideSlotThreeLiReset';
    }, 250);
}

function skipToImage(galleryClicks) {
    galleryArrowClicks = galleryClicks;
    rotateSlide(galleryClicks);

}


function rotateSlide(galleryClicks) {

    var gallerySideStrip = document.getElementById('gallerySideStrip');
    var gallerySideStripList = document.getElementById('gallerySideStripUl');
    var sideStripImgs = gallerySideStrip.getElementsByTagName('img');
    var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySideStripSelection = gallerySideStrip.getElementsByTagName('li')
    var gallerySlideImg = gallerySlide.getElementsByTagName('img');
    var gallerySlideLi = gallerySlide.getElementsByTagName('li');
    galleryArrowClicks = galleryClicks;
    // document.getElementById('headerText').innerHTML = galleryArrowClicks;
    for (var i = 0; i < gallerySideStripSelection.length; i++) {
        gallerySideStripSelection[i].className = 'gallerySideStripNonSelected';
    }

    if (galleryArrowClicks == 0 || galleryArrowClicks < 0) {
        initialView();
        galleryArrowClicks = 0;
        return;

    }

    if (galleryArrowClicks < sideStripImgsTotalIndex) {
        gallerySideStripSelection[galleryArrowClicks].className = 'gallerSideStripSelected';
        gallerySideStripList.scrollTop = ([galleryArrowClicks].offsetTop - 160);
    }


    if (galleryArrowClicks == 1) {
        gallerySlideImg[0].className = 'minOpacity';
        gallerySlideImg[1].className = 'minOpacity';
        gallerySlideImg[2].className = 'minOpacity';
        gallerySlideImg[0].src = sideStripImgs[0].src;
        gallerySlideImg[1].src = sideStripImgs[1].src;
        gallerySlideImg[2].src = sideStripImgs[2].src;
        resizeSlide();
    }
    if (galleryArrowClicks == sideStripImgsTotalIndex - 1) {
        gallerySlideImg[0].className = 'minOpacity';
        gallerySlideImg[1].className = 'minOpacity';
        gallerySlideImg[2].className = 'minOpacity';
        gallerySlideImg[0].src = sideStripImgs[galleryArrowClicks - 1].src;
        gallerySlideImg[1].src = sideStripImgs[galleryArrowClicks].src;
        gallerySlideImg[2].src = "lib/pic/gallery/blankImg.png";
        // alert('here at -1');
        //galleryArrowClicks = 0;
        resizeSlide();
    }
    if (galleryArrowClicks == sideStripImgsTotalIndex) {
        // alert('here at ==');
        galleryArrowClicks = 0;
        initialView();
    }
    if (galleryArrowClicks <= sideStripImgsTotalIndex - 2 && galleryArrowClicks > 1) {
        gallerySlideRotation++;
        gallerySlideImg[0].className = 'minOpacity';
        gallerySlideImg[1].className = 'minOpacity';
        gallerySlideImg[2].className = 'minOpacity';
        gallerySlideImg[0].src = sideStripImgs[galleryArrowClicks - 1].src;
        gallerySlideImg[1].src = sideStripImgs[galleryArrowClicks].src;
        gallerySlideImg[2].src = sideStripImgs[galleryArrowClicks + 1].src;
        resizeSlide();

    }
}

function resizeSlide() {
    var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySlideImg = gallerySlide.getElementsByTagName('img');
    var gallerySlideLi = gallerySlide.getElementsByTagName('li');
    for (var i = 0; i < gallerySlideImg.length; i++) {
        imgWidth = 0;
        imgHeight = 0;
        imgWidth = gallerySlideImg[i].naturalWidth;
        imgHeight = gallerySlideImg[i].naturalHeight;
        if (picLarge == false)
        {
            if (imgWidth > imgHeight)
            {
               // alert('here');
                gallerySlideImg[i].style.width = '648px';
                gallerySlideImg[i].style.height = imgHeight / imgWidth * 649 + 'px';
            }
            if (imgWidth < imgHeight)
            {
                gallerySlideImg[i].style.width = imgWidth / imgHeight * 450 + 'px';
                gallerySlideImg[i].style.height = '449px';
            }
        }
        if (picLarge == true)
        {
            gallerySlideLi[0].style.visibility = 'hidden';
            gallerySlideLi[2].style.visibility = 'hidden';

            if (imgWidth > imgHeight)
            {
                gallerySlideImg[i].style.width = '995px';
                gallerySlideImg[i].style.height = imgHeight / imgWidth * 995 + 'px';
            }
            if (imgWidth < imgHeight)
            {
                gallerySlideImg[i].style.width = imgWidth / imgHeight * 695 + 'px';
                gallerySlideImg[i].style.height = '695px';
            }
        }
    }
    setTimeout(function ()
    {
        gallerySlideImg[0].className = 'maxOpacity';
        gallerySlideImg[1].className = 'maxOpacity';
        gallerySlideImg[2].className = 'maxOpacity';
    }, 200);
}


function enlargePic() {
    var gallerySlide = document.getElementById('gallerySlideDiv');
    var gallerySlideLi = gallerySlide.getElementsByTagName('li');
    var gallerySlideImg = gallerySlide.getElementsByTagName('img');
    var largePicDiv = document.getElementById('gallerySlideSlotTwoDiv');
    var arrows = document.getElementById('galleryArrows');
    var sideStrip = document.getElementById('gallerySideStrip');

    if (picLarge == false) {
        picLarge = true;
        gallerySlideLi[0].style.visibility = 'hidden';
        gallerySlideLi[2].style.visibility = 'hidden';
        gallerySlideLi[1].className = 'largePic';
        sideStrip.style.position = 'fixed';
        sideStrip.style.right = '110px';
        sideStrip.style.top = '140px';
        sideStrip.style.border = '1px solid #f5b2d7';
        arrows.className = 'galleryArrowsToSide';
        imgWidth = gallerySlideImg[1].naturalWidth;
        imgHeight = gallerySlideImg[1].naturalHeight;
        if (imgWidth > imgHeight) {
            gallerySlideImg[1].style.width = '995px';
            gallerySlideImg[1].style.height = imgHeight / imgWidth * 995 + 'px';
        }
        if (imgWidth < imgHeight) {
            gallerySlideImg[1].style.width = imgWidth / imgHeight * 695 + 'px';
            gallerySlideImg[1].style.height = '695px';
        }

        return;
    }

    if (picLarge == true) {
        picLarge = false;
        gallerySlideLi[1].className = 'gallerySlideSlotTwoLi';
        arrows.className = 'galleryArrowsClass';
        sideStrip.style.position = 'absolute';
        sideStrip.style.right = '0px';
        sideStrip.style.top = '75px';
        sideStrip.style.border = 'none';
        imgWidth = gallerySlideImg[1].naturalWidth;
        imgHeight = gallerySlideImg[1].naturalHeight;
        if (imgWidth > imgHeight) {
            gallerySlideImg[1].style.width = '648px';
            gallerySlideImg[1].style.height = imgHeight / imgWidth * 649 + 'px';
        }
        if (imgWidth < imgHeight) {
            gallerySlideImg[1].style.width = imgWidth / imgHeight * 450 + 'px';
            gallerySlideImg[1].style.height = '449px';
        }
        resizeSlide();
        setTimeout(function () {
            gallerySlideLi[0].className = 'gallerySlideSlotOneLiReset';
            gallerySlideLi[2].className = 'gallerySlideSlotThreeLiReset';
            gallerySlideLi[0].style.visibility = 'visible';
            gallerySlideLi[2].style.visibility = 'visible';
            return;
        }, 500);
    }
 }

