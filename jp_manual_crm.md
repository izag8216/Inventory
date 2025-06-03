# Claude Code + Cursor + Git Worktree + tmux + GitHub Actions + GitHub Pages 開発フロー（2025年6月版）

=======================
🛠 必要ツールのインストール
=======================
npm install -g @anthropic-ai/claude-code
sudo apt install git tmux
claude login

=======================
📁 プロジェクト初期化
=======================

## 空ファイル作成
```zsh
touch index.html styles.css app.js data.txt README.md CLAUDE.md .gitignore .cursorrules
```

## .gitignore 設定
```zsh
echo "manuals/" >> .gitignore
echo "node_modules/" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
```

### ファイル構成
- **index.html** : メインのHTMLファイル
- **styles.css** : スタイルシート
- **app.js** : JavaScript ロジック
- **data.txt** : 顧客データファイル
- **README.md** : 説明ファイル
- **CLAUDE.md** : 要件指示ファイル
- **.gitignore** : 無視ファイル（manuals/フォルダ除外設定済み）
- **.cursorrules** : Cursorのルールファイル

## Cursor + Sonnet4 でアプリ生成
```
UX/UXデザイン : Minimalist, stylish, modern, professional and product level. 
ユーザーストレスゼロ. 魅力的で使いやすい UI/UX デザインに仕上げること.
レスポンシブ対応. light-dark mode対応.
```

## Gitの初期化
```zsh
git init
git remote add origin https://github.com/izag8216/crm.git
```
git add .

git commit -m "feat: Initial CRM app release"

git branch -M main

git push -u origin main



=======================
📄 CLAUDE.md & README.md 作成例
=======================

## CLAUDE.md（要件指示）
```markdown
# CRM アプリ開発要件

## 技術仕様
- HTML/CSS/JSのみ
- 顧客データは data.txt に行単位で保存
- シンプルで意味のある構造
- コミットは詳細かつ要点を押さえて

## デザイン要件
- Minimalist, stylish, modern, professional
- レスポンシブ対応
- Light/Dark mode対応
- ユーザーストレスゼロのUX
```

## README.md（説明）
```markdown
# CRM アプリ

## 概要
HTML/CSS/JSで構成されたシンプルなCRM（Customer Relationship Management）Webアプリ。
ローカルの data.txt に顧客情報のCRUD操作。

## ファイル構成
- **index.html** : メインのHTMLファイル
- **styles.css** : スタイルシート
- **app.js** : JavaScript ロジック
- **data.txt** : 顧客データファイル

## 使用方法
`index.html` をブラウザで開くだけ。
```

=======================
🌿 Git Worktree 構成
=======================
git worktree add -b feature-html ../crm-html main
git worktree add -b feature-css ../crm-css main
git worktree add -b feature-js ../crm-js main
git worktree add -b feature-data ../crm-data main

=======================
🧱 tmux セッション構成
=======================

🌟 tmux new -s crm

# Ctrl+b → %（横）または "（縦）で4つのペインに分割
cd ../crm-html   && claude
cd ../crm-css    && claude
cd ../crm-js     && claude
cd ../crm-data   && claude

=======================
💡 Claude による要件出し
=======================
claude -p "HTML/CSS/JS で作るCRM（Customer Relationship Management）Webアプリの要件を洗い出して。顧客データは data.txt に保存。必要な機能やUI要素をまとめて。顧客名、会社名、連絡先、ステータス、担当者、取引履歴などの管理機能を含めて。"

=======================
🧩 各セッションで実装
=======================
# Pane 1: HTML Structure (index.html)
claude -p "CRMアプリのindex.htmlを作成してください。顧客追加フォーム、一覧表示、編集・削除機能を含むsemanticなHTML構造を書いてください。"

# Pane 2: CSS Styling (styles.css)
claude -p "CRMアプリ用のstyles.cssを作成してください。モダンで使いやすいUI、レスポンシブデザイン、顧客カードレイアウトを含めてください。"

# Pane 3: JavaScript Logic (app.js)
claude -p "CRMアプリのapp.jsを作成してください。data.txtに行単位で顧客情報を保存・読込・削除・編集するJavaScriptコードを作成してください。localStorageでファイル操作をエミュレートしてください。"

# Pane 4: Data Management (data.txt)
claude -p "CRMアプリのdata.txtファイル構造とサンプルデータを作成してください。顧客名、会社名、連絡先、ステータス、担当者、取引履歴、作成日などの情報を含めてください。"

=======================
✅ Claudeレビュー
=======================
claude
/review

=======================
✅ Git操作
=======================
# 各ブランチでの作業例
git add .
git commit -m "Add HTML structure for CRM app customer form and list"
git push -u origin feature-html

git add .
git commit -m "Add CSS styling for CRM app with modern responsive design"
git push -u origin feature-css

git add .
git commit -m "Add JavaScript logic for CRM app customer management"
git push -u origin feature-js

git add .
git commit -m "Add data structure and sample customers for CRM app"
git push -u origin feature-data

🌟この辺で Claude /initialize? で git link, PR? を自動作成. 🌟

=======================
🔁 GitHub PRに @claude
=======================
# PRコメント例
@claude このCRMアプリのPRのコードを確認して改善点を提案してください。

=======================
⚙ GitHub Actions CI
=======================
# .github/workflows/ci.yml
name: Claude CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  issue_comment:
    types: [created]

jobs:
  claude:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Claude
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          trigger_phrase: "@claude"

# Secrets に ANTHROPIC_API_KEY を設定（GitHub）

=======================
🚀 GitHub Pages デプロイ
=======================
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy static site
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .

# GitHub設定 → Pages → gh-pagesブランチを公開元に設定

=======================
🎉 完了！
=======================
Claudeによる要件定義〜HTML/CSS/JS/Data作成〜レビュー
Git Worktree + tmux による4つのファイル並列開発
GitHub Actions + Pages によるCI/CD & 自動デプロイ
がすべて自動化されるAI駆動CRM開発環境が完成！ 