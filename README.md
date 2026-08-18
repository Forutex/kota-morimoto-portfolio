# Kota Morimoto — Graduate Portfolio

大学院での学習とプロジェクトを紹介する、日本語・英語対応のポートフォリオです。

## 掲載内容

- Digital Experience Design Studio — User Research / HCD
- Internet Programming — Expense Tracker Web Application
- Database — Starbucks Ordering Database
- Project Management — Playtesting AI Project Plan

## ローカルで確認する

Node.js 20.9以上をインストールした状態で、プロジェクトフォルダ内から以下を実行します。

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## GitHubへ登録する

1. GitHubで空のリポジトリを作成します。
2. このフォルダ内で以下を実行します。

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

`YOUR-USERNAME` と `YOUR-REPOSITORY` は、自分のGitHubユーザー名と作成したリポジトリ名に置き換えてください。

## Vercelで公開する

1. VercelへGitHubアカウントでログインします。
2. **Add New → Project** を選びます。
3. GitHubへ登録したリポジトリをImportします。
4. Framework Presetが **Next.js** になっていることを確認します。
5. **Deploy** を押します。

環境変数やデータベースは使用していないため、追加設定は不要です。GitHubの`main`ブランチへ変更をpushすると、Vercelが自動で再公開します。

## 独自ドメインを使う場合

Vercelのプロジェクト画面で **Settings → Domains** を開き、取得したドメインを追加します。表示されたDNSレコードを、ドメインを購入したサービス側へ登録してください。

## 後から変更する場所

- ホームページ：`app/page.tsx`
- HCD詳細：`app/projects/digital-experience-design-studio/page.tsx`
- Expense Tracker詳細：`app/projects/expense-tracker/page.tsx`
- Database詳細：`app/projects/database/page.tsx`
- Project Management詳細：`app/projects/project-management/page.tsx`
- 全体デザイン：`app/globals.css`
- 画像：`public/projects/`

GitHub URLなどを追加した後は、変更したファイルを保存して以下を実行します。

```bash
git add .
git commit -m "Update portfolio"
git push
```
