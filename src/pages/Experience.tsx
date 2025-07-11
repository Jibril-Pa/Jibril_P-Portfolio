import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ExperiencePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-8 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Work Experience</h1>
        </div>
        
        {/* Work Experience Items */}
        <div className="w-full max-w-4xl space-y-8">
          {/* Experience Item 1 */}
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Information Security Intern</h3>
                <p className="text-muted-foreground">H-E-B Digital Securtiy</p>
              </div>
              <span className="text-sm text-muted-foreground">May 2024 - July 2024</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Created a database with over 77,000 IOC in excel with the use of data in Zerofox, Proofpoint, and Mandiant which will be used by the DSOC team to analyze threats to HEB systems.</li>
              <li>Led a group of interns in a conjoined project that automates a ticketing system that takes data from Splunk to Jira.</li>
              <li>Utilized the Feedly AI to create weekly newsletters regarding topics happening in cyber and new critical vulnerabilities and threats that could make HEB systems vulnerable to attack.</li>
              <li>Collaborated with personnel at Mandiant to ensure the digital footprint of partners are safe and no mentions of compromised data are found in the dark web.</li>
              <li>Remediated over 50 devices through 5 different stores during the CrowdStrike incident of 2024</li>
              <li>Developed and automated Python code to transport container image data from AWS cloud services to the Brinqa Risk Management platform for future use in Vulnerability management.</li>
              <li>Utilized the Black Kite Risk Management platform to quickly analyze and notify teams on newly found vulnerabilities</li>
              <li>Partnered with over 10 digital security teams to address high-critical vulnerabilities in HEB systems</li>
              <li>Documented automation within the confluence platform for reference and future use on new data integrations.</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Information Technology Intern</h3>
                <p className="text-muted-foreground">Boerne Independent School District</p>
              </div>
              <span className="text-sm text-muted-foreground">May 2022 - Aug 2022</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Updated laptop/desktop operating systems for students to use for the upcoming school year.</li>
              <li>Ensured that damaged technology was restored or recycled based on condition.</li>
              <li>Assembled newer desktops for terchnical classes to use for the upcoming school year.</li>
              <li>Installed security software on new laptops and desktops to keep user information private.</li>
              <li>Configured operating systems and software to optimize the student user experience.</li>
              <li>Dissassembled damaged technology to salvage parts that could be reused.</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Undergradaute Lab Assistant</h3>
                <p className="text-muted-foreground">University of Texas at San Antonio</p>
              </div>
              <span className="text-sm text-muted-foreground">Oct 2023 - Current</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Participated in weekly meetings with the lab professor and other lab assistants to document progress made on projects in the past week.</li>
              <li>Penetration tested a license plate web application to better inform the company of faulty security practices.</li>
              <li>Used tools and articles, such as the OWASP guide, NMAP, ZAP, and EMBA to find vulnerabilities in the software</li>
              <li>Collaborated with other lab assistants to either start or continue their current projects.</li>

            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Cashier/Checker</h3>
                <p className="text-muted-foreground">H-E-B</p>
              </div>
              <span className="text-sm text-muted-foreground">Aug 2022 - Current</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Assisted in the grand opening of the new Fair Oaks store so customers and partners have a wonderful experience and minimize shopping times for customers.</li>
              <li>Managed cash register operations, processing transactions involving cash, checks, and credit cards.</li>
              <li>trained new and current partners on inputting codes, restocking items, and tend to customers the H-E-B way.</li>
              <li>Ensuring that A+ Hospitality is always given when interacting with customers and partners.</li>
            </ul>
          </div>

        </div>
      </section>
    </DefaultLayout>
  );
}
