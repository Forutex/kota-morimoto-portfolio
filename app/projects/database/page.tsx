"use client";
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import { useEffect, useState } from "react";

type Language = "ja" | "en";

const content = {
  ja: {
    back: "プロジェクト一覧へ戻る",
    nav: [["projects", "プロジェクト"], ["learning", "学んだこと"], ["about", "プロフィール"]],
    course: "Database",
    title: "Starbucks Ordering Database",
    lead: "店舗での注文を題材に、ERDからテーブル、制約、クエリ、ビューまでを一連のデータベースとして設計した個人課題です。",
    facts: [["形式", "個人課題"], ["データモデル", "8テーブル"], ["実装", "PostgreSQL / SQL"], ["成果", "ERD・DDL・Query・View"]],
    overviewLabel: "DATABASE OVERVIEW",
    overviewTitle: "注文の流れをデータ構造に置き換える",
    purposeTitle: "対象にした業務",
    purpose: "顧客が店舗で商品とサイズを選び、スタッフが注文を受け、支払いを処理する流れを対象にしました。注文時の単価と数量を明細に残し、後から注文内容を確認できる構成です。",
    structureTitle: "8つのテーブル",
    structure: "customer、orders、orderline、menu_size、menu、payment、staff、branchを定義しました。注文と商品サイズの多対多関係はorderlineで表し、スタッフはbranchと上司情報に関連付けています。",
    erdLabel: "ENTITY RELATIONSHIP",
    erdTitle: "ERDとリレーション",
    erdBody: "主キーと外部キーを基準に、顧客・注文・商品・支払い・スタッフ・店舗を接続しました。注文明細を中間に置くことで、1件の注文に複数の商品を持たせています。",
    erdAlt: "Starbucks Ordering DatabaseのERD",
    erdCaption: "提出資料のERD：8テーブルと主なリレーション",
    rulesLabel: "DATA INTEGRITY",
    rulesTitle: "業務ルールを制約にする",
    rulesIntro: "入力値の誤りや関係の不整合を、アプリケーション側だけでなくデータベース側でも防ぐために制約を設定しました。",
    rules: [
      ["Price", "商品価格を0以上に限定。"],
      ["Size", "サイズをShort / Tall / Grande / Venti / Oneに限定。"],
      ["Order number", "注文番号を3桁の形式に限定。"],
      ["Subtotal", "小計が数量×注文時単価と一致するように設定。"],
      ["Staff hierarchy", "スタッフ自身を上司として登録できないように設定。"],
    ],
    constraintsAlt: "CHECK制約を説明した提出スライド",
    constraintsCaption: "提出資料のCHECK制約：値域、形式、計算結果、自己参照を検証",
    queryLabel: "SQL QUERIES",
    queryTitle: "取得・集計・再利用",
    queryIntro: "基本的なSELECTに加え、JOIN、GROUP BY / HAVING、Subquery、スタッフのSelf Joinを作成。複数テーブルの注文情報はViewとしてまとめました。",
    groupAlt: "GROUP BYとHAVINGを使ったSQLクエリ",
    groupCaption: "注文ごとの合計金額を集計し、20を超える注文だけを抽出",
    viewAlt: "注文詳細Viewの定義と実行結果",
    viewCaption: "v_order_details：注文・顧客・商品・サイズ・明細をまとめたView",
    learningLabel: "WHAT THIS SHOWS",
    learningTitle: "この課題で扱った範囲",
    learning: "ERDで関係を整理し、DDLで構造と制約を定義し、QueryとViewで必要な情報を取り出すところまでを一つの課題で経験しました。データを保存するだけでなく、注文時点の価格を明細に残すなど、後から正しく参照できる構造を考えました。",
  },
  en: {
    back: "Back to projects",
    nav: [["projects", "Projects"], ["learning", "Learning"], ["about", "About"]],
    course: "Database",
    title: "Starbucks Ordering Database",
    lead: "An individual assignment designing an ordering database from its ERD through tables, constraints, queries and a reusable view.",
    facts: [["Format", "Individual assignment"], ["Data model", "8 tables"], ["Implementation", "PostgreSQL / SQL"], ["Output", "ERD, DDL, queries and view"]],
    overviewLabel: "DATABASE OVERVIEW",
    overviewTitle: "Translating an ordering flow into data",
    purposeTitle: "Business flow",
    purpose: "The model covers customers choosing menu items and sizes, staff receiving orders, and payments being processed at a branch. Each line stores quantity and the price at the time of ordering so order details can be reconstructed later.",
    structureTitle: "Eight tables",
    structure: "I defined customer, orders, orderline, menu_size, menu, payment, staff and branch. The many-to-many relationship between orders and menu sizes is resolved through orderline, while staff records connect to branches and a supervisor relationship.",
    erdLabel: "ENTITY RELATIONSHIP",
    erdTitle: "ERD and relationships",
    erdBody: "Primary and foreign keys connect customers, orders, products, payments, staff and branches. The order line junction lets one order contain multiple products.",
    erdAlt: "ERD for the Starbucks Ordering Database",
    erdCaption: "Submitted ERD showing eight tables and their main relationships",
    rulesLabel: "DATA INTEGRITY",
    rulesTitle: "Expressing business rules as constraints",
    rulesIntro: "Constraints were added so invalid values and inconsistent relationships are rejected by the database itself.",
    rules: [
      ["Price", "Restricts product prices to zero or above."],
      ["Size", "Limits sizes to Short, Tall, Grande, Venti or One."],
      ["Order number", "Restricts order numbers to a three-digit format."],
      ["Subtotal", "Checks that subtotal equals quantity multiplied by the unit price at order."],
      ["Staff hierarchy", "Prevents a staff member from being recorded as their own boss."],
    ],
    constraintsAlt: "Submission slide explaining CHECK constraints",
    constraintsCaption: "CHECK constraints validating ranges, formats, calculations and self-reference",
    queryLabel: "SQL QUERIES",
    queryTitle: "Retrieval, aggregation and reuse",
    queryIntro: "Alongside basic SELECT statements, the submission includes joins, GROUP BY / HAVING, a subquery and a staff self-join. A view combines order information spread across multiple tables.",
    groupAlt: "SQL query using GROUP BY and HAVING",
    groupCaption: "Aggregating totals per order and returning only orders above 20",
    viewAlt: "Definition and output of the order-details view",
    viewCaption: "v_order_details combines order, customer, product, size and line-item data",
    learningLabel: "WHAT THIS SHOWS",
    learningTitle: "Scope of the assignment",
    learning: "The assignment covered one continuous database workflow: modelling relationships in an ERD, defining structure and constraints in DDL, and retrieving information through queries and a view. It also considered how to preserve accurate historical order details, such as storing the unit price at the time of purchase.",
  },
} as const;

export default function DatabaseProject() {
  const [language, setLanguage] = useState<Language>("ja");
  const text = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${text.title} | Kota Morimoto`;
  }, [language, text.title]);

  return (
    <main id="top" className="case-page database-case-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kota Morimoto home"><span>Kota Morimoto</span></a>
        <nav aria-label="Primary navigation">{text.nav.map(([id, label]) => <a key={id} href={`/#${id}`}>{label}</a>)}</nav>
        <div className="language-toggle" aria-label="Language selector">
          <button onClick={() => setLanguage("ja")} aria-pressed={language === "ja"}>JP</button>
          <button onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <section className="case-hero database-case-hero">
        <a className="case-back" href="/#projects"><span aria-hidden="true">←</span>{text.back}</a>
        <p className="case-course">{text.course}</p>
        <h1>{text.title}</h1>
        <p className="case-lead">{text.lead}</p>
        <dl className="case-facts">{text.facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl>
      </section>

      <section className="case-section case-overview">
        <div className="case-heading"><p className="kicker">{text.overviewLabel}</p><h2>{text.overviewTitle}</h2></div>
        <div className="case-two-column">
          <article><span>01</span><h3>{text.purposeTitle}</h3><p>{text.purpose}</p></article>
          <article><span>02</span><h3>{text.structureTitle}</h3><p>{text.structure}</p></article>
        </div>
      </section>

      <section className="case-section artefact-section database-erd-section">
        <div className="case-heading"><p className="kicker">{text.erdLabel}</p><h2>{text.erdTitle}</h2></div>
        <p className="artefact-intro">{text.erdBody}</p>
        <figure className="document-figure">
          <img src="/projects/database/erd.webp" width="1600" height="900" alt={text.erdAlt} />
          <figcaption>{text.erdCaption}</figcaption>
        </figure>
      </section>

      <section className="case-section artefact-section data-rules-section">
        <div className="case-heading"><p className="kicker">{text.rulesLabel}</p><h2>{text.rulesTitle}</h2></div>
        <p className="artefact-intro">{text.rulesIntro}</p>
        <div className="rules-layout">
          <ol className="compact-rules">{text.rules.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}</ol>
          <figure className="document-figure"><img src="/projects/database/constraints.webp" width="1600" height="900" alt={text.constraintsAlt} /><figcaption>{text.constraintsCaption}</figcaption></figure>
        </div>
      </section>

      <section className="case-section artefact-section query-section">
        <div className="case-heading"><p className="kicker">{text.queryLabel}</p><h2>{text.queryTitle}</h2></div>
        <p className="artefact-intro">{text.queryIntro}</p>
        <div className="document-pair">
          <figure className="document-figure"><img src="/projects/database/group-by.webp" width="1600" height="900" alt={text.groupAlt} /><figcaption>{text.groupCaption}</figcaption></figure>
          <figure className="document-figure"><img src="/projects/database/view.webp" width="1600" height="900" alt={text.viewAlt} /><figcaption>{text.viewCaption}</figcaption></figure>
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
