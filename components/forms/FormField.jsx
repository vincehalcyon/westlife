import React, { useState, useEffect } from "react";
import Input from "@/components/forms/Input";
import Textarea from "@/components/forms/Textarea";
import Select from "@/components/forms/Select";
import MultiSelect from "@/components/forms/MultiSelect";
import Checkbox from "@/components/forms/Checkbox";
// import File from "@/components/forms/File";
export default function FormField(props) {
  const error = props?.error || "";
  const required = props?.rules.includes("required");
  const fieldClass = props?.className;
  const inputProps = {
    ...props,
    name: props?.state_name,
    label: props?.title,
    placeholder: `${props?.title}${required ? "*" : ""}`,
  };
  const errortype = props?.errortype || "text";
  const captchaError = props?.errors?.captcha || "";
  const renderInput = () => {
    switch (props?.type) {
      case "textarea":
        return (
          <div className={props?.wrapperclassname}>
            <Textarea
              {...inputProps}
              className={`${fieldClass}  ${
                error && errortype === "border" ? "!border-1 !border-[red]" : ""
              }`}
            />
            {error && errortype === "text" && (
              <div className="text-[12px] mt-[-5px] text-red-600">{error}</div>
            )}
          </div>
        );
      case "select":
        return (
          <div className={props?.wrapperclassname}>
            {props?.type === "select" && props.multiple ? (
              <MultiSelect
                {...inputProps}
                className={`${fieldClass} rounded-lg ${
                  error && errortype === "border"
                    ? "!border-1 !border-[red]"
                    : ""
                }`}
              />
            ) : (
              <Select
                {...inputProps}
                className={`${fieldClass} ${
                  error && errortype === "border"
                    ? "!border-1 !border-[red]"
                    : ""
                }`}
              />
            )}

            {error && errortype === "text" && (
              <div className="sm:text-[12px] text-[8px] mt-[2px] text-red-600">
                {error}
              </div>
            )}
          </div>
        );
      case "checkbox":
        return (
          <div className={props?.wrapperclassname}>
            <Checkbox {...inputProps} />
            {error && errortype === "text" && (
              <div className="text-[15px] mt-[2px] text-red-600">{error}</div>
            )}
          </div>
        );
      case props?.state_name === "captcha" && captchaError:
        return (
          <div className="text-red-600">
            <p>{error.captcha_token}</p>
          </div>
        );

      // case "file":
      //   return (
      //     <div className={props?.wrapperclassname}>
      //       {/* <input
      //         {...inputProps}
      //         onChange={e => {
      //           console.log('asd', e.target.files[0])
      //           return e.target.files[0]
      //         }}
      //         className={`${fieldClass} ${
      //           error && errortype === "border" ? "!border-1 !border-[red]" : ""
      //         }`}
      //       /> */}
      //       <File
      //         {...inputProps}
      //         className={`${fieldClass} ${
      //           error && errortype === "border" ? "!border-1 !border-[red]" : ""
      //         }`}
      //       />
      //       {error && errortype === "text" && (
      //         <div className="text-[12px] mt-[2px] text-red-600">{error}</div>
      //       )}
      //     </div>
      //   )
      default:
        return (
          <div className={props?.wrapperclassname}>
            <Input
              {...inputProps}
              className={`${fieldClass} ${
                error && errortype === "border" ? "!border-1 !border-[red]" : ""
              }`}
            />
            {error && errortype === "text" && (
              <div className="text-[12px] mt-[2px] text-red-600">{error}</div>
            )}
          </div>
        );
    }
  };

  return <>{renderInput()}</>;
}
