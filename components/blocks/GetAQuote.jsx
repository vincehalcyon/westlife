import React, { useState, useEffect, useRef } from "react";
import { formSubmit, isError, RenderCaptcha } from "@/lib/services/formService";
import { useRouter } from "next/router";
import Spinner from "../partials/Spinner";
import FormField from "@/components/forms/FormField";
import globalState from "@/lib/store/globalState";
export default function Block({ block }) {
  const captcha = globalState((state) => state.captcha);
  const { title, description, offices, form, button_label } = block.main;
  const sections = form?.fields?.blueprint?.schema?.sections || [];
  const [token, setToken] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [endTimeout, setEndTimeout] = useState(true);
  const initialLoad = useRef(false);
  const router = useRouter();

  const [multiSelectFields, setMultiselectFields] = useState([]);

  useEffect(() => {
    if (initialLoad.current) return;
    initialLoad.current = true;
    sections.forEach((sectionItem) => {
      if (sectionItem?.fields) {
        sectionItem?.fields
          ?.filter((field) => field?.type === "select" && field.multiple)
          .forEach((field, index) => {
            setMultiselectFields((oldMultiSelectFields) => {
              const multiSelectField = {
                state_name: field?.state_name,
                value: [],
              };
              return [...oldMultiSelectFields, multiSelectField];
            });
          });
      }
    });
  });

  setTimeout(() => {
    setEndTimeout(false);
  }, 6000);

  const successCallback = () => {
    setIsSuccess(true);
    router.push("/thank-you");
  };

  const findClass = (field) => {
    switch (field) {
      case "test_check":
      case "name":
      case "state_country":
      case "phone":
      case "email":
        return "flex flex-row items-center w-full p-2 border-b text-[#353535] border-gray-300 outline-none placeholder:text-[#353535]";
      case "project_description":
        return "flex flex-row items-center w-full h-[182px] p-2 border text-[#353535] border-gray-300 outline-none placeholder:text-[#353535]";
      case "test_check":
        return "flex flex-row w-full";
      default:
        return "";
    }
  };

  const findWrapperClass = (field) => {
    switch (field) {
      case "name":
        return "col-span-1 space-y-1";
      case "state_country":
        return "col-span-2 lg:col-span-1 space-y-1";
      case "email":
        return "col-span-1 lg:col-span-1 space-y-1";
      case "phone":
        return "col-span-1 lg:col-span-1 space-y-1";
      case "project_description":
        return "col-span-3 space-y-1";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="my-[100px] 2xl:max-w-[1650px] md:p-12 p-8 w-full flex flex-col justify-start items-start mx-[auto]">
        <span className="text-4xl font-bold xl:text-6xl">{title}</span>
        <div
          className="mx-2 my-6"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />
        <div className="flex flex-col items-center w-full p-6 my-6 border shadow-md shadow-gray-400 rounded-3xl">
          {sections?.map((section) => {
            const fields = section?.fields || [];
            return (
              <div key={section?.state_name} className="w-full md:w-11/12">
                <div className="hidden m-auto my-4 lg:block bg-accent-1" />
                <form
                  className="flex flex-col items-start w-full px-0 space-y-10 lg:px-5"
                  onSubmit={(e) =>
                    formSubmit(
                      e,
                      form.id,
                      setToken,
                      token,
                      captcha,
                      sections,
                      multiSelectFields,
                      setErrors,
                      successCallback
                    )
                  }
                >
                  {/* {isSuccess && (
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-row items-center justify-center w-full px-5 py-5 bg-orange-100 border rounded-lg border-neutral-300 shadow-neutral-300 shadow-custom">
                        <p className="text-sm font-bold text-center font-roboto">
                          Message Sent.{" "}
                          <span className="font-normal font-roboto">
                            Thank you for your inquiry.
                          </span>
                        </p>
                      </div>
                    </div>
                  )} */}
                  <div className="grid w-full grid-cols-1 gap-5 text-sm md:grid-cols-2 lg:gap-10">
                    {fields.slice(0, 8).map((field, i) => (
                      <div key={field?.state_name}>
                        <FormField
                          {...field}
                          className={findClass(field?.state_name)}
                          onChange={(e) => {
                            if (field?.type === "select" && field.multiple) {
                              setMultiselectFields((oldMultiSelectFields) => {
                                const multiSelectField = {
                                  state_name: field?.state_name,
                                  value: e,
                                };
                                const indexToReplace =
                                  multiSelectFields.findIndex(
                                    (item) =>
                                      item.state_name === field.state_name
                                  );
                                oldMultiSelectFields.splice(
                                  indexToReplace,
                                  1,
                                  multiSelectField
                                );

                                return [...oldMultiSelectFields];
                              });
                            }
                          }}
                          wrapperclassname={findWrapperClass(field?.state_name)}
                          error={isError(
                            errors,
                            section?.state_name,
                            field?.state_name
                          )}
                          errortype="text"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid w-full grid-cols-1 gap-5 text-sm lg:gap-10">
                    {fields.slice(8, 9).map((field, i) => (
                      <div key={field?.state_name}>
                        <FormField
                          {...field}
                          className={findClass(field?.state_name)}
                          wrapperclassname={findWrapperClass(field?.state_name)}
                          error={isError(
                            errors,
                            section?.state_name,
                            field?.state_name
                          )}
                          errortype="text"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    {form?.attributes?.uses_captcha && endTimeout ? (
                      <Spinner color={"#00AAE8"} />
                    ) : (
                      <RenderCaptcha setToken={setToken} errors={errors}/>
                    )}
                    <button
                      className="flex items-center text-white px-6 py-2 m-6 transition ease-in-out delay-150 bg-[#00AAE8] hover:bg-[#386EC1] hover:to-[#386EC1] hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full cursor-pointer"
                      type="submit"
                    >
                      <span className="mx-2 text-lg">{button_label}</span>
                      <svg
                        width="16"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 12"
                        fill="currentColor"
                      >
                        <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" />
                      </svg>
                    </button>
                    <p className="m-4 text-xs text-center">
                      The information above will be stored only for business
                      purposes.
                    </p>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
        <div className="flex-col items-center justify-center hidden w-full pt-4 pb-4 xl:flex xl:flex-row xl:items-start md:pt-12">
          <div className="flex justify-center py-12 mr-0 text-4xl font-bold md:text-5xl xl:py-0 xl:mr-auto ">
            Offices
          </div>
          {offices &&
            offices.length > 0 &&
            offices.map((office, i) => (
              <div
                key={i}
                className="flex flex-col xl:justify-start xl:items-start justify-center items-center max-w-[420px] xl:ml-auto ml-0"
              >
                <p className="text-4xl font-bold xl:text-5xl">
                  {office?.location}
                </p>
                <p className="my-4 text-center xl:text-start">
                  {office?.address}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
