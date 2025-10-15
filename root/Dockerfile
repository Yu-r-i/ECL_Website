# 軽量なNginxベース
FROM nginx:stable-alpine

# 公開ディレクトリ
WORKDIR /usr/share/nginx/html

# root配下の全てのファイルをコピー
COPY . .

# React用のSPA対応設定を適用
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
