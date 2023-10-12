"use client";
import Form, { Domain, DomainList } from "@/components/form/Form";
import SubHero from "@/components/SubHero";
import React, { useState } from "react";

const RegistrationPage = () => {
  const [userData, setUserData] = useState({});
  const [domain, setDomain] = useState(null);
  const [page, setPage] = useState(1);
  return (
    <>
      <main className="mt-1 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center flex-col">
        <div className="flex max-w-screen-xl outline flex-col gap-16">
          <SubHero
            title="Recruitment"
            subtitle="Our Story: Pioneering Progress in Technology and Innovation"
          >
            Some message
          </SubHero>

          <p className="text-white">{JSON.stringify(userData)}</p>
          {page === 1 ? (
            <Form setUserData={setUserData} userData={userData} />
          ) : page === 2 ? (
            <DomainList />
          ) : page === 3 ? (
            <Domain />
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};

export default RegistrationPage;
