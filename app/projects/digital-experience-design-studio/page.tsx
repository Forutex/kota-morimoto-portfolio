"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import { useEffect, useState } from "react";

type Language = "ja" | "en";

const content = {
  ja: {
    back: "プロジェクト一覧へ戻る",
    nav: [["projects", "プロジェクト"], ["learning", "学んだこと"], ["about", "プロフィール"]],
    course: "Digital Experience Design Studio",
    title: "人間中心設計に基づいたユーザーリサーチ経験",
    lead: "65〜74歳の高齢者を対象に、音楽と日常生活の関係を調べたユーザーリサーチ中心のチームプロジェクトです。5名が各2名、計10名へインタビューし、調査結果を統合して体験の方向性を提案しました。",
    facts: [["対象", "65〜74歳の高齢者"], ["領域", "User Research / HCD"], ["調査", "10名（5名×各2名）"], ["成果", "調査結果・体験提案"]],
    overviewLabel: "PROJECT OVERVIEW",
    overviewTitle: "プロジェクト概要",
    challengeTitle: "リサーチクエスチョン",
    challenge: "退職後の生活で、音楽を通じた自己表現と人とのつながりを、無理なく続けられる体験はどのようなものか。",
    responseTitle: "調査の焦点",
    response: "音楽を聴く場面や目的だけでなく、記憶や感情との関係、孤独を感じる状況、デジタルサービスへの不安までを聞き取りました。",
    researchLabel: "USER RESEARCH",
    researchTitle: "インタビューから見えた4つのテーマ",
    researchIntro: "チーム全体で実施した10名へのインタビュー内容をAffinity Diagramで整理し、個別の発言を横断して共通するテーマを抽出しました。",
    findings: [
      ["01", "テクノロジーの難しさ", "音楽を選んで再生したいだけでも、既存サービスは手順が多く複雑だと感じられていました。"],
      ["02", "音楽と記憶", "特定の曲が過去の出来事や人との時間を思い出させ、安心感につながっていました。"],
      ["03", "感情の調整", "音楽は気分をつくる、変える、落ち着かせるために日常的に使われていました。"],
      ["04", "孤独との関係", "音楽は静かな環境を満たし、一人で過ごす時間の孤独感を和らげる役割を持っていました。"],
    ],
    artefactCaption: "実際のインタビュー内容を分類したAffinity Diagram",
    processLabel: "RESEARCH-LED PROCESS",
    processTitle: "調査を中心にしたプロセス",
    process: [
      ["01", "背景調査", "高齢者、音楽、孤独、アイデンティティに関する既存情報から、調査する範囲を定めました。"],
      ["02", "インタビュー", "チーム5名が各2名、計10名の経験を聞き、音楽との関わり方、感情、記憶、デジタル利用上の不安を集めました。"],
      ["03", "分析と統合", "Affinity Diagramで発言を分類し、4つのテーマを抽出。Personaでニーズと文脈をまとめました。"],
      ["04", "体験提案", "調査結果をもとに、対面の歌唱イベントと参加を補助するデジタル接点の方向性を提案しました。"],
    ],
    proposalNote: "画面やストーリーボードは、開発したアプリではありません。調査結果がどのような体験につながり得るかを示す補助的なコンセプト提案です。",
    learningLabel: "KEY LEARNING",
    learningTitle: "このプロジェクトから学んだこと",
    learning: "ユーザーの発言をそのまま機能に変えるのではなく、複数の声を整理し、その背後にある共通の文脈やニーズを見つけることが重要だと学びました。また、デジタル包摂は操作性だけでなく、利用前の不安や参加までの負担にも関係します。",
    videoLabel: "PROJECT VIDEO",
    videoTitle: ["チームによる", "プロジェクト紹介"],
    videoBody: "ユーザーリサーチと、そこから導いた体験提案を3分45秒で紹介しています。",
    videoFallback: "YouTubeで動画を見る",
    videoTitleAttr: "Team KMAJF プロジェクト動画",
  },
  en: {
    back: "Back to projects",
    nav: [["projects", "Projects"], ["learning", "Learning"], ["about", "About"]],
    course: "Digital Experience Design Studio",
    title: "User Research Grounded in Human-Centred Design",
    lead: "A user-research-led team project exploring how music relates to the everyday lives of adults aged 65–74. Five team members each interviewed two people, giving ten participants in total, before synthesising the findings into an experience proposal.",
    facts: [["Audience", "Adults aged 65–74"], ["Field", "User Research / HCD"], ["Research", "10 people (5 × 2)"], ["Outcome", "Research findings and experience proposal"]],
    overviewLabel: "PROJECT OVERVIEW",
    overviewTitle: "Project overview",
    challengeTitle: "Research question",
    challenge: "How might music support self-expression and social connection after retirement in a way that feels comfortable to join and sustain?",
    responseTitle: "Research focus",
    response: "The interviews explored not only listening habits, but also connections with memory and emotion, situations involving loneliness and concerns around digital music services.",
    researchLabel: "USER RESEARCH",
    researchTitle: "Four themes from the interviews",
    researchIntro: "We organised findings from all ten interviews in an affinity diagram, comparing individual comments to identify themes shared across participants.",
    findings: [
      ["01", "Technology difficulties", "Existing music services could feel overly complex when participants simply wanted to select and play music."],
      ["02", "Music and memories", "Certain songs recalled past events and time spent with others, providing a sense of comfort."],
      ["03", "Mood regulation", "Music was used in everyday life to create, shift or settle a particular mood."],
      ["04", "Loneliness", "Music filled quiet environments and helped reduce feelings of being alone."],
    ],
    artefactCaption: "Affinity diagram created from the interview material",
    processLabel: "RESEARCH-LED PROCESS",
    processTitle: "A research-led process",
    process: [
      ["01", "Background research", "Reviewed existing information about older adults, music, loneliness and identity to define the research scope."],
      ["02", "Interviews", "Five team members interviewed two people each, collecting ten accounts of music, emotion, memory and concerns around digital technology."],
      ["03", "Analysis and synthesis", "Clustered comments in an affinity diagram, identified four themes and expressed needs and context in a persona."],
      ["04", "Experience proposal", "Translated the research into a proposed in-person singalong experience supported by optional digital touchpoints."],
    ],
    proposalNote: "The screens and storyboards are not a developed application. They are supporting concept artefacts showing how the research findings could translate into an experience.",
    learningLabel: "KEY LEARNING",
    learningTitle: "What I learned",
    learning: "I learned not to turn individual comments directly into features, but to organise multiple voices and identify their shared contexts and needs. Digital inclusion also involves uncertainty before use and effort around participation—not usability alone.",
    videoLabel: "PROJECT VIDEO",
    videoTitle: ["Team project", "presentation"],
    videoBody: "A 3-minute 45-second overview of the user research and the experience proposal derived from it.",
    videoFallback: "Watch on YouTube",
    videoTitleAttr: "Team KMAJF project video",
  },
} as const;

export default function DigitalExperienceDesignStudio() {
  const [language, setLanguage] = useState<Language>("ja");
  const text = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${text.title} | Kota Morimoto`;
  }, [language, text.title]);

  return (
    <main id="top" className="case-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kota Morimoto home"><span>Kota Morimoto</span></a>
        <nav aria-label="Primary navigation">
          {text.nav.map(([id, label]) => <a key={id} href={`/#${id}`}>{label}</a>)}
        </nav>
        <div className="language-toggle" aria-label="Language selector">
          <button onClick={() => setLanguage("ja")} aria-pressed={language === "ja"}>JP</button>
          <button onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <section className="case-hero">
        <a className="case-back" href="/#projects"><span aria-hidden="true">←</span>{text.back}</a>
        <p className="case-course">{text.course}</p>
        <h1>{text.title}</h1>
        <p className="case-lead">{text.lead}</p>
        <dl className="case-facts">
          {text.facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
        </dl>
      </section>

      <section className="case-section case-overview">
        <div className="case-heading"><p className="kicker">{text.overviewLabel}</p><h2>{text.overviewTitle}</h2></div>
        <div className="case-two-column">
          <article><span>01</span><h3>{text.challengeTitle}</h3><p>{text.challenge}</p></article>
          <article><span>02</span><h3>{text.responseTitle}</h3><p>{text.response}</p></article>
        </div>
      </section>

      <section className="case-section research-section">
        <div className="case-heading"><p className="kicker">{text.researchLabel}</p><h2>{text.researchTitle}</h2></div>
        <p className="research-intro">{text.researchIntro}</p>
        <figure className="research-artefact">
          <img src="/projects/ecd/affinity-diagram.webp" width="1800" height="854" alt={text.artefactCaption} />
          <figcaption>{text.artefactCaption}</figcaption>
        </figure>
        <div className="findings-grid">
          {text.findings.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="case-section case-process">
        <div className="case-heading"><p className="kicker">{text.processLabel}</p><h2>{text.processTitle}</h2></div>
        <div className="process-grid">
          {text.process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <p className="proposal-note">{text.proposalNote}</p>
      </section>

      <section className="case-section case-learning">
        <div className="case-heading"><p className="kicker">{text.learningLabel}</p><h2>{text.learningTitle}</h2></div>
        <p>{text.learning}</p>
      </section>

      <section className="case-section video-section">
        <div className="video-copy"><p className="kicker">{text.videoLabel}</p><h2>{text.videoTitle.map((line) => <span key={line}>{line}</span>)}</h2><p>{text.videoBody}</p></div>
        <div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/Pm_FV4zE614"
              title={text.videoTitleAttr}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <a className="video-fallback" href="https://youtu.be/Pm_FV4zE614" target="_blank" rel="noreferrer">{text.videoFallback}<span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="/"><span>Kota Morimoto</span></a><a className="footer-back" href="/#projects">{text.back}</a><span>© 2026 KOTA MORIMOTO</span></footer>
    </main>
  );
}
