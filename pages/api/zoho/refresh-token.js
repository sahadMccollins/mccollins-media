import axios from "axios";

export default async (req, res) => {
  try {
    const refreshUrl =
      "https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.b08cb054df8f248fb6d6bf12739d82f6.b03dc43f54c99a2aed5b16093e950261&client_id=1000.BAQO3P3DTMRBTPEP99PKP9VRX9V9SM&client_secret=6a93c8818b92a1b381a6e4de999ef7e9a0c987620c&grant_type=refresh_token";

    const response = await axios.post(refreshUrl);
    const accessToken = response.data.access_token;

    const apiUrl = "https://www.zohoapis.com/crm/v3/Leads";
    const postData = {
      data: [
        {
          Company: req.body.Company,
          First_Name: req.body.FirstName,
          Last_Name: "N/A",
          Email: req.body.Email,
          Page: req.body.Page,
          Phone: req.body.Phone,
          SelectedServices: req.body.SelectedServices,
          Message: req.body.Message,
          $gclid: req.body.gclid,
        },
      ],
      apply_feature_execution: [
        {
          name: "layout_rules",
        },
      ],
      trigger: ["approval", "workflow", "blueprint"],
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    };

    const apiResponse = await axios.post(apiUrl, postData, { headers });
    res.status(apiResponse.status).json(apiResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to refresh the token",
    });
  }
};
