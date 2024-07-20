# Node.js の stable バージョンを公式ページから確認し、DockerHub から alpine ベースのものを指定
FROM node:18-alpine

# docker-compose.yml から WORKDIR の値を受け取る
ARG WORKDIR

# コンテナのホームディレクトリを設定する
ENV HOME=/${WORKDIR}

# コマンド実行する作業ディレクトリを設定する
WORKDIR ${HOME}

# Alpine のリポジトリから最新インデックスを取得し、npm 自体も最新版に更新する
RUN apk update && npm install -g npm

# Vite で開発サーバーを起動する
CMD ["npm", "run", "dev"]