import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function organizationsPage() {
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

                </div>
            </section>
        </DefaultLayout>
    );
}
