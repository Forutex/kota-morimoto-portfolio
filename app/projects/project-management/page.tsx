"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import { useEffect, useState } from "react";

type Language = "ja" | "en";

const content = {
  ja: {
    back: "プロジェクト一覧へ戻る",
    nav: [["projects", "プロジェクト"], ["learning", "学んだこと"], ["about", "プロフィール"]],
    course: "Project Management",
    title: "Playtesting AI Project Plan",
    lead: "オープンワールドゲームの地形不具合を検出・報告するPlaytesting AIを題材に、スコープ、日程、コスト、リスク、ステークホルダーをまとめたプロジェクト計画課題です。AI自体を開発した課題ではありません。",
    facts: [["形式", "個人課題"], ["対象", "AI開発プロジェクトの計画"], ["期間", "37日間の計画"], ["成果", "統合プロジェクト計画書"]],
    scopeLabel: "SCOPE & APPROACH",
    scopeTitle: "最初に、計画する範囲を定める",
    inTitle: "In scope",
    inBody: "3Dマップデータをオフラインで読み込み、浮いているオブジェクトや進行不能地点などの地形関連エラーを検出し、開発チームへ報告する仕組みの計画。",
    outTitle: "Out of scope",
    outBody: "ゲームそのものの開発、オンライン環境でのゲームエンジン統合、ゲームバランスやUIなど地形以外の問題は対象外としました。",
    methodTitle: "Development approach",
    methodBody: "検出結果を繰り返し確認し、必要に応じて計画を調整できるよう、SDLCにはAgileを選択しました。",
    wbsLabel: "WORK BREAKDOWN STRUCTURE",
    wbsTitle: "成果物を作業単位へ分解",
    wbsBody: "受領・計画、AI設計、ゲーム統合、バグ検出、レポート作成の5領域に分け、さらにWork Packageまで細分化しました。",
    wbsAlt: "Playtesting AIプロジェクトのWork Breakdown Structure",
    wbsCaption: "提出資料のWBS：5領域をWork Packageまで分解",
    scheduleLabel: "TIME MANAGEMENT",
    scheduleTitle: "依存関係と所要時間を可視化",
    scheduleBody: "楽観値・最頻値・悲観値による三点見積りを行い、作業間の依存関係をネットワーク図に整理しました。計画期間は6月1日から7月7日までの37日間です。",
    networkAlt: "作業の依存関係を示すネットワーク図",
    networkCaption: "ネットワーク図：作業順序、期間、Floatを整理",
    riskLabel: "RISK MANAGEMENT",
    riskTitle: "起こり得る問題を先に整理",
    riskBody: "ゲームデータの未提供、検出精度不足、バグ件数の過多、地形バグ定義の曖昧さ、メンバー不在の5リスクを洗い出しました。影響と発生可能性を評価し、MitigateまたはAcceptの対応方針を設定しています。",
    riskAlt: "LikelihoodとImpactによるリスク評価マトリクス",
    riskCaption: "Risk matrix：Likelihood × Impactで優先度を判断",
    stakeholderLabel: "STAKEHOLDER & COMMUNICATION",
    stakeholderTitle: "誰が決め、誰が実行し、誰に伝えるか",
    stakeholderBody: "Project Manager、AI Engineer、Game Programmer、QA Tester、Sponsorの役割をRACIで整理し、報告内容、頻度、担当者、伝達手段をCommunication Planにまとめました。",
    raciAlt: "プロジェクトのRACIマトリクス",
    raciCaption: "RACI matrix：Responsible / Accountable / Consulted / Informedを整理",
    commAlt: "ステークホルダー別のCommunication Plan",
    commCaption: "Communication Plan：報告の頻度、目的、担当者、媒体を定義",
    learningLabel: "WHAT THIS SHOWS",
    learningTitle: "この課題で扱った範囲",
    learning: "企画の概要だけでなく、スコープ、WBS、見積り、依存関係、コスト、リスク、RACI、コミュニケーションまでを一つの計画書にまとめました。実装前に不確実性と責任分担を可視化する、プロジェクト管理の基本的な流れを扱った課題です。",
  },
  en: {
    back: "Back to projects",
    nav: [["projects", "Projects"], ["learning", "Learning"], ["about", "About"]],
    course: "Project Management",
    title: "Playtesting AI Project Plan",
    lead: "A planning assignment covering scope, schedule, cost, risk and stakeholders for a proposed playtesting AI that detects and reports terrain issues in an open-world game. The AI itself was not built as part of this assignment.",
    facts: [["Format", "Individual assignment"], ["Subject", "Planning an AI project"], ["Schedule", "37-day plan"], ["Output", "Integrated project plan"]],
    scopeLabel: "SCOPE & APPROACH",
    scopeTitle: "Define the boundaries before planning",
    inTitle: "In scope",
    inBody: "Planning an offline system that reads 3D map data, detects terrain-related issues such as floating objects and stuck points, and reports them to a development team.",
    outTitle: "Out of scope",
    outBody: "Game development, online integration with a game engine, and non-terrain issues such as game balance and interface problems were excluded.",
    methodTitle: "Development approach",
    methodBody: "Agile was selected as the SDLC approach so detection results could be reviewed iteratively and the plan adjusted as needed.",
    wbsLabel: "WORK BREAKDOWN STRUCTURE",
    wbsTitle: "Breaking deliverables into work packages",
    wbsBody: "The project was divided into five areas—receipt and planning, AI design, game integration, bug detection and reporting—and then decomposed to work-package level.",
    wbsAlt: "Work Breakdown Structure for the playtesting AI project",
    wbsCaption: "Submitted WBS decomposing five workstreams into work packages",
    scheduleLabel: "TIME MANAGEMENT",
    scheduleTitle: "Mapping dependencies and duration",
    scheduleBody: "Three-point estimates used optimistic, most likely and pessimistic durations, while a network diagram mapped task dependencies. The planned schedule runs for 37 days, from 1 June to 7 July.",
    networkAlt: "Network diagram showing project task dependencies",
    networkCaption: "Network diagram showing sequence, duration and float",
    riskLabel: "RISK MANAGEMENT",
    riskTitle: "Identify potential problems in advance",
    riskBody: "Five risks were recorded: unavailable game data, inadequate detection quality, too many bugs to summarise, an ambiguous terrain-bug definition and team absence. Each was assessed by likelihood and impact, with a mitigate or accept response.",
    riskAlt: "Risk matrix based on likelihood and impact",
    riskCaption: "Risk matrix prioritising risks through likelihood and impact",
    stakeholderLabel: "STAKEHOLDER & COMMUNICATION",
    stakeholderTitle: "Clarifying decisions, work and reporting",
    stakeholderBody: "A RACI matrix assigns responsibilities across the Project Manager, AI Engineer, Game Programmer, QA Tester and Sponsor. A communication plan then defines report type, frequency, owner and delivery method.",
    raciAlt: "RACI matrix for the project",
    raciCaption: "RACI matrix defining Responsible, Accountable, Consulted and Informed roles",
    commAlt: "Stakeholder communication plan",
    commCaption: "Communication plan defining report frequency, purpose, owner and medium",
    learningLabel: "WHAT THIS SHOWS",
    learningTitle: "Scope of the assignment",
    learning: "The final document combines scope, WBS, estimation, dependencies, cost, risk, RACI and communication in one plan. It demonstrates a basic project-management workflow for making uncertainty and responsibility visible before implementation begins.",
  },
} as const;

export default function ProjectManagementProject() {
  const [language, setLanguage] = useState<Language>("ja");
  const text = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${text.title} | Kota Morimoto`;
  }, [language, text.title]);

  return (
    <main id="top" className="case-page project-management-case-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kota Morimoto home"><span>Kota Morimoto</span></a>
        <nav aria-label="Primary navigation">{text.nav.map(([id, label]) => <a key={id} href={`/#${id}`}>{label}</a>)}</nav>
        <div className="language-toggle" aria-label="Language selector">
          <button onClick={() => setLanguage("ja")} aria-pressed={language === "ja"}>JP</button>
          <button onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <section className="case-hero project-management-case-hero">
        <a className="case-back" href="/#projects"><span aria-hidden="true">←</span>{text.back}</a>
        <p className="case-course">{text.course}</p>
        <h1>{text.title}</h1>
        <p className="case-lead">{text.lead}</p>
        <dl className="case-facts">{text.facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl>
      </section>

      <section className="case-section case-overview">
        <div className="case-heading"><p className="kicker">{text.scopeLabel}</p><h2>{text.scopeTitle}</h2></div>
        <div className="scope-grid">
          <article><span>01</span><h3>{text.inTitle}</h3><p>{text.inBody}</p></article>
          <article><span>02</span><h3>{text.outTitle}</h3><p>{text.outBody}</p></article>
          <article><span>03</span><h3>{text.methodTitle}</h3><p>{text.methodBody}</p></article>
        </div>
      </section>

      <section className="case-section artefact-section pm-wbs-section">
        <div className="case-heading"><p className="kicker">{text.wbsLabel}</p><h2>{text.wbsTitle}</h2></div>
        <p className="artefact-intro">{text.wbsBody}</p>
        <figure className="document-figure"><img src="/projects/project-management/wbs.webp" width="1050" height="650" alt={text.wbsAlt} /><figcaption>{text.wbsCaption}</figcaption></figure>
      </section>

      <section className="case-section artefact-section pm-schedule-section">
        <div className="case-heading"><p className="kicker">{text.scheduleLabel}</p><h2>{text.scheduleTitle}</h2></div>
        <p className="artefact-intro">{text.scheduleBody}</p>
        <figure className="document-figure document-figure-portrait"><img src="/projects/project-management/network-diagram.webp" width="1030" height="900" alt={text.networkAlt} /><figcaption>{text.networkCaption}</figcaption></figure>
      </section>

      <section className="case-section artefact-section pm-risk-section">
        <div className="case-heading"><p className="kicker">{text.riskLabel}</p><h2>{text.riskTitle}</h2></div>
        <p className="artefact-intro">{text.riskBody}</p>
        <figure className="document-figure document-figure-portrait"><img src="/projects/project-management/risk-matrix.webp" width="1050" height="900" alt={text.riskAlt} /><figcaption>{text.riskCaption}</figcaption></figure>
      </section>

      <section className="case-section artefact-section pm-stakeholder-section">
        <div className="case-heading"><p className="kicker">{text.stakeholderLabel}</p><h2>{text.stakeholderTitle}</h2></div>
        <p className="artefact-intro">{text.stakeholderBody}</p>
        <div className="document-pair document-pair-tall">
          <figure className="document-figure"><img src="/projects/project-management/raci.webp" width="1050" height="720" alt={text.raciAlt} /><figcaption>{text.raciCaption}</figcaption></figure>
          <figure className="document-figure"><img src="/projects/project-management/communication-plan.webp" width="1050" height="760" alt={text.commAlt} /><figcaption>{text.commCaption}</figcaption></figure>
        </div>
      </section>

      <section className="case-section case-learning">
        <div className="case-heading"><p className="kicker">{text.learningLabel}</p><h2>{text.learningTitle}</h2></div>
        <p>{text.learning}</p>
      </section>

      <footer><a className="brand footer-brand" href="/"><span>Kota Morimoto</span></a><a className="footer-back" href="/#projects">{text.back}</a><span>© 2026 KOTA MORIMOTO</span></footer>
    </main>
  );
}
