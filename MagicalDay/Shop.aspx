<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Shop.aspx.cs" Inherits="Shop" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <title>Magical Day - Shop</title>
            <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-77730319-1', 'auto');
            ga('send', 'pageview');

</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="centerContentBody">
        <div id="shopBody">
            <%--       <iframe id="shopFrame" src="http://mkt.com/cyberWF"></iframe>--%>
           <div id="shopHeader"><p>Welcome to the Magical Day shop!</p></div>
             <div id="shopWelcome">
                 <%--<a target="_blank" href="http://mkt.com/cyberWf"> </a>--%>
                <p>Visit my web store for the complete selection of items.<br />
                    @ the Square Market: COMING SOON!
                  </p>
            </div>
            <div id="shopFeatured"><p>Featured Items:</p></div>
            <table id="shopTable">
                <tr>
                    <td>
                        <p>Coming soon!</p>
          <%--              <a href="https://squareup.com/market/cyberWF/basic-web-page" class="sq-embed-item">Basic Web Page from Cyber Web Foundry</a><script src="https://d2dyi2pd86a6cw.cloudfront.net/market/embed.js" id="sq-embed-js" charset="utf-8"></script> --%>
                   </td>
                    <td>

                    </td>
                </tr>

                <tr>
                    <td>
                         <asp:Image ID="Image1" runat="server" style="vertical-align: bottom" ImageUrl="http://img.cyberhostbox.com/i.ashx?gallery=4755468&mid=100038624&mt=Photo&standardsize=640x480" Width="640" Height="480"/>
                    </td>
                </tr>
            </table>


           


        </div>
    </div>
                    <div id="addsDiv">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- themagicdayBottom -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-2268950586961534"
     data-ad-slot="8953164402"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
                </div>

</asp:Content>

