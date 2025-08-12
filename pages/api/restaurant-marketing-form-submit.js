import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import nodemailer from "nodemailer";

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  switch (req.method) {
    case "POST":
      return formPost();
    case "DELETE":
      return formDelete();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function formPost() {
    if (req.body) {
      try {
        const client = await clientPromise;
        const db = client.db("MccollinsMedia");

        console.log("restaurant marketing:", req.body);

        const result = await db
          .collection("restaurantMarketingFormSubmit")
          .insert(req.body);
        console.log(result);

        const { fullName, email } = req.body;

        if (email) {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "sahad@mccollinsmedia.com",
              pass: "muwjfkkhclpsvrgg",
            },
          });

          const mailOptions = {
            from: "sahad@mccollinsmedia.com",
            to: email,
            subject: "Your Workshop Seat is Confirmed!",
            html: `
          <div style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 0;">
                <table role="presentation" style="width: 602px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 40px 30px 30px 30px; text-align: center; background-color: #FF6B35;">
                            <h1 style="margin: 0; font-size: 24px; color: #ffffff;">Your Workshop Seat is Confirmed!</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px;">
                            <p style="margin: 0 0 20px 0;">Dear ${fullName},</p>
                            <p style="margin: 0 0 20px 0;">Thank you for registering for the Ultimate Restaurant Marketing Workshop. We're excited to have you join us!</p>
                            
                            <h2 style="font-size: 18px; margin: 30px 0 10px 0; color: #FF6B35;">Workshop Details:</h2>
                            <ul style="margin: 0 0 20px 0; padding-left: 20px;">
                                <li style="margin-bottom: 10px;"><strong>Date:</strong> February 05 Wed, 2025</li>
                                <li style="margin-bottom: 10px;"><strong>Time:</strong> 10:00 AM to 1:00 PM</li>
                                <li style="margin-bottom: 10px;"><strong>Venue:</strong> Sofitel Downtown Hotel, Dubai</li>
                            </ul>
                            
                            <h2 style="font-size: 18px; margin: 30px 0 10px 0; color: #FF6B35;">What to Expect:</h2>
                            <ul style="margin: 0 0 20px 0; padding-left: 20px;">
                                <li style="margin-bottom: 10px;">Insights into the latest digital trends for the F&B industry</li>
                                <li style="margin-bottom: 10px;">Expert tips on boosting your restaurant's online presence</li>
                                <li style="margin-bottom: 10px;">Networking opportunities with industry leaders</li>
                                <li style="margin-bottom: 10px;">Interactive Q&A sessions</li>
                            </ul>
                            
                            <p style="margin: 30px 0 20px 0;">If you have any questions or need additional information, please don't hesitate to contact us:</p>
                            <p style="margin: 0 0 20px 0;">
                                <strong>Email:</strong> <a href="mailto:workshop@mccollinsmedia.com" style="color: #FF6B35;">workshop@mccollinsmedia.com</a><br>
                                <strong>Phone:</strong> +971 55 956 4135
                            </p>
                            
                            <p style="margin: 30px 0 20px 0;">We look forward to seeing you at the workshop!</p>
                            
                            <p style="margin: 0;">Best regards,<br>The McCollins Media Team</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 30px; background-color: #f0f0f0; text-align: center;">
                            <p style="margin: 0; font-size: 14px; color: #666666;">© 2025 McCollins Media. All rights reserved.</p>
                            <p style="margin: 10px 0 0 0; font-size: 14px; color: #666666;">
                                <a href="#" style="color: #FF6B35; text-decoration: none;">Unsubscribe</a> | 
                                <a href="#" style="color: #FF6B35; text-decoration: none;">View in browser</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </div>
        `,
          };

          await transporter.sendMail(mailOptions);
          console.log("Confirmation email sent successfully!");
        }

        return res.status(200).json({
          sucess: true,
          message: "Form Created",
        });
      } catch (error) {
        res.json(error);
        res.status(405).end();
      }
    }
  }

  async function formDelete() {
    if (session) {
      if (req.body) {
        try {
          const client = await clientPromise;
          const db = client.db("MccollinsMedia");

          const result = await db
            .collection("restaurantMarketingFormSubmit")
            .deleteOne({ _id: ObjectId(req.body.id) });
          console.log(result);

          return res.status(200).json({
            sucess: true,
            message: "Form Deleted",
          });
        } catch (error) {
          res.json(error);
          res.status(405).end();
        }
      }
    } else {
      res.send({
        error: "You must be sign in to Delete the form",
      });
    }
  }
};
