FROM ruby:2.6-alpine

LABEL maintainer="https://github.com/kaizendorks"

WORKDIR /src
RUN gem install bundler

COPY Gemfile Gemfile.lock ./

RUN apk --update add --virtual build_deps \
      build-base \
    && bundle install \
    && apk del build_deps

CMD bundle exec jekyll serve --watch --force_polling -H 0.0.0.0 -P 4000
