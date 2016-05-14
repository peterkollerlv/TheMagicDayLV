<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="MailSent.aspx.cs" Inherits="MailSent" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <title>Magical Day - Mail Sent</title>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div class="centerContentBody">
    <img id="mailSentMainPic" src="lib/pic/gallery/IMG_3036.jpg" />
    <img id="mailSentSidePic" src="lib/pic/gallery/IMG-20150107-WA0001.jpg" />
    <div id="mailSentHeader">
        <p>
    Thank for sending us an email! 
            </p>
           </div>
    <div id="mailSent"><p>We will contact you as soon as possible,<br />
        if you like to contact us directly, please feel free to call at <br />(702) 684-4920</p></div>

                  <nav id="innerMenu">
                        <ul>
                            <li class="li_buttonVertical"><a href="Default.aspx">Home</a></li>
                            <li class="li_buttonVertical"><a href="Gallery.aspx">Gallery</a></li>
                            <li class="li_buttonVertical"><a href="About.aspx">About</a></li>
                            <li class="li_buttonVertical"><a href="Contact.aspx">Contact</a></li>
                            <li class="li_buttonVertical"><a href="Shop.aspx">Shop</a></li>
                        </ul>
                    </nav>

</div>
</asp:Content>

