import React from "react";

const privacyPolicy = [
  {
    title: "",
    content: `Last updated: August 6, 2025

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.`,
  },
  {
    title: "Interpretation and Definitions",
    subsections: [
      {
        subtitle: "Interpretation",
        content: `The words of which the initial letter is capitalized have meanings defined under the following conditions.`,
      },
      {
        subtitle: "Definitions",
        content: `For the purposes of this Privacy Policy:

- Account means a unique account created for You to access our Service.
- Affiliate means an entity that controls or is controlled by a party.
- Application means Advance, the software program provided by the Company.
- Company refers to Advance LLC, Tbilisi, Georgia.
- Country refers to: Georgia
- Device means any device that can access the Service.
- Personal Data is any information related to an identifiable individual.
- Service refers to the Application.
- Service Provider means a third-party company assisting the Service.
- Usage Data refers to automatically collected data.
- You means the individual using the Service.`,
      },
    ],
  },
  {
    title: "Collecting and Using Your Personal Data",
    subsections: [
      {
        subtitle: "Types of Data Collected",
        content: `Personal Data

While using Our Service we may ask You to provide personally identifiable information including:

- Email address
- First name and last name
- Address information
- Usage Data`,
      },
      {
        subtitle: "Usage Data",
        content: `Usage Data is collected automatically when using the Service.

It may include:

- IP address
- Browser type
- Pages visited
- Time spent on pages
- Device identifiers`,
      },
    ],
  },
  {
    title: "Use of Your Personal Data",
    content: `The Company may use Personal Data for the following purposes:

- To provide and maintain the Service
- To manage Your account
- To perform contractual obligations
- To contact You regarding updates
- To provide offers and information`,
  },
  {
    title: "Security of Your Personal Data",
    content: `While We strive to protect Your data, no method of transmission or storage is 100% secure.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy:

Email: ena.language.app@gmail.com`,
  },
];

function renderContent(text: string) {
  const lines = text.split("\n");

  return lines.map((line, index) => {
    if (line.startsWith("- ")) {
      return (
        <li key={index} className="ml-6 list-disc">
          {line.replace("- ", "")}
        </li>
      );
    }

    return (
      <p key={index} className="mb-2">
        {line}
      </p>
    );
  });
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 20px" }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 30 }}>
        Privacy Policy
      </h1>

      {privacyPolicy.map((section, i) => (
        <section key={i} style={{ marginBottom: 40 }}>
          {section.title && (
            <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
              {section.title}
            </h2>
          )}

          {section.content && (
            <div style={{ lineHeight: 1.7 }}>
              {renderContent(section.content)}
            </div>
          )}

          {section.subsections &&
            section.subsections.map((sub, j) => (
              <div key={j} style={{ marginTop: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>
                  {sub.subtitle}
                </h3>

                <div style={{ lineHeight: 1.7 }}>
                  {renderContent(sub.content)}
                </div>
              </div>
            ))}
        </section>
      ))}
    </main>
  );
}
