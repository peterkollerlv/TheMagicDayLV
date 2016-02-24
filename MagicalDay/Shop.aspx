<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Shop.aspx.cs" Inherits="Shop" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
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


            </table>


        </div>
    </div>


</asp:Content>

