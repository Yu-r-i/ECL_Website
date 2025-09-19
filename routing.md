## tree
[研究室サーバ群]
├── Webサーバ (Apache/Nginx)
│   └── root/ (公開コンテンツ)
│       ├── index.html
│       ├── research.html
│       ├── members.html
│       ├── news.html
│       ├── for-students.html
│       ├── for-industry.html
│       ├── for-seminar.html
│       └── contact.html
│
├── 内部アーカイブサーバ (Reactアプリ + API)
│   └── root/seminar/ (認証必須)
│       ├── index.html (Reactアプリ)
│       ├── assets/ (Reactビルド成果物)
│       └── config.js (APIエンドポイント設定)
│
├── APIサーバ (同一物理 or VM)
│   ├── REST API (Node.js/Express または Python/Flask)
│   └── エンドポイント
│       ├── GET /api/reports  (ゼミ課題レポート一覧)
│       ├── GET /api/papers   (卒論一覧)
│       └── GET /api/files/... (PDFファイル取得)
│
└── DBサーバ (MySQL/PostgreSQL)
    ├── reports テーブル
    │   ├── id, title, author, year, keywords, file_path
    └── papers テーブル
        ├── id, title, author, year, keywords, file_path

<br>

## flow
        [学生PCのブラウザ]
        │
        │ 1. HTTPリクエスト (例: /seminar/reports)
        ▼
[研究室Webサーバ]
   └── 配信: Reactアプリ (seminar/index.html, assets/)
        │
        │ 2. ReactがAPI呼び出し (fetch /api/reports)
        ▼
[APIサーバ (Express/Flask)]
   └── 認証処理 (Basic認証 or LAN制御)
        │
        │ 3. SQLクエリ発行 (SELECT * FROM reports)
        ▼
[MySQLサーバ]
   └── データ取得 (reports/papers テーブル)
        │
        │ 4. JSONレスポンスに変換
        ▼
[APIサーバ]
   └── JSON返却
        │
        │ 5. JSONを受信 → Reactに渡す
        ▼
[Reactアプリ]
   └── 検索・フィルタ処理 (ブラウザ側で実行)
        │
        │ 6. ユーザー操作でファイルプレビュー要求
        ▼
[APIサーバ]
   └── ファイルパス確認 (DBの file_path を参照)
        │
        │ 7. PDFファイルを返却 (application/pdf)
        ▼
[学生PCのブラウザ]
   └── iframe でPDFプレビュー or ダウンロード
   