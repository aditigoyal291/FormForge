import React from "react";

export function TextInput({
  handleChange,
  name,
  question,
  id,
  placeholder,
  required,
}) {
  return (
    <label htmlFor={name} className="flex flex-col gap-y-1 w-full">
      <span
        className={`${
          required && "after:content-["*"] after:text-secondary"
        } text-slate-100 font-medium text-xs`}
      >
        {question}
      </span>
      <div className="flex flex-col gap-4  w-full">
        <input
          type="text"
          required={required}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          className="bg-white/5 p-2 border-white/10 border-[1px]  rounded lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
          id={name}
          name={name}
        />
      </div>
    </label>
  );
}

export function RadioInput({
  handleChange,
  name,
  question,
  id,
  options,
  required,
}) {
  return (
    <>
      <span
        className={`text-white/90 font-medium -mb-5 ${
          required && "after:content-["*"] after:text-secondary"
        }`}
      >
        {question}
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.htmlForLabel}
            className="radio-label border-white/10 border-[1px]  hover:bg-white/20 font-medium hover:shadow-lg bg-white/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded"
          >
            <span>{option.value}</span>
            <input
              type="radio"
              onChange={(e) => handleChange(e)}
              name={name}
              id={option.htmlForLabel}
              required={required}
              className="hidden"
              value={option.value}
            />
          </label>
        ))}
      </div>
    </>
  );
}

export function CheckboxInput({
  handleChange,
  name,
  
  question,
  id,
  options,
  required,
}) {
  return (
    <>
      <span
        className={`text-white/90 font-medium -mb-5  ${
          required && "after:content-["*"] after:text-secondary"
        }`}
      >
        {question}
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 font-medium">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.htmlForLabel}
            className="radio-label border-white/10 border-[1px] hover:bg-white/20 font-medium hover:shadow-lg bg-white/5 shadow-md cursor-pointer p-2 flex items-center justify-center rounded"
          >
            <span>{option.value}</span>
            <input
              type="checkbox"
              onChange={(e) => handleChange(e)}
              name={name}
              id={option.htmlForLabel}
              required={required}
              className="hidden"
              value={option.value}
            />
          </label>
        ))}
      </div>
    </>
  );
}

export function RangeInput({
    handleChange,
    name,
    question,
    id,
    placeholder,
    required,
    min="0",
    max="10",
    step="1",
}) {
  return (
    <label htmlFor={name} className="flex flex-col gap-y-1 w-full">
      <span
        className={`${
          required && "after:content-["*"] after:text-secondary"
        } text-slate-100 font-medium text-xs}`}
      >
        {question}
      </span>
      <div className="flex flex-col gap-4 w-full">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          required={required}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          className="bg-white/5 p-2 border-white/10 border-[1px]  rounded lowercase  focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
          id={name}
          name={name}
        />
      </div>
    </label>
  );
}

export function TextAreaInput({
  handleChange,
  name,
  question,
  id,
  required,
  placeholder,
}) {
    return (
        <label htmlFor={name} className="flex flex-col gap-y-1 w-full">
      <span
        className={` ${
            required && "after:content-["*"] after:text-secondary"
        } text-slate-100 font-medium text-xs`}
        >
        {question}
      </span>
      <div className="flex flex-col gap-4 w-full">
        <textarea
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          className="bg-white/5 p-2 border-white/10 border-[1px]  rounded lowercase focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
          id={name}
          name={name}
          required={required}
          />
      </div>
    </label>
  );
}

export function SelectInput() {
    return <div>Select Input</div>;
}
