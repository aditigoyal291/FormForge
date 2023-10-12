import React, { useState } from "react";
import {
  CheckboxInput,
  RadioInput,
  RangeInput,
  SelectInput,
  TextAreaInput,
  TextInput,
} from "./Inputs";

const questions = [
  {
    domain: "webdev",
    domainFullName: "Web Development",
    questions: [
      {
        id: 1,
        question: "What is React?",
        name: "solution1",
        inputType: "text",
        required: true,
        placeholder: "Enter your answer here",
      },
      {
        id: 2,
        question: "What is React?",
        name: "solution2",
        inputType: "radio",
        required: true,
        options: [
          {
            id: 1,
            value: "option 1",
            htmlForLabel: "option1",
          },
          {
            id: 2,
            value: "option 2",
            htmlForLabel: "option2",
          },
          {
            id: 3,
            value: "option 3",
            htmlForLabel: "option3",
          },
          {
            id: 4,
            value: "option 4",
            htmlForLabel: "option4",
          },
        ],
      },
      {
        id: 3,
        question: "Advantages of NExt?",
        name: "solution3",
        inputType: "checkbox",
        required: false,
        options: [
          {
            id: 1,
            value: "option 2.1",
            htmlForLabel: "option5",
          },
          {
            id: 2,
            value: "option 2.2",
            htmlForLabel: "option6",
          },
          {
            id: 3,
            value: "option 2.3",
            htmlForLabel: "option7",
          },
          {
            id: 4,
            value: "option 2.4",
            htmlForLabel: "option8",
          },
        ],
      },
      {
        id: 4,
        question: "What is React?",
        name: "solution4",
        inputType: "textarea",
        placeholder: "Long text",
      },
      {
        id: 5,
        question: "How excited are you?",
        name: "solution5",
        inputType: "range",
        placeholder: "Long text",
        min: 0,
        max: 10,
      },
    ],
  },
  {},
];

const DomainQuestion = ({ domain, setDomainData, domainData }) => {
  const handleChange = (e) => {
    setDomainData({ ...domainData, [e.target.name]: e.target.value });
    console.log(domainData);
  };

  const domainQuestions = questions.find(
    (domain_) => domain === domain_.domain
  );

  return (
    <>
      <div className="text-white w-full">
        <p className="text-white">{JSON.stringify(domainData)}</p>
        <form
          action=""
          className="text-white text-sm my-5 w-full flex flex-col gap-y-6 accent-secondary"
        >
          <h2 className="text-2xl font-bold text-primary">
            {domainQuestions.domainFullName}
          </h2>
          {domainQuestions.questions.map((question) => {
            const { inputType } = question;

            if (inputType === "text") {
              return <TextInput {...question} handleChange={handleChange} />;
            } else if (inputType === "radio") {
              return <RadioInput {...question} handleChange={handleChange} />;
            } else if (inputType === "checkbox") {
              return (
                <CheckboxInput {...question} handleChange={handleChange} />
              );
            } else if (inputType === "range") {
              return <RangeInput {...question} handleChange={handleChange} />;
            } else if (inputType === "textarea") {
              return (
                <TextAreaInput {...question} handleChange={handleChange} />
              );
            } else {
              return <SelectInput />;
            }
          })}
        </form>
      </div>
    </>
  );
};

export default DomainQuestion;
