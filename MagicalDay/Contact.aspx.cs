using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net;
using System.Net.Mail;
using System.Drawing;


public partial class Contact : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void emlSubmit_Click(object sender, EventArgs e)
    {
        bool nameValid;
        bool emailValid;
        bool subjectValid;
        bool emlMsgValid;
        MailMessage mailObj = new MailMessage();
        mailObj.From = new MailAddress("no-reply@cyberhostbox.info");
        mailObj.To.Add("themagicalday@yahoo.com");
        mailObj.Subject = "New message from MagicalDay, From " + txtName.Text + ", Sent @: " + DateTime.Now;
        mailObj.Body = "Name: " + txtName.Text + "<br /><br />Email: " + txtEmail.Text + "<br /><br />Sent at: " + DateTime.Now + "<br/><br/>Subject: " + txtSubject.Text + "<br /><br />Message:<br />" + emlMsg.Text;
        mailObj.IsBodyHtml = true;
        SmtpClient smtp = new SmtpClient();
        smtp.Host = "relay-hosting.secureserver.net";
        smtp.Port = 25;
        smtp.EnableSsl = false;
        smtp.ServicePoint.MaxIdleTime = 1;
        if (txtName.Text == String.Empty)
        {
            txtName.BorderColor = System.Drawing.Color.Red;
            txtNameLbl.Text = "Please enter your name.";
            nameValid = false;
        }
        else
        {
            txtName.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            txtNameLbl.Text = "";
            nameValid = true;

        }

        if (txtEmail.Text == String.Empty)
        {
            txtEmail.BorderColor = System.Drawing.Color.Red;
            txtEmailLbl.Text = "Please enter your email.";
            emailValid = false;
        }

        else
        {
            txtEmail.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            txtEmailLbl.Text = "";
            emailValid = true;

        }

        if (txtSubject.Text == String.Empty)
        {
            txtSubject.BorderColor = System.Drawing.Color.Red;
            txtSubjectLbl.Text = "Please enter a subject.";
            subjectValid = false;
        }

        else
        {
            txtSubject.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            txtSubjectLbl.Text = "";
            subjectValid = true;

        }

        if (emlMsg.Text == String.Empty)
        {
            emlMsg.BorderColor = System.Drawing.Color.Red;
            emlMsgLbl.Text = "Please enter your message.";
            emlMsgValid = false;
        }

        else
        {
            emlMsg.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            emlMsgLbl.Text = "";
            emlMsgValid = true;

        }


        if (nameValid == true && emailValid== true && subjectValid == true && emlMsgValid == true)
        {
            smtp.Send(mailObj);
            mailObj.Dispose();
            txtName.Text = "";
            txtEmail.Text = "";
            txtSubject.Text = "";
            emlMsg.Text = "";
            Server.Transfer("MailSent.aspx");
        }

        try
        {
            smtp.Send(mailObj);
        }
        catch (Exception ex)
        {
            Console.WriteLine("Exception caught in CreateTestMessage2(): {0}",
                  ex.ToString());
        }

    }
    protected void txtName_TextChanged(object sender, EventArgs e)
    {
        if (txtName.Text == String.Empty)
        {
            txtName.BorderColor = System.Drawing.Color.Red;
            txtNameLbl.Text = "Please enter your name.";
            txtNameLbl.ForeColor = System.Drawing.Color.Red;
        }
        else
        {
            txtName.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            txtNameLbl.Text = "";
        }
    }

    protected void txtEmail_TextChanged(object sender, EventArgs e)
    {
        if (txtEmail.Text == String.Empty)
        {
            txtEmail.BorderColor = System.Drawing.Color.Red;
            txtEmailLbl.Text = "Please enter your email.";
        }
        else
        {
            txtEmail.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            txtEmailLbl.Text = "";
        }
    }

    protected void txtSubject_TextChanged(object sender, EventArgs e)
    {
        if (txtSubject.Text == String.Empty)
        {
            txtSubject.BorderColor = System.Drawing.Color.Red;
            txtSubjectLbl.Text = "Please enter a subject.";

        }

        else
        {
            txtSubject.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            txtSubjectLbl.Text = "";


        }
    }
    protected void emlMsg_TextChanged(object sender, EventArgs e)
    {
        if (emlMsg.Text == String.Empty)
        {
            emlMsg.BorderColor = System.Drawing.Color.Red;
            emlMsgLbl.Text = "Please enter your message.";
        }

        else
        {
            emlMsg.BorderColor = System.Drawing.ColorTranslator.FromHtml("#f5b2d7");
            emlMsgLbl.Text = "";
        }
    }


}