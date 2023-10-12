"use client";
import SubHero from "@/components/SubHero";
import Form from "@/components/form/Form";
import React, { useState } from "react";
import DomainList from "@/components/form/DomainList";
import DomainQuestion from "@/components/form/DomainQuestion";

const RegistrationPage = () => {
  const [userData, setUserData] = useState({});
  const [domain, setDomain] = useState('webdev');
  const [page, setPage] = useState(3);
  const [domainData, setDomainData] = useState({});
  return (
    <>
      <main className="mt-1 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center flex-col">
        {/* {userData}
        {domain}
        {domainData} */}
        <div className="flex max-w-screen-xl outline flex-col gap-16">
          <SubHero
            title="Recruitment"
            subtitle="Our Story: Pioneering Progress in Technology and Innovation"
          >
            Some message
          </SubHero>
          <div className="flex justify-center items-center md:w-[60vw] md:max-w-3xl w-full mx-auto">
            <div className="w-full border border-white/10 rounded-xl flex sm:p-10 p-4 justify-center">
              {page === 1 ? (
                <Form setUserData={setUserData} userData={userData} />
              ) : page === 2 ? (
                <DomainList />
              ) : page === 3 ? (
                <DomainQuestion
                  domain={domain}
                  setDomainData={setDomainData}
                  domainData={domainData}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
