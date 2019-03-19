# Kaizend Dorks public site

This repo contains our public site https://kaizendorks.github.io hosted on [GitHub pages](https://help.github.com/en#github-pages-basics).

Any changes committed to master are automatically picked up by GitHub and deployed.

## Local setup (Docker)

1. Build image: `docker-compose build`
1. Run app: `docker-compose up`
1. By default exposes app on `http://localhost:4000`
1. Clean up: `docker-compose down`

## Local setup (Native)

From the steps at: https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll

1. Install ruby 2.1.0 or higher
1. Install bundler gem `gem install bundler`
1. Clone this repo
1. Install all the dependencies in the Gemfile `bundle install`
1. Preview locally with `bundle exec jekyll serve`, by default it opens on http://localhost:4000
