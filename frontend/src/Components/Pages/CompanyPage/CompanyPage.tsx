import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../../company.d";
import { getCompanyProfile } from "../../../api";
import Sidebar from "../../Sidebar/Sidebar";
import CompanyDashboard from "../../CompanyDashboard/CompanyDashboard";
import Navbar from "../../Navbar/Navbar";
import Tile from "../../Tile/Tile";

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
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}> 
          <Tile title="Company Name" subTitle={company.companyName}></Tile> 
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company Not Found!</div>
      )}
    </>
  );
};

export default CompanyPage;
