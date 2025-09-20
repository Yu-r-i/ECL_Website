## tree
website/
└── root/
    ├── css/                          # 公開ページ共通スタイル群
    │   ├── common.css                # 全ページ共通（フォント・色・基本レイアウト）
    │   ├── header.css                # 共通ヘッダー用スタイル
    │   ├── footer.css                # 共通フッター用スタイル
    │   └── layout.css                # レイアウト調整（グリッド・レスポンシブ）
    │
    ├── index.html                    # Home（研究室トップページ）
    │
    ├── research/                     # Research（研究テーマ + 論文成果）
    │   ├── index.html                # 研究紹介ページ本体
    │   └── research.css              # Research専用スタイル
    │
    ├── members/                      # Members（教員・学生紹介）
    │   ├── index.html
    │   └── members.css
    │
    ├── news/                         # News & Events（活動報告・学会発表）
    │   ├── index.html
    │   └── news.css
    │
    ├── for-students/                 # For Students（下級生向け情報）
    │   ├── index.html
    │   └── for-students.css
    │
    ├── for-industry/                 # For Industry（産学官向け情報）
    │   ├── index.html
    │   └── for-industry.css
    │
    ├── for-seminar/                  # For Seminar（ゼミ専用アーカイブ案内ページ）
    │   ├── index.html
    │   └── for-seminar.css
    │
    ├── contact/                      # Contact（問い合わせ・所在地）
    │   ├── index.html
    │   └── contact.css
    │
    └── seminar/                      # 内部アーカイブ（認証必須、React + API）
        ├── client/                   # Reactフロントエンド（ソースコード）
        │   ├── public/               # React公開用（ビルド前）
        │   │   └── index.html
        │   ├── src/                  # Reactソースコード本体
        │   │   ├── components/       # 再利用可能なコンポーネント
        │   │   │   ├── SearchBar.jsx # 検索バー
        │   │   │   ├── ItemList.jsx  # データリスト表示
        │   │   │   ├── ItemPreview.jsx # PDF/Markdownプレビュー表示
        │   │   │   └── Layout.jsx    # レイアウト（2ペイン構成など）
        │   │   ├── pages/            # ページ単位コンポーネント
        │   │   │   ├── Dashboard.jsx # ダッシュボード（統計・概要）
        │   │   │   ├── ReportsPage.jsx # レポートアーカイブページ
        │   │   │   └── PapersPage.jsx  # 卒論アーカイブページ
        │   │   ├── App.jsx           # ルーティング制御
        │   │   └── index.js          # Reactエントリーポイント
        │   ├── package.json          # React依存関係管理
        │   └── ...
        │
        ├── api/                      # Express APIサーバ
        │   ├── app.js                # Expressアプリ本体（ルーティング設定）
        │   ├── routes/               # APIルート群
        │   │   ├── reports.js        # /api/reports （レポート一覧/検索）
        │   │   └── papers.js         # /api/papers  （卒論一覧/検索）
        │   ├── models/               # DB接続やクエリ定義
        │   │   └── db.js             # MySQL接続設定・クエリヘルパ
        │   ├── package.json          # API依存関係管理
        │   └── ...
        │
        └── build/                    # Reactビルド成果物（本番用配信ディレクトリ）
            ├── index.html
            ├── static/
            │   ├── js/               # Reactビルド済みJavaScript
            │   └── css/              # Reactビルド済みCSS
            └── ...

<br>

## flow
[学生PCのブラウザ]
        │
        │ 1. アクセス (例: /, /research.html, /seminar/)
        ▼
[Expressサーバ]
   ├── 公開HTML配信 (public/*.html)
   │     └── /index.html, /research.html ...
   │
   ├── React配信 (/seminar/*)
   │     └── seminar/client/build/index.html
   │
   └── APIルート (/api/*)
         │
         │ 2. API呼び出し (例: GET /api/reports)
         ▼
   [MySQLサーバ]
         └── SQL実行 (SELECT * FROM reports)
         │
         │ 3. 検索結果を取得
         ▼
   [Expressサーバ(API)]
         └── JSON形式に変換
         │
         │ 4. JSONレスポンス
         ▼
[学生PCのブラウザ]
   ├── ReactアプリがJSONを受信
   ├── 検索・フィルタ処理 (ブラウザ側)
   └── クリックでPDFプレビュー要求
         │
         │ 5. GET /api/files/:id
         ▼
   [Expressサーバ(API)]
         └── MySQLでfile_path参照 → ストレージからPDF取得
         │
         │ 6. application/pdf を返却
         ▼
[学生PCのブラウザ]
   └── iframe 埋め込み or ダウンロード
   