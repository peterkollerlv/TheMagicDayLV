<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <title>Magical Day - Home</title>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server" >
       <div class="centerContentBody" id="defaultBody">
        <img id="mdLogoDefaultPage" src="lib\pic\mdLogoTransparent.png" />
        <div class="DefaultMainPicFrame">
            
            <img id="defaultMainPic" src="lib/pic/IMG-20150107-WA0001.png" alt=""/>
            <img id="defaultSidePic" src="lib/pic/IMG_3027.png" alt=""/>
            </div>
     <div id="defaultIntroduction"> </div>
         <div id="defaultIntroductionP"><p>We welcome special requests because it
              frequently provides a challenge and inspiration for new  creations!
                Ask us to use your  choice of colors or make a gift that just seems  impossible  to do!

         </p>
             </div>
    <div id="defaultProductSlide">
        <div class="defaultProdSlideItemDiv"><img id="defaultPS0" class="defaultProdSlide" src="lib/pic/gallery/IMG-20150107-WA0016.png" /></div> 
        <div class="defaultProdSlideItemDiv"><img id="defaultPS1" class="defaultProdSlide" src="lib/pic/gallery/IMG-20150107-WA0008.png" /></div> 
        <div class="defaultProdSlideItemDiv"><img id="defaultPS2" class="defaultProdSlide" src="lib/pic/gallery/IMG-20150107-WA0004.png" /></div> 
        <div class="defaultProdSlideItemDiv"><img id="defaultPS3" class="defaultProdSlide" src="lib/pic/gallery/IMG-20150107-WA0014.png" /></div> 
        <div class="defaultProdSlideItemDiv"><img id="defaultPS4" class="defaultProdSlide" src="lib/pic/gallery/IMG-20150107-WA0003.png" /></div> 
           </div>

    </div>
</asp:Content>

