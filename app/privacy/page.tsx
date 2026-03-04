import React from "react";
const privacyPolicy = [
  {
    title: "",
    content: `Privacy Policy for Advance

Last updated: August 6, 2025

Advance is an English learning mobile application developed and operated by Tornike Pirtakhia (62001044941), an individual entrepreneur based in Tbilisi, Georgia.

This Privacy Policy describes how Your information is collected, used, and protected when You use the Advance application.

By using the Application, You agree to the collection and use of information in accordance with this Privacy Policy.`,
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

- Application means Advance, the English learning mobile application developed by Tornike Pirtakhia.
- Developer refers to Tornike Pirtakhia, an individual entrepreneur located in Tbilisi, Georgia.
- Device means any device that can access the Service such as a mobile phone, tablet, or computer.
- Personal Data means any information related to an identified or identifiable individual.
- Service refers to the Advance mobile application.
- Service Provider means any third-party company or individual who processes data on behalf of the Developer.
- Usage Data refers to data collected automatically when using the Application.
- You means the individual accessing or using the Application.`,
      },
    ],
  },
  {
    title: "Collecting and Using Your Personal Data",
    subsections: [
      {
        subtitle: "Types of Data Collected",
        content: `While using the Application, we may collect certain information including:

- Email address
- First name and last name
- Usage data
- Device information`,
      },
      {
        subtitle: "Usage Data",
        content: `Usage Data is collected automatically when using the Application.

This may include:

- IP address
- Device type
- Operating system
- App usage statistics
- Time spent using features of the Application

This data helps improve the performance and learning experience within the Application.`,
      },
    ],
  },
  {
    title: "Use of Your Personal Data",
    content: `Personal Data may be used for the following purposes:

- To provide and maintain the Application
- To improve the learning experience
- To manage user accounts
- To analyze usage and performance
- To respond to support requests
- To send service updates and notifications`,
  },
  {
    title: "Third-Party Services",
    content: `The Application may use third-party services for analytics, cloud storage, artificial intelligence features, and notifications.

These services may process certain information in order to provide functionality within the Application. Each third-party provider operates under its own privacy policy.`,
  },
  {
    title: "Security of Your Personal Data",
    content: `Protecting Your information is important. Reasonable technical and organizational measures are used to safeguard data.

However, no method of transmission over the Internet or electronic storage is completely secure.`,
  },
  {
    title: "Children's Privacy",
    content: `Our Service is accessible to users of all ages, including children under the age of 13.

If You are under 13, You must have permission from a parent or guardian to use the Application.

Parents or guardians may contact us to review or request deletion of their child's information.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy:

Developer: Tornike Pirtakhia  
Location: Tbilisi, Georgia  
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
