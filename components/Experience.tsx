import React from "react";
import { MdElectricCar } from "react-icons/md";
import { SiReact } from "react-icons/si";
import { FaAws, FaShoppingCart } from "react-icons/fa";
import Job from "./Job";
import { PiStudentFill } from "react-icons/pi";

function Experience() {
  return (
    <div className="flex justify-center pt-28 lg:py-28">
      <div className="flex w-full max-w-[1600px] px-5 sm:px-20 lg:px-[150px] justify-center">
        <div className="flex flex-col max-w-5xl mx-auto w-[1000px]">
          <div className="text-3xl font-semibold mb-10 opacity-90">
            Work Experience
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <Job
              icon={<SiReact size="25px" />}
              company="DXC Technology"
              title="Professional Systems Engineer"
              date="April 2022 - Present"
              description={[
                "Built WCAG-Compliant React App with ServiceNow API Integration for Government Client",
                "Improved Machine Learning Algorithm to Extract Text Data from Scanned Documents More Efficiently",
              ]}
            />
            <Job
              icon={<FaAws size="25px" style={{ marginTop: "2px" }} />}
              company="DXC Technology"
              title="Associate Systems Engineer"
              date="April 2021 - April 2022"
              description={[
                "Attained 'AWS Solutions Architect - Associate' Certification",
                "Deployed and Maintained Cloud Infrastructure using Terraform",
                "Built UI for Contact Center React App",
                "Developed GraphQL API for MS Teams Integration with React App",
              ]}
            />
            <Job
              icon={<MdElectricCar size="25px" style={{ marginTop: "3px" }} />}
              company="Monash Motorsport"
              title="Electric Powertrain Engineer"
              date="January 2017 - December 2017"
              description={[
                "Researched Energy Storage Solutions",
                "Designed Battery Mount/Brace Solution using CAD",
                "Assembled Wiring Loom",
                "Built Airflow Tubing",
              ]}
            />
            <Job
              icon={<FaShoppingCart size="20px" />}
              company="Big W"
              title="Duty Manager"
              date="November 2016 - March 2021"
              description={[
                "Oversaw Day-To-Day Operations of Store and Employees",
                "Handled Customer Enquiries and Complaints",
                "Assisted Store Manager in Decision-Making Processes to Improve Customer Satisfaction and Store Profitability",
              ]}
            />
            <Job
              icon={<PiStudentFill size="25px" />}
              company="Transcend Education"
              title="Founder/Private Maths Tutor"
              date="January 2015 - December 2020"
              description={[
                "Taught over 50 students from Years 1-12",
                "Founded Tutoring Company",
                "Expanded to Team of More Than 10 Private Tutors",
                "Connected Students to Tutors Across Victoria",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
