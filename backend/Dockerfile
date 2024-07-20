# ベースイメージの指定
FROM ruby:3.3.4-alpine

# docker-compose.ymlからWORKDIRの値を受け取る
ARG WORKDIR

# パッケージを永続使用/一時的使用の2つの変数にまとめる
ARG RUNTIME_PACKAGES="bash imagemagick nodejs yarn tzdata mysql-dev mysql-client git less"
ARG DEV_PACKAGES="build-base curl-dev"

# docker-composeで受け取ったWORKDIRを展開して、RailsコンテナのHOMEという環境変数を設定する(ホームディレクトリを設定)
ENV HOME=/${WORKDIR}

# HOMEを展開して、WORKDIRを設定する(作業ディレクトリをホームディレクトリと統一する)
WORKDIR ${HOME}

# ホストにあるGemfileとGemfile.lockをコンテナにコピーする
COPY Gemfile* ./

# 必要なパッケージをインストールし、Node.jsとYarnもインストールする
RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash imagemagick nodejs yarn tzdata mysql-dev mysql-client git less && \
    apk add --virtual build-dependencies --no-cache build-base curl-dev && \
    apk add --no-cache \
        libxml2-dev \
        libxslt-dev \
        zlib-dev \
        tzdata \
        yaml-dev \
        musl-dev \
        gcompat \
        nodejs npm && \
    apk add --no-cache xz-libs && \
    npm install -g yarn && \
    bundle install -j4 && \
    apk del build-dependencies

RUN bundle config set --global force_ruby_platform true


# ホストのファイル一式をコンテナにコピーする
COPY . ./

# 開発用サーバーの実行
CMD ["rails", "server", "-b", "0.0.0.0"]