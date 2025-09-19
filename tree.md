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