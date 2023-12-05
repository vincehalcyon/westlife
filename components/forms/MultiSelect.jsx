import Select from "react-select";
export default function Input(props) {
  const options = props.options;
  const controlStyles = {
    base: "border border-gray-300 shadow rounded-3xl bg-white sm:text-base text-[11px] hover:cursor-pointer ",
    focus: "border-primary-600 ring-1 ring-primary-500",
    nonFocus: "border-gray-300 border-[#353535] hover:border-gray-400",
  };
  const placeholderStyles = "pl-1 py-0.5";
  const selectInputStyles = "pl-1 py-0.5";
  const valueContainerStyles = "p-1 gap-1";
  const singleValueStyles = "leading-7 ml-1";
  const multiValueStyles =
    "bg-[#00AAE8] text-white rounded-3xl items-center py-0.5 px-3 gap-3 m-1";
  const multiValueLabelStyles = "leading-6 py-0.5";
  const multiValueRemoveStyles =
    "border border-gray-200 bg-white bg-red-50 text-red-800 border-red-300 rounded-3xl p-0.5";
  const indicatorsContainerStyles = "p-1 gap-1";
  const clearIndicatorStyles =
    "p-1 rounded-3xl hover:bg-red-50 hover:text-red-800";
  const indicatorSeparatorStyles = "bg-gray-300";
  const dropdownIndicatorStyles =
    "p-1 hover:bg-gray-100 rounded-3xl hover:text-black";
  const menuStyles = "p-1 mt-2 border border-gray-200 bg-white rounded-3xl";
  const groupHeadingStyles = "ml-3 mt-2 mb-1 text-sm";
  const optionStyles = {
    base: "hover:cursor-pointer hover:bg-sky-200 transition ease-in-out px-3 py-2 rounded-3xl",
    focus: "bg-gray-100 active:bg-gray-200",
    selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
  };
  const noOptionsMessageStyles =
    "p-2 bg-gray-50 border border-dashed border-gray-200 rounded-3xl";
  return (
    <Select
      {...props}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={true}
      noOptionsMessage={() => null} 
      unstyled
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      // onChange={e}
      classNames={{
        control: () => controlStyles.base,
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: () => optionStyles.base,
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
    />
  );
}
