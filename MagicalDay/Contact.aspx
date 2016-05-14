<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Contact.aspx.cs" Inherits="Contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <title>Magical Day - Contact</title>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
        <div class="centerContentBody">
            <div id="contactBody">
                <script type="text/javascript">
                    function clearEmlMsg() {
                         if (emlMsgChanged == false) {
                            emlMsgChanged = true;
                            emlMsgValue = document.getElementById('<%=emlMsg.ClientID%>');
                            //emlMsgValue.value = "";
                            emlMsgValue.style.color = "black";
                        }
                        if (emlMsgChanged == true)
                        {
                            emlMsgValue.value = emlMsgValue.value;

                        }
                    }

                    function emlMsgText() {
                        emlMsgValue = document.getElementById('<%=emlMsg.ClientID%>');
                        emlMsgValueTyped = emlMsgValue.value;

                    }

                </script>

                            <img id="contactMainPic" src="lib/pic/gallery/IMG_3027.jpg" />
            <img id="contactTopPic" src="lib/pic/gallery/aboutTop.jpg" />
    <div id="contactHeader"><p>Contact Me</p></div>
                <div id="contactInfo">
                    <p>Maria Gavin</p> <br /> <br />
                    <h1>Phone Number: (702) 684-4920
                     <br />
                    Email: maria@themagicdaylv.com</h1>
                    <br />
      
                </div>

                <div id="emailMe"><p>Send me a message:</p></div>
                <table id="contactEmailTable">
                    <tr>
                        <td>
                            <p>Your Name:</p> 

                        </td>
                        <td>
                            <asp:TextBox ID="txtName" runat="server" Height="15px" Width="160px" BorderStyle="Solid" Wrap="True" CssClass="contactTextBox" OnTextChanged="txtName_TextChanged"></asp:TextBox>
    <asp:Label ID="txtNameLbl" runat="server" ForeColor="#FF3300"></asp:Label>
                        </td>
<td>
    &nbsp;</td>
                    </tr>

                    <tr>
                        <td>
                            <p>Your Email:</p>
                        </td>
                        <td>
                            <asp:TextBox ID="txtEmail" runat="server" Height="15px" Width="160px" BorderStyle="Solid" CssClass="contactTextBox" OnTextChanged="txtEmail_TextChanged"></asp:TextBox>
                            <asp:Label ID="txtEmailLbl" runat="server" ForeColor="#FF3300"></asp:Label>
                            </td>
                    </tr>
                    <tr>

                        <td>
                            <p>Subject:</p>
                        </td>
                        <td>
                            <asp:TextBox ID="txtSubject" runat="server" Height="15px" Width="160px" BorderStyle="Solid" CssClass="contactTextBox" OnTextChanged="txtSubject_TextChanged" AutoPostBack="False"></asp:TextBox>
                            <asp:Label ID="txtSubjectLbl" runat="server" ForeColor="#FF3300"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td id="txtMsgTd" style="vertical-align:top">
                            <p>Message:</p>
                        </td>
                        <td>
                            <asp:TextBox ID="emlMsg" runat="server" Height="160px" Width="280px" onfocus="clearEmlMsg()" style="text-align:justify; font-size:small" BorderStyle="Solid" AutoCompleteType="None" MaxLength="1000" TextMode="MultiLine" CssClass="contactTextBoxEmail" ForeColor="Silver" OnTextChanged="emlMsg_TextChanged">Enter your message here...</asp:TextBox>
                        </td>
                    </tr>
                    
           <tr>
               
               <td colspan="2" style="text-align:center;">
                  
              
                   <asp:Label ID="emlMsgLbl" runat="server" ForeColor="#FF3300"></asp:Label>
                    
               </td>
           </tr>
                    <tr>
                        <td colspan="2" style="text-align:center;">
                                 <asp:Button ID="emlSubmit" runat="server" Text="Submit" OnClick="emlSubmit_Click" OnClientClick="emlMsgText();" BorderStyle="Solid" CssClass="submitButton" />
                    
                        </td>
                    </tr>
    
                    </table>
                    
                    </div>
                        </div>

</asp:Content>

