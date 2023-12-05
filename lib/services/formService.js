import FORMAPI from "@/lib/api/forms/request";
import globalState from "@/lib/store/globalState";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import CloudFlareRecaptcha from "@/components/partials/CloudFlareRecaptcha";
import GoogleRecaptcha from "@/components/partials/GoogleRecaptcha";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export function formSubmit(
  e,
  id,
  setToken,
  token,
  captcha,
  sections,
  multiSelectFields,
  setErrors,
  successCallback = () => {},
  errorCallback = () => {}
) {
  e.preventDefault();
  globalState.setState({
    formSuccessInfo: false,
  });
  setErrors([]);
  // ------------wip------------
  // if (sections[0].fields.findIndex(field => field.type === 'file') > -1)
  // const payload = {}
  // const formData = new FormData()
  // sections.map((section) => {
  //   let fields = section?.fields || [];
  //     fields.map((field) => {
  //         formData.append(field.state_name, field?.type === 'file' ? e.target[field.state_name]?.files[0]: e.target[field.state_name].value)
  //       }
  //     );
  //     payload[section?.state_name] = formData;
  // });
  // payload["captcha_token"] = token;
  // for (var pair of payload?.formData?.entries()) {
  //   console.log(pair[0]+ ', ' + pair[1]);
  // }
  // FORMAPI.submitForm(id, payload)
  //   .then(() => {
  //     e.target.reset();
  //     globalState.setState({
  //       formSuccessInfo: true,
  //     });
  //     successCallback();
  //   })
  //   .catch((err) => {
  //     setErrors(err?.data?.errors || {});
  //     errorCallback();
  //   });
  const payload = {};
  sections.map((section) => {
    let sectionPayload = {};
    let fields = section?.fields || [];

    fields.map((field) => {
      if (field.type === 'select' && field.multiple) {
        const selectedValues = (multiSelectFields.find(item => item.state_name === field.state_name)?.value || []).map(option => option.value);
        sectionPayload[field.state_name] = selectedValues;
      } else {
        sectionPayload[field.state_name] = e.target[field.state_name].value;
      }
    });
    
  //working as array but both label and value is part of payload
    // fields.map((field) => {
    //   if (field.type === 'select' && field.multiple) {
    //     const selectedValues = multiSelectFields.find(item => item.state_name === field.state_name)?.value || [];
    //     sectionPayload[field.state_name] = selectedValues;
    //   } else {
    //     sectionPayload[field.state_name] = e.target[field.state_name].value;
    //   }
    // });

    //original
    // fields.map(
    //   (field) =>
    //     (sectionPayload[field.state_name] =
    //       e.target[field.state_name].length > 0
    //         ? multiSelectFields
    //             ?.find((item) => item.state_name === field.state_name)
    //             .value?.map((item) => item.value)
    //         : e.target[field.state_name].value)
    // );
    payload[section?.state_name] = sectionPayload;
  });

  payload["captcha_token"] = token;

  FORMAPI.submitForm(id, payload)
    .then(() => {
      e.target.reset();
      globalState.setState({
        formSuccessInfo: true,
      });
      successCallback();
    })
    .catch((err) => {
      if (err.response?.data?.captcha_error) {
        // If captcha error exists in the response, update the errors state
        setErrors({
          ...errors,
          captcha_token: "err.response.data.captcha_error",
        });
      } else {
        setErrors(err?.data?.errors || {});
      }
      errorCallback();
    });
  // if (err.response?.data?.captcha_error) {
  //   // If captcha error exists in the response, update the errors state
  //   setErrors({ captcha: err.response.data.captcha_error });
  // } else {
  //   setErrors(err?.data?.errors || {});
  // }
  // errorCallback();
  // // .catch((err) => {
  // //   setErrors(err?.data?.errors || {});
  // //   errorCallback();
  // // });
  captcha?.current?.reset();
  setToken("");
}

export function isError(errors, stateName, field) {
  const index = stateName + "." + field;
  const data = errors?.[index];
  return data?.[0]?.replace(stateName + ".", "") || "";
}

export function RenderCaptcha({ setToken, errors }) {
  const { formSetting } = useContext(GlobalContext);
  const captchaError = errors?.captcha;

  return (
    <>
      {formSetting?.provider === "google_recaptcha" ? (
        <GoogleRecaptcha setToken={setToken} sitekey={formSetting.site_key} />
      ) : (
        <CloudFlareRecaptcha
          setToken={setToken}
          sitekey={formSetting.site_key}
        />
      )}
      {errors && errors.captcha_token && (
        <div className="text-red-600 text-[12px]">
          <p>{errors.captcha_token}</p>
          {/* You can also display other field errors similarly */}
        </div>
      )}
    </>
  );

  // return formSetting?.provider === "google_recaptcha" ? (
  //   <GoogleRecaptcha setToken={setToken} sitekey={formSetting.site_key} />
  // ) : (
  //   <CloudFlareRecaptcha setToken={setToken} sitekey={formSetting.site_key} />
  // );
}
