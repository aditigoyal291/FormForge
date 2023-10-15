import React, { useState } from "react";
import {
  CheckboxInput,
  RadioInput,
  RangeInput,
  SelectInput,
  TextAreaInput,
  TextInput,
} from "./Inputs";
import { questions } from "../../constants/question";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Message from "../Message";
import club from "@/constants/club";
import sendEmail from "@/utils/sendEmail";

const DomainQuestion = ({
  setPage,
  userData,
  domain,
  setDomainData,
  domainData,
}) => {
  const handleChange = (e) => {
    setDomainData({ ...domainData, [e.target.name]: e.target.value });
  };

  const domainQuestions = questions.find(
    (domain_) => domain === domain_.domain
  );

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    display: false,
    message: "",
    description: "",
    type: "",
  });
  const router = useRouter();

  const handleDomainSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/register/domain", {
        method: "POST",
        body: JSON.stringify({
          ...domainData,
          domain: domain,
          email: userData.email.toLowerCase(),
          prn: userData.prn.toLowerCase(),
        }),
      });
      const data = await res.json();
      console.log(data, "from domain questionn");

      setMessage({
        display: true,
        type: data.type,
        message: data.message,
        description: data.description,
      });

      if (data.code === 2) {
        try {
          console.log({
            domain: domain,
            username: data.updatedRookie.name,
            useremail: data.updatedRookie.email,
            invitedByUsername: club.club.name,
            clubEmail: club.club.email,
            clubWebsite: club.club.website,
            clubInstagram: club.club.instagram,
            clubName: club.club.name,
            prn: data.updatedRookie.prn,
            registrationId: data.updatedRookie.id,
          });
          console.log("domain question");

          const emailData = await sendEmail({
            domain: domain,
            username: data.updatedRookie.name,
            useremail: data.updatedRookie.email,
            invitedByUsername: club.club.name,
            clubEmail: club.club.email,
            clubWebsite: club.club.website,
            clubInstagram: club.club.instagram,
            clubName: club.club.name,
            prn: data.updatedRookie.prn,
            registrationId: data.updatedRookie.id,
          });
        } catch (error) {
          console.log("could not send email");
        }

        setTimeout(() => {
          setPage(2);
        }, 2000);
      }
    } catch (error) {
      setMessage({
        display: true,
        message: "Repeated domain selection",
        description: "You cannot register for the same domain again",
        type: "error",
      });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage({ display: false });
      }, 2000);
    }
  };

  return (
    <>
      <div className="text-foreground w-full">
        <form
          action=""
          onSubmit={(e) => handleDomainSubmission(e)}
          className="text-foreground text-sm my-5 w-full flex flex-col gap-y-6 accent-secondary"
        >
          <h2 className="text-2xl font-bold text-primary">
            {domainQuestions.domainFullName}
          </h2>

          {domainQuestions.questions.map((question) => {
            const { inputType } = question;

            if (inputType === "text") {
              return (
                <TextInput
                  key={question.id}
                  {...question}
                  handleChange={handleChange}
                />
              );
            } else if (inputType === "radio") {
              return (
                <RadioInput
                  key={question.id}
                  {...question}
                  handleChange={handleChange}
                />
              );
            } else if (inputType === "checkbox") {
              return (
                <CheckboxInput
                  key={question.id}
                  {...question}
                  handleChange={handleChange}
                />
              );
            } else if (inputType === "range") {
              return (
                <RangeInput
                  key={question.id}
                  {...question}
                  handleChange={handleChange}
                />
              );
            } else if (inputType === "textarea") {
              return (
                <TextAreaInput
                  key={question.id}
                  {...question}
                  handleChange={handleChange}
                />
              );
            } else {
              return <SelectInput key={question.id} />;
            }
          })}

          <Message
            type={message.type}
            message={message.message}
            display={message.display}
          >
            {message.description}
          </Message>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setPage(2)}
              className="bg-foreground/5 w-full p-2 uppercase font-semibold border-foreground/10 border-[1px] rounded-md focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading
                  ? "cursor-not-allowed bg-secondary/90 border-secondary/90"
                  : " bg-secondary border-secondary "
              } w-full border-[1px] rounded-md font-medium tracking-wide text-sm px-3 py-1.5 flex items-center justify-center h-9 sm:h-full uppercase`}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin ease-in-out" />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DomainQuestion;
