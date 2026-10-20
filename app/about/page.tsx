"use client";

import React from "react";

const aboutApp = [
  {
    title: "Advance-ის შესახებ",
    content: `Advance არის უცხო ენების შესწავლის აპლიკაცია, რომელიც აერთიანებს **ლექსიკას, გრამატიკას, კითხვას და ხელოვნური ინტელექტის მხარდაჭერით სასაუბრო პრაქტიკას**. ჩვენი მიზანია, ენის სწავლა გახდეს უფრო მარტივი, ინტერაქტიული და ყოველდღიურ ცხოვრებასთან დაკავშირებული.`,
  },
  {
    title: "ჩვენი მიზანი",
    content: `გვჯერა, რომ უცხო ენის ცოდნა მხოლოდ სიტყვებისა და წესების დამახსოვრება არ არის. მნიშვნელოვანია, შეძლო მათი გამოყენება რეალურ სიტუაციებში. ამიტომ Advance სხვადასხვა სასწავლო მიმართულებას ერთ სივრცეში აერთიანებს:`,
    subsections: [
      {
        subtitle: "ლექსიკა და ფრაზები",
        content: `ისწავლე ახალი სიტყვები და გამოთქმები ინტერაქტიული სავარჯიშოებით. გაიმეორე მასალა და ყურადღება გაამახვილე იმ სიტყვებზე, რომელთა სწავლაც ჯერ კიდევ გჭირდება.`,
      },
      {
        subtitle: "გრამატიკა",
        content: `გაეცანი გრამატიკულ წესებს და გაიმყარე ცოდნა პრაქტიკული დავალებებით, რომლებიც მასალის უკეთ გაგებაში დაგეხმარება.`,
      },
      {
        subtitle: "სასაუბრო პრაქტიკა AI მასწავლებელთან",
        content: `ივარჯიშე საუბარში ხელოვნური ინტელექტის მხარდაჭერით. შეგიძლია უპასუხო კითხვებს, ივარჯიშო ხმოვანი კომუნიკაციით და მიიღო დახმარება შეცდომების გააზრებაში.`,
      },
      {
        subtitle: "კითხვა და ტექსტის გააზრება",
        content: `იმუშავე საკითხავ მასალებზე, გაიმდიდრე ლექსიკა და განივითარე უცხო ენაზე ტექსტის გაგების უნარი.`,
      },
    ],
  },
  {
    title: "როგორ მუშაობს Advance?",
    content: `აპლიკაცია სწავლის სხვადასხვა გზას გთავაზობს, რათა შეძლო შენთვის მოსახერხებელი ტემპით სწავლა:`,
    subsections: [
      {
        subtitle: "სტრუქტურირებული გაკვეთილები",
        content: `გაიარე თანმიმდევრული გაკვეთილები, შეისწავლე ახალი მასალა და ეტაპობრივად განავითარე ენობრივი უნარები.`,
      },
      {
        subtitle: "ინტერაქტიული სავარჯიშოები",
        content: `შეამოწმე ცოდნა ტესტებითა და სიტყვების შესატყვისობის დავალებებით. აქტიურად ჩაერთე სწავლის პროცესში და განიმტკიცე ნასწავლი მასალა.`,
      },
      {
        subtitle: "პერსონალური ლექსიკა",
        content: `შეაგროვე შენთვის საინტერესო სიტყვები და ფრაზები პირად სასწავლო სიაში, რათა მათთან დაბრუნება და გამეორება მარტივად შეძლო.`,
      },
      {
        subtitle: "პროგრესი და გამოცდილება",
        content: `თვალი ადევნე სწავლის პროგრესს და გამოიყენე სხვადასხვა სასწავლო რეჟიმი მოტივაციის შესანარჩუნებლად.`,
      },
    ],
  },
  {
    title: "სწავლა აუდიოთი",
    content: `უცხო ენის შესწავლისას მოსმენა და გამოთქმა მნიშვნელოვანია. Advance-ის აუდიო ფუნქციები გეხმარება სიტყვებისა და ფრაზების მოსმენაში, ხოლო AI მასწავლებელთან ხმოვანი კომუნიკაცია საუბრის პრაქტიკის შესაძლებლობას გაძლევს.`,
  },
  {
    title: "ვისთვის არის Advance?",
    content: `Advance განკუთვნილია მათთვის, ვისაც სურს უცხო ენის ცოდნის გაუმჯობესება — იქნება ეს ლექსიკის გამდიდრება, გრამატიკის შესწავლა, ტექსტების გაგება თუ საუბარში მეტი თავდაჯერებულობის გამომუშავება.`,
  },
  {
    title: "ჩვენთან დაკავშირება",
    content: `თუ გაქვს შეკითხვა, გჭირდება დახმარება ან გინდა გაგვიზიარო შენი მოსაზრება, დაგვიკავშირდი ელფოსტაზე: **info@advnc.pro**. შენი უკუკავშირი გვეხმარება, Advance კიდევ უფრო სასარგებლო გავხადოთ.`,
  },
];

function renderInline(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function renderContent(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph, index) => {
      const lines = paragraph
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      const isList =
        lines.length > 0 && lines.every((line) => line.startsWith("- "));

      if (isList) {
        return (
          <ul
            key={index}
            className="my-4 list-disc space-y-3 pl-6 marker:text-slate-400"
          >
            {lines.map((line, lineIndex) => (
              <li key={lineIndex} className="pl-1">
                {renderInline(line.slice(2))}
              </li>
            ))}
          </ul>
        );
      }

      return (
        <p key={index} className="mb-4 last:mb-0">
          {lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {lineIndex > 0 && <br />}
              {renderInline(line)}
            </React.Fragment>
          ))}
        </p>
      );
    });
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-700 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <header className="border-b border-slate-200 px-6 py-8 sm:px-10 sm:py-10">
          <div className="mb-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
            ADVANCE
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            ჩვენ შესახებ
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            ისწავლე უცხო ენები შენს ტემპში — ინტერაქტიული გაკვეთილებით,
            პრაქტიკული სავარჯიშოებითა და AI მასწავლებელთან საუბრით.
          </p>
        </header>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {aboutApp.map((section, index) => (
            <section
              key={section.title}
              className={
                index === 0
                  ? "border-b border-slate-100 pb-7"
                  : "border-b border-slate-100 py-7 last:border-b-0 last:pb-0"
              }
            >
              <h2 className="mb-5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {section.title}
              </h2>

              {section.content && (
                <div className="text-[15px] leading-7 text-slate-600">
                  {renderContent(section.content)}
                </div>
              )}

              {section.subsections?.map((subsection) => (
                <div key={subsection.subtitle} className="mt-7 first:mt-0">
                  <h3 className="mb-3 text-lg font-semibold text-slate-800">
                    {subsection.subtitle}
                  </h3>

                  <div className="text-[15px] leading-7 text-slate-600">
                    {renderContent(subsection.content)}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>

        <footer className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>Advance · უცხო ენების შესწავლა</span>
          <a
            href="mailto:info@advnc.pro"
            className="font-medium text-slate-700 transition hover:text-slate-950"
          >
            info@advnc.pro
          </a>
        </footer>
      </article>
    </main>
  );
}
