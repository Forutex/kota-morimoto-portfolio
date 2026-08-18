"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

type Language = "ja" | "en";

const content = {
  ja: {
    skip: "本文へ移動",
    nav: [
      ["projects", "プロジェクト"],
      ["learning", "学んだこと"],
      ["about", "プロフィール"],
    ],
    eyebrow: "GRADUATE PORTFOLIO",
    role: "Web Development / UX & Human-Centred Design",
    directoryLabel: "見たい内容を選ぶ",
    directory: [
      ["projects", "01", "プロジェクト", "制作物とプロセスを見る"],
      ["learning", "02", "大学院で学んだこと", "技術・UX・データの3領域"],
      ["about", "03", "経歴・プロフィール", "大学院とこれまでの経験"],
    ],
    facts: ["University of Technology Sydney", "Master of Information Technology", "Interactive Media", "2026年修了予定"],
    degree: "Master of Information Technology",
    major: "Interactive Media · UTS",
    period: "2025 — 2026",
    focus: ["Full-stack Development", "UX / HCD", "Data & Systems"],
    projectKicker: "SELECTED WORK",
    projectTitle: "主要プロジェクト",
    projectIntro:
      "UX/HCDとWebアプリケーション開発を代表する2つのプロジェクトです。制作物、プロセス、学んだことを掲載します。",
    music: {
      type: "DIGITAL EXPERIENCE DESIGN STUDIO · USER RESEARCH / HCD",
      title: "人間中心設計に基づいたユーザーリサーチ経験",
      body: "65〜74歳の高齢者を対象に、チーム5名が各2名、計10名へインタビュー。Affinity DiagramとPersonaを用いて、個々の発言から共通するニーズや課題を整理しました。",
      tags: ["User Interviews", "Affinity Diagram", "Persona", "Research Synthesis"],
      learning: "学び：ユーザーの発言をそのまま機能に変えるのではなく、複数の声から共通する背景やニーズを読み取ること。",
      detail: "プロジェクト詳細を見る",
    },
    expense: {
      type: "INTERNET PROGRAMMING · FULL-STACK WEB APPLICATION",
      title: "ReactとFastAPIをつないだExpense Tracker",
      body: "React/Viteのフロントエンド、FastAPIのREST API、MySQLのデータ層を接続し、CRUD、検索、認証、権限管理を備えたWebアプリケーションをチームで開発しました。",
      tags: ["React / Vite", "FastAPI / Pydantic", "SQLAlchemy / MySQL", "JWT / RBAC"],
      learning: "担当：ExpenseモデルとSchema、CRUD・検索APIなど、主にバックエンド側の実装。",
      detail: "技術と実装プロセスを見る",
      github: "GitHubでコードを見る",
    },
    learningKicker: "WHAT I LEARNED",
    learningTitle: "大学院で学んだこと",
    learningIntro: "実装・体験・データを分けずに考えられることが、私の大学院での学びの軸です。",
    learningAreas: [
      {
        no: "01",
        title: "Web Application Development",
        body: "React/Viteによる画面開発、FastAPIによるREST API、MySQL/PostgreSQLによるデータ管理を経験。CRUD、検索、JWT認証、ロール別アクセスまで実装しました。",
        chips: ["Frontend", "Backend", "Database", "Security basics"],
      },
      {
        no: "02",
        title: "UX & Human-Centred Design",
        body: "ユーザーインタビューからニーズを読み取り、Persona、Affinity Diagram、プロトタイプへ展開。Usabilityだけでなく、Usefulnessと体験全体から評価しました。",
        chips: ["Research", "Synthesis", "Prototyping", "Evaluation"],
      },
      {
        no: "03",
        title: "Data & System Thinking",
        body: "SQLによるデータモデリング、データ可視化、分析機能の企画、システム統合を学習。個別の機能が利用者や組織へ与える影響まで考えました。",
        chips: ["SQL", "Visualisation", "Analytics", "Integration"],
      },
    ],
    moreKicker: "MORE WORK",
    moreTitle: "その他のプロジェクト",
    moreIntro: "データベース設計とプロジェクト計画の課題を、提出資料に沿ってまとめています。",
    moreStatus: "詳細を見る",
    more: [
      ["Database", "Starbucks Ordering Database", "ERD、制約、ビュー、SQLクエリを用いた注文データベースの設計", "/projects/database"],
      ["Project Management", "Playtesting AI Project Plan", "WBS、ネットワーク図、リスク評価、RACIを用いたプロジェクト計画", "/projects/project-management"],
    ],
    aboutKicker: "ABOUT & JOURNEY",
    aboutTitle: "プロフィールと経歴",
    aboutBody:
      "UTSのMaster of Information TechnologyでInteractive Mediaを専攻しています。プログラミング、データベース、分析、インタラクションデザインを横断し、グループワークでは異なる文化的背景を持つメンバーと、相手の意見を尊重しながら自分の考えも理由とともに伝えることを大切にしてきました。",
    journey: [
      ["2025 — 2026", "University of Technology Sydney", "Master of Information Technology · Interactive Media"],
      ["Before UTS", "Linfield University", "海外環境での学習・小学校での算数ティーチングアシスタント"],
      ["Foundation", "Kanto Gakuin University", "スポーツチャンバラサークルの設立、4年間の塾講師経験"],
    ],
    footer: "このポートフォリオは、プロジェクト資料に合わせて更新していきます。",
  },
  en: {
    skip: "Skip to content",
    nav: [
      ["projects", "Projects"],
      ["learning", "Learning"],
      ["about", "About"],
    ],
    eyebrow: "GRADUATE PORTFOLIO",
    role: "Web Development / UX & Human-Centred Design",
    directoryLabel: "Choose what to explore",
    directory: [
      ["projects", "01", "Projects", "Selected work and process"],
      ["learning", "02", "Graduate Learning", "Technology, UX and data"],
      ["about", "03", "Profile & Journey", "Graduate study and earlier experience"],
    ],
    facts: ["University of Technology Sydney", "Master of Information Technology", "Interactive Media", "Graduating in 2026"],
    degree: "Master of Information Technology",
    major: "Interactive Media · UTS",
    period: "2025 — 2026",
    focus: ["Full-stack Development", "UX / HCD", "Data & Systems"],
    projectKicker: "SELECTED WORK",
    projectTitle: "Selected Projects",
    projectIntro:
      "Two projects representing my work in UX/HCD and full-stack web application development, including the process and what I learned.",
    music: {
      type: "DIGITAL EXPERIENCE DESIGN STUDIO · USER RESEARCH / HCD",
      title: "User Research Grounded in Human-Centred Design",
      body: "Our five-person team interviewed two adults each, for a total of ten participants aged 65–74. We used an affinity diagram and persona to identify shared needs and issues across individual accounts.",
      tags: ["User Interviews", "Affinity Diagram", "Persona", "Research Synthesis"],
      learning: "Learning: do not turn individual comments directly into features; identify the shared contexts and needs behind multiple voices.",
      detail: "View project details",
    },
    expense: {
      type: "INTERNET PROGRAMMING · FULL-STACK WEB APPLICATION",
      title: "Building an Expense Tracker with React and FastAPI",
      body: "A team-built web application connecting a React/Vite frontend, FastAPI REST API and MySQL data layer, with CRUD, search, authentication and role-based access.",
      tags: ["React / Vite", "FastAPI / Pydantic", "SQLAlchemy / MySQL", "JWT / RBAC"],
      learning: "Contribution: mainly backend implementation, including the Expense model and schemas, CRUD and search APIs.",
      detail: "View technical process",
      github: "View code on GitHub",
    },
    learningKicker: "WHAT I LEARNED",
    learningTitle: "What I Learned at Graduate School",
    learningIntro: "My graduate work is grounded in connecting implementation, experience and data rather than treating them separately.",
    learningAreas: [
      {
        no: "01",
        title: "Web Application Development",
        body: "Developed interfaces with React/Vite, REST APIs with FastAPI and data layers with MySQL/PostgreSQL. Implemented CRUD, search, JWT authentication and role-based access.",
        chips: ["Frontend", "Backend", "Database", "Security basics"],
      },
      {
        no: "02",
        title: "UX & Human-Centred Design",
        body: "Turned user interviews into needs, personas, affinity diagrams and prototypes. Evaluated digital products through usefulness and the overall experience as well as usability.",
        chips: ["Research", "Synthesis", "Prototyping", "Evaluation"],
      },
      {
        no: "03",
        title: "Data & System Thinking",
        body: "Studied SQL data modelling, visualisation, analytics planning and system integration, while considering how individual features affect people and organisations.",
        chips: ["SQL", "Visualisation", "Analytics", "Integration"],
      },
    ],
    moreKicker: "MORE WORK",
    moreTitle: "Other Projects",
    moreIntro: "Database design and project-planning coursework, presented directly from the submitted materials.",
    moreStatus: "VIEW DETAILS",
    more: [
      ["Database", "Starbucks Ordering Database", "Ordering database design using an ERD, constraints, views and SQL queries", "/projects/database"],
      ["Project Management", "Playtesting AI Project Plan", "A project plan developed with a WBS, network diagram, risk assessment and RACI", "/projects/project-management"],
    ],
    aboutKicker: "ABOUT & JOURNEY",
    aboutTitle: "Profile & Journey",
    aboutBody:
      "I major in Interactive Media within the Master of Information Technology at UTS. My studies span programming, databases, analytics and interaction design. In multicultural team projects, I have learned to respect different perspectives while expressing my own ideas with clear reasoning.",
    journey: [
      ["2025 — 2026", "University of Technology Sydney", "Master of Information Technology · Interactive Media"],
      ["Before UTS", "Linfield University", "International study and mathematics teaching assistant at an elementary school"],
      ["Foundation", "Kanto Gakuin University", "Founded a Sports Chanbara club and worked as a tutor for four years"],
    ],
    footer: "This portfolio will grow as project materials are added.",
  },
} as const;

function LanguageToggle({ language, change }: { language: Language; change: (language: Language) => void }) {
  return (
    <div className="language-toggle" aria-label="Language selector">
      <button onClick={() => change("ja")} aria-pressed={language === "ja"}>JP</button>
      <button onClick={() => change("en")} aria-pressed={language === "en"}>EN</button>
      <span className="sr-only" aria-live="polite">{language === "ja" ? "日本語で表示中" : "Displaying in English"}</span>
    </div>
  );
}

function ResearchVisual({ language }: { language: Language }) {
  return (
    <figure className="project-visual research-visual">
      <img src="/projects/ecd/affinity-diagram.webp" width="1800" height="854" alt={language === "ja" ? "10名へのインタビュー内容を分類したAffinity Diagram" : "Affinity diagram clustering findings from ten interviews"} />
      <figcaption>{language === "ja" ? "実際の調査成果物：Affinity Diagram" : "Actual research artefact: affinity diagram"}</figcaption>
    </figure>
  );
}

function StackVisual() {
  return (
    <div className="project-visual stack-visual" aria-label="React, FastAPI and MySQL technology flow">
      <p>TECHNICAL PATH</p>
      <div className="stack-shell">
        <div className="stack-step"><small>01 · FRONTEND</small><strong>React / Vite</strong><span>UI · Routing · API calls</span></div>
        <i aria-hidden="true">↓</i>
        <div className="stack-step"><small>02 · REST API</small><strong>FastAPI</strong><span>Routes · Pydantic · Auth</span></div>
        <i aria-hidden="true">↓</i>
        <div className="stack-step"><small>03 · DATA</small><strong>MySQL</strong><span>SQLAlchemy · Models</span></div>
      </div>
      <div className="stack-outcomes"><span>CRUD</span><span>SEARCH</span><span>JWT</span><span>USER SCOPE</span></div>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ja");
  const text = content[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return (
    <main id="top">
      <a className="skip-link" href="#content">{text.skip}</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kota Morimoto home"><span>Kota Morimoto</span></a>
        <nav aria-label="Primary navigation">{text.nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <LanguageToggle language={language} change={setLanguage} />
      </header>

      <div id="content">
        <section className="hero">
          <div className="hero-identity">
            <p>{text.eyebrow}</p>
            <h1>Kota Morimoto</h1>
            <p className="hero-role">{text.role}</p>
          </div>
          <nav className="hero-directory" aria-label={text.directoryLabel}>
            <p>{text.directoryLabel}</p>
            {text.directory.map(([id, number, label, detail]) => (
              <a key={id} href={`#${id}`}>
                <span>{number}</span>
                <strong>{label}</strong>
                <small>{detail}</small>
                <i>↘</i>
              </a>
            ))}
          </nav>
          <div className="hero-facts" aria-label="Academic overview">
            {text.facts.map((fact) => <span key={fact}>{fact}</span>)}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <div><p className="kicker">{text.projectKicker}</p><i /></div>
            <h2>{text.projectTitle}</h2>
            <p>{text.projectIntro}</p>
          </div>
          <div className="project-list">
            <article className="project-card music-project">
              <div className="project-copy"><p className="project-type"><span>01</span>{text.music.type}</p><h3>{text.music.title}</h3><p>{text.music.body}</p><ul>{text.music.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><blockquote>{text.music.learning}</blockquote><a className="project-link" href="/projects/digital-experience-design-studio">{text.music.detail}<span aria-hidden="true">↗</span></a></div>
              <ResearchVisual language={language} />
            </article>
            <article className="project-card expense-project">
              <StackVisual />
              <div className="project-copy"><p className="project-type"><span>02</span>{text.expense.type}</p><h3>{text.expense.title}</h3><p>{text.expense.body}</p><ul>{text.expense.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><blockquote>{text.expense.learning}</blockquote><div className="project-links"><a className="project-link" href="/projects/expense-tracker">{text.expense.detail}<span aria-hidden="true">↗</span></a><a className="project-link secondary-link" href="https://github.com/Forutex/Expense-Tracker-Ass2" target="_blank" rel="noreferrer">{text.expense.github}<span aria-hidden="true">↗</span></a></div></div>
            </article>
          </div>
        </section>

        <section className="learning section" id="learning">
          <div className="section-heading light-heading">
            <div><p className="kicker">{text.learningKicker}</p><i /></div>
            <h2>{text.learningTitle}</h2>
            <p>{text.learningIntro}</p>
          </div>
          <div className="learning-grid">{text.learningAreas.map((area) => <article key={area.no}><span>{area.no}</span><h3>{area.title}</h3><p>{area.body}</p><ul>{area.chips.map((chip) => <li key={chip}>{chip}</li>)}</ul></article>)}</div>
        </section>

        <section className="more section">
          <div className="more-intro"><p className="kicker">{text.moreKicker}</p><h2>{text.moreTitle}</h2><p>{text.moreIntro}</p></div>
          <div className="more-list">{text.more.map(([course, title, body, href], i) => <a className="more-row" href={href} key={title}><span>0{i + 3}</span><div><small>{course}</small><h3>{title}</h3><p>{body}</p></div><i>{text.moreStatus}<span aria-hidden="true">↗</span></i></a>)}</div>
        </section>

        <section className="about section" id="about">
          <div className="about-copy"><p className="kicker">{text.aboutKicker}</p><h2>{text.aboutTitle}</h2><p>{text.aboutBody}</p></div>
          <div className="journey">{text.journey.map(([date, school, detail]) => <article key={school}><time>{date}</time><div><h3>{school}</h3><p>{detail}</p></div></article>)}</div>
        </section>
      </div>

      <footer><a className="brand footer-brand" href="#top"><span>Kota Morimoto</span></a><p>{text.footer}</p><span>© 2026 KOTA MORIMOTO</span></footer>
    </main>
  );
}
