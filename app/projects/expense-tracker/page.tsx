"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";

type Language = "ja" | "en";

const content = {
  ja: {
    back: "プロジェクト一覧へ戻る",
    nav: [["projects", "プロジェクト"], ["learning", "学んだこと"], ["about", "プロフィール"]],
    course: "Internet Programming",
    title: "Expense Tracker Web Application",
    lead: "React/Vite、FastAPI、MySQLを接続し、支出管理と認証を備えたWebアプリケーションをチームで実装しました。",
    facts: [["形式", "チーム開発"], ["フロントエンド", "React / Vite"], ["バックエンド", "FastAPI / SQLAlchemy"], ["データベース", "MySQL"]],
    focusLabel: "PROJECT FOCUS",
    focusTitle: "プロジェクト概要",
    scopeTitle: "プロジェクトの範囲",
    scope: "支出の作成・一覧・更新・削除・検索を行う基本的な家計簿アプリです。JWT認証とロール別アクセス、操作ログを含む構成をチームで実装しました。",
    roleTitle: "主な担当",
    role: "バックエンドを中心に、Expenseモデル、Pydantic Schema、CRUD・検索APIの実装を担当しました。認証Middlewareは別メンバーの担当です。",
    stackLabel: "TECH STACK",
    stackTitle: "3つの層を接続する",
    layers: [
      ["01", "React / Vite", "Frontend", "画面、ルーティング、フォーム入力、API呼び出し。React Routerとjwt-decodeも利用。"],
      ["02", "FastAPI", "REST API", "Route、依存性注入、Pydanticによる入出力の検証、認証済みユーザーの取得。"],
      ["03", "MySQL", "Data layer", "SQLAlchemy ModelとSessionを介し、User・Expense・UserActivityを永続化。"],
    ],
    journeyLabel: "IMPLEMENTATION JOURNEY",
    journeyTitle: "実装の道程",
    journey: [
      ["01", "データ構造を定義", "UserとExpenseを外部キーで結び、金額、カテゴリ、日付、説明などの型と制約を整理しました。"],
      ["02", "APIの契約を作成", "ExpenseCreate・ExpenseUpdate・ExpenseResponseを分け、受け取るデータと返すデータを明確にしました。"],
      ["03", "CRUDと検索を実装", "FastAPIのRouteに取得・作成・更新・削除・検索を実装し、SQLAlchemy SessionでDB操作を行いました。"],
      ["04", "認証とデータを接続", "すべての支出Queryをcurrent_user.idで絞り、別ユーザーのデータへアクセスできない構成にしました。"],
    ],
    learningLabel: "KEY LEARNING",
    learningTitle: "このプロジェクトから学んだこと",
    learning: "実装を通して、React側の操作がFastAPIのRouteを通り、Schemaで受け取られ、SQLAlchemyを介してMySQLへ保存される一連の流れを確認しました。また、自分の担当範囲を他メンバーの実装と接続するチーム開発を経験しました。",
    repoLabel: "SOURCE CODE",
    repoTitle: "実装をGitHubで見る",
    repoBody: "フロントエンドとバックエンドを含むチームリポジトリです。",
    repoCta: "GitHubリポジトリを開く",
  },
  en: {
    back: "Back to projects",
    nav: [["projects", "Projects"], ["learning", "Learning"], ["about", "About"]],
    course: "Internet Programming",
    title: "Expense Tracker Web Application",
    lead: "A team-built web application connecting React/Vite, FastAPI and MySQL to support expense management and authentication.",
    facts: [["Format", "Team development"], ["Frontend", "React / Vite"], ["Backend", "FastAPI / SQLAlchemy"], ["Database", "MySQL"]],
    focusLabel: "PROJECT FOCUS",
    focusTitle: "Project overview",
    scopeTitle: "Project scope",
    scope: "A conventional expense tracker supporting create, read, update, delete and search. As a team, we also implemented JWT authentication, role-based access and activity logging.",
    roleTitle: "My main contribution",
    role: "I focused on the backend, including the Expense model, Pydantic schemas, and CRUD and search APIs. Authentication middleware was handled by another team member.",
    stackLabel: "TECH STACK",
    stackTitle: "Connecting three layers",
    layers: [
      ["01", "React / Vite", "Frontend", "Interface, routing, form input and API calls, supported by React Router and jwt-decode."],
      ["02", "FastAPI", "REST API", "Routes, dependency injection, Pydantic request/response validation and access to the authenticated user."],
      ["03", "MySQL", "Data layer", "Persistence of User, Expense and UserActivity through SQLAlchemy models and sessions."],
    ],
    journeyLabel: "IMPLEMENTATION JOURNEY",
    journeyTitle: "The implementation path",
    journey: [
      ["01", "Define the data structure", "Linked User and Expense with a foreign key, then defined types and constraints for amount, category, date and description."],
      ["02", "Create the API contract", "Separated ExpenseCreate, ExpenseUpdate and ExpenseResponse to make incoming and outgoing data explicit."],
      ["03", "Implement CRUD and search", "Built FastAPI routes for list, create, update, delete and search, using SQLAlchemy sessions for database operations."],
      ["04", "Connect identity to data", "Scoped every expense query to current_user.id so users could not access another user’s records."],
    ],
    learningLabel: "KEY LEARNING",
    learningTitle: "What I learned",
    learning: "Through implementation, I traced the complete flow from a React interaction to a FastAPI route, a schema and persistence in MySQL through SQLAlchemy. I also gained experience connecting my assigned work with other team members’ implementation.",
    repoLabel: "SOURCE CODE",
    repoTitle: "View the implementation on GitHub",
    repoBody: "The team repository containing both frontend and backend source.",
    repoCta: "Open GitHub repository",
  },
} as const;

export default function ExpenseTrackerProject() {
  const [language, setLanguage] = useState<Language>("ja");
  const text = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${text.title} | Kota Morimoto`;
  }, [language, text.title]);

  return (
    <main id="top" className="case-page expense-case-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kota Morimoto home"><span>Kota Morimoto</span></a>
        <nav aria-label="Primary navigation">{text.nav.map(([id, label]) => <a key={id} href={`/#${id}`}>{label}</a>)}</nav>
        <div className="language-toggle" aria-label="Language selector">
          <button onClick={() => setLanguage("ja")} aria-pressed={language === "ja"}>JP</button>
          <button onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <section className="case-hero expense-case-hero">
        <a className="case-back" href="/#projects"><span aria-hidden="true">←</span>{text.back}</a>
        <p className="case-course">{text.course}</p>
        <h1>{text.title}</h1>
        <p className="case-lead">{text.lead}</p>
        <dl className="case-facts">{text.facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl>
      </section>

      <section className="case-section case-overview">
        <div className="case-heading"><p className="kicker">{text.focusLabel}</p><h2>{text.focusTitle}</h2></div>
        <div className="case-two-column">
          <article><span>01</span><h3>{text.scopeTitle}</h3><p>{text.scope}</p></article>
          <article><span>02</span><h3>{text.roleTitle}</h3><p>{text.role}</p></article>
        </div>
      </section>

      <section className="case-section stack-section">
        <div className="case-heading"><p className="kicker">{text.stackLabel}</p><h2>{text.stackTitle}</h2></div>
        <div className="tech-flow">{text.layers.map(([number, name, layer, body], index) => <article key={name}><span>{number}</span><small>{layer}</small><h3>{name}</h3><p>{body}</p>{index < text.layers.length - 1 && <i aria-hidden="true">↓</i>}</article>)}</div>
      </section>

      <section className="case-section implementation-section">
        <div className="case-heading"><p className="kicker">{text.journeyLabel}</p><h2>{text.journeyTitle}</h2></div>
        <div className="implementation-grid">{text.journey.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="case-section case-learning">
        <div className="case-heading"><p className="kicker">{text.learningLabel}</p><h2>{text.learningTitle}</h2></div>
        <p>{text.learning}</p>
      </section>

      <section className="case-section repo-section">
        <div><p className="kicker">{text.repoLabel}</p><h2>{text.repoTitle}</h2><p>{text.repoBody}</p></div>
        <a href="https://github.com/Forutex/Expense-Tracker-Ass2" target="_blank" rel="noreferrer">{text.repoCta}<span aria-hidden="true">↗</span></a>
      </section>

      <footer><a className="brand footer-brand" href="/"><span>Kota Morimoto</span></a><a className="footer-back" href="/#projects">{text.back}</a><span>© 2026 KOTA MORIMOTO</span></footer>
    </main>
  );
}
