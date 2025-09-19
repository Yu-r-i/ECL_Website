## tree
root/
├── public/                         # 静的コンテンツ（公開HTML）
│   ├── index.html                  # Home
│   ├── research.html               # Research（研究テーマ + 論文成果）
│   ├── members.html                # Members（教員・学生紹介）
│   ├── news.html                   # News & Events
│   ├── for-students.html           # For Students
│   ├── for-industry.html           # For Industry
│   ├── for-seminar.html            # For Seminar（アーカイブ案内）
│   └── contact.html                # Contact
│
├── seminar/                        # 内部アーカイブ（Reactアプリ）
│   ├── client/                     # React (フロント)
│   │   ├── public/
│   │   │   └── index.html
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── App.jsx
│   │   │   └── index.js
│   │   ├── package.json
│   │   └── ...
│   │
│   └── api/                        # Express API (バックエンド)
│       ├── app.js                  # サーバ本体
│       ├── routes/
│       │   ├── reports.js
│       │   └── papers.js
│       ├── models/
│       │   └── db.js
│       ├── package.json
│       └── ...
│
└── package.json                    # 全体管理用 (Expressがpublicとseminarを統合配信)

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
   