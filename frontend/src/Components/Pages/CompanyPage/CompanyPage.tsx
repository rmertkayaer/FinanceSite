import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../../company.d";
import { getCompanyProfile } from "../../../api";

interface Props {}

const CompanyPage = (props: Props) => {
  const [company, setCompany] = useState<CompanyProfile>();
  let { ticker } = useParams();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);
  return (
    <>
      {company ? (
        <div>{company.companyName} </div>
      ) : (
        <div>Company Not Found!</div>
      )}
    </>
  );
};

export default CompanyPage;
