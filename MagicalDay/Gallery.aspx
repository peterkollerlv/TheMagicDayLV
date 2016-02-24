<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Gallery.aspx.cs" Inherits="Gallery" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="centerContentBody">
        <div id="gallerySlider">
            <div id="galleryArrows" class="galleryArrowsClass">
                <div id="galleryUpArrow">
                    <div id="galleryUpArrowTop" onclick="galleryUpArrow()"></div>
                    <p>></p>
                </div>

                <div id="galleryDownArrow">
                    <div id="galleryDownArrowTop" onclick="galleryDownArrow()"></div>
                    <p><</p>
                </div>
            </div>
            <div id="gallerySlideDiv">

                <ul id="gallerySideStripUl">

                    <li class="gallerySlideSlotOneLi" onclick="galleryUpArrow()">
                        <div id="gallerySlideSlotOneDiv">
                            <img src="lib/pic/gallery/blankImg.png" alt="" />
                        </div>
                    </li>
                    <li class="gallerySlideSlotTwoLi">
                        <div id="gallerySlideSlotTwoDiv" onclick="enlargePic()">
                            <img src="lib/pic/gallery/blankImg.png" alt="" />
                        </div>
                    </li>
                    <li class="gallerySlideSlotThreeLi" onclick="galleryDownArrow()">
                        <div id="gallerySlideSlotThreeDiv">
                            <img src="lib/pic/gallery/blankImg.png" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
            <div id="gallerySideStrip">
                <ul>
                    <li tabindex="1" onclick="skipToImage(0)">
                        <img src="lib/pic/gallery/IMG-20150203-WA0003.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(1)">
                        <img src="lib/pic/gallery/IMG-20150203-WA0002.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(2)">
                        <img src="lib/pic/gallery/IMG-20150203-WA0001.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(3)">
                        <img src="lib/pic/gallery/IMG-20150203-WA0000.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(4)">
                        <img src="lib/pic/gallery/IMG-20150206-WA0002.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(5)">
                        <img src="lib/pic/gallery/IMG-20150206-WA0000.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(6)">
                        <img src="lib/pic/gallery/IMG-20150206-WA0001.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(7)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0008.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(8)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0014.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(9)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0015.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(10)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0016.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(11)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0017.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(12)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0018.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(13)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0019.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(14)">
                        <img src="lib/pic/gallery/IMG-20150108-WA0000.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(15)">
                        <img src="lib/pic/gallery/IMG-20150108-WA0001.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(16)">
                        <img src="lib/pic/gallery/IMG_2782.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(17)">
                        <img src="lib/pic/gallery/IMG_2785.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(18)">
                        <img src="lib/pic/gallery/IMG_2882.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(19)">
                        <img src="lib/pic/gallery/IMG_2884.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(20)">
                        <img src="lib/pic/gallery/IMG_2886.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(21)">
                        <img src="lib/pic/gallery/IMG_2889.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(22)">
                        <img src="lib/pic/gallery/IMG_2893.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(23)">
                        <img src="lib/pic/gallery/IMG_2924.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(24)">
                        <img src="lib/pic/gallery/IMG_2930.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(25)">
                        <img src="lib/pic/gallery/IMG_2998.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(26)">
                        <img src="lib/pic/gallery/IMG_3002.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(27)">
                        <img src="lib/pic/gallery/IMG_3003.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(28)">
                        <img src="lib/pic/gallery/IMG_3007.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(29)">
                        <img src="lib/pic/gallery/IMG_3008.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(30)">
                        <img src="lib/pic/gallery/IMG_3020.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(31)">
                        <img src="lib/pic/gallery/IMG_3027.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(32)">
                        <img src="lib/pic/gallery/IMG_3036.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(33)">
                        <img src="lib/pic/gallery/IMG_3039.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(34)">
                        <img src="lib/pic/gallery/IMG_3042.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(35)">
                        <img src="lib/pic/gallery/IMG-20150127-WA0000.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(36)">
                        <img src="lib/pic/gallery/IMG-20150127-WA0001.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(37)">
                        <img src="lib/pic/gallery/IMG-20150127-WA0002.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(38)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0004.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(39)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0001.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(40)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0003.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(41)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0005.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage42)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0009.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(43)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0010.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(44)">
                        <img src="lib/pic/gallery/IMG-20150107-WA0013.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(45)">
                        <img src="lib/pic/gallery/IMG-20150322-WA0000.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(46)">
                        <img src="lib/pic/gallery/IMG-20150322-WA0001.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(47)">
                        <img src="lib/pic/gallery/IMG-20150322-WA0002.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(48)">
                        <img src="lib/pic/gallery/IMG-20150328-WA0000.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(49)">
                        <img src="lib/pic/gallery/0216/20151109_063147.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(50)">
                        <img src="lib/pic/gallery/0216/20151109_201537.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(51)">
                        <img src="lib/pic/gallery/0216/20151109_203405.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(52)">
                        <img src="lib/pic/gallery/0216/20151109_203513.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(53)">
                        <img src="lib/pic/gallery/0216/20151109_203553.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(54)">
                        <img src="lib/pic/gallery/0216/20151109_231131.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(55)">
                        <img src="lib/pic/gallery/0216/20160202_122609.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(56)">
                        <img src="lib/pic/gallery/0216/20160204_114158.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(57)">
                        <img src="lib/pic/gallery/0216/20160207_130148.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(58)">
                        <img src="lib/pic/gallery/0216/20160213_215449.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(59)">
                        <img src="lib/pic/gallery/0216/20160213_215457.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(60)">
                        <img src="lib/pic/gallery/0216/20160214_114235.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(61)">
                        <img src="lib/pic/gallery/0216/20160214_120537.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(62)">
                        <img src="lib/pic/gallery/0216/20160222_165415.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(63)">
                        <img src="lib/pic/gallery/0216/20160222_165429.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(64)">
                        <img src="lib/pic/gallery/0216/20160222_165449.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(65)">
                        <img src="lib/pic/gallery/0216/20160222_165526.png" />
                    </li>
                    <li tabindex="1" onclick="skipToImage(66)">
                        <img src="lib/pic/gallery/0216/20160222_165542.png" />
                    </li>
                </ul>
            </div>
        </div>
    </div>

</asp:Content>

