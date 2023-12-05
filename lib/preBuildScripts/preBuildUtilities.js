const dotenv = require("dotenv");
const fs = require("fs");
const https = require("https");
const axios = require("axios").default;
const { Jsona } = require("jsona");
const dataFormatter = new Jsona();
module.exports.preBuildDevelopment = async () => {
  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }

  // Form Setting
  const formSettingHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/settings/form"
  );
  const formSetting = dataFormatter.deserialize(formSettingHandler.data);

  // Form
  // const formHandler = await axios.get(
  //   envVars.NEXT_PUBLIC_TENANT_API + "/api/forms/get-in-touch?include=blueprint"
  // );
  // const form = dataFormatter.deserialize(formHandler.data);

  // Global Data
  const tenantDetailsHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/tenant-details"
  );
  const tenantDetails = dataFormatter.deserialize(tenantDetailsHandler.data);
  //Google Tag
  const googleTagHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/google-tag"
  );
  const googleTag = dataFormatter.deserialize(googleTagHandler.data);
  // Contact Us
  const contactUsHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + "/api/globals/experience-the-future-of-online-solutions"
  );
  const contactUs = dataFormatter.deserialize(contactUsHandler.data);
  // Menu Data Header
  const menusHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/header?include=nodes.children,parentNodes"
  );
  const menus = dataFormatter.deserialize(menusHandler.data);

  // Menu Data Footer
  const menusFooterHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API +
      "/api/menus/footer?include=nodes.children,parentNodes"
  );
  const menusFooter = dataFormatter.deserialize(menusFooterHandler.data);

  // Generate default Image
  const generateImage = (imageUrl, path) => {
    const file = fs.createWriteStream(path);
    https.get(imageUrl, function (response) {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Default Image Downloaded");
      });
    });
  };
  [].forEach((e, i) => {
    generateImage(e, `./public/image${i}.webp`);
  });

  fs.writeFileSync(
    "./lib/preBuildScripts/static/globalData.json",
    JSON.stringify({
      // form,
      formSetting,
      tenantDetails,
      contactUs,
      googleTag,
      menus,
      menusFooter,
    })
  );

  console.log("New Global Data Generated!");
};
