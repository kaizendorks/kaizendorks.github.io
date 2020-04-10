# Kaizen Dorks website

Welcome to the source code of the Kaizen Dorks website!

The latest version of the site is available at https://kaizendorks.github.io/.

## Stack
This website was:

- Built using [vuepress](https://vuepress.vuejs.org/) and the [vuepress-theme-blog](https://vuepress-theme-blog.ulivz.com/).
- Scaffolded using [create-vuepress](https://github.com/vuepressjs/create-vuepress) as per official [vuepress-theme-blog guidance](https://vuepress-theme-blog.ulivz.com/#quick-start).
- Published to GitHub pages as per official [vuepress guidance](https://vuepress.vuejs.org/guide/deploy.html#github-pages).

## Development

You can get the site running locally with a few steps:

1. Clone this repo
    ```bash
    git clone git@github.com:kaizendorks/kaizendorks.github.io.git
    ```
1. cd into the folder where it was cloned
    ```bash
    cd kaizendorks.github.io
    ```
1. Install the dependencies
    ```bash
    npm i
    ```
1. Run the local development server
    ```bash
    npm run dev
    ```

Then head to http://localhost:8080 in your browser.
> If the port was in use, a different one will be used. Pay attention to the output of the command.

## Deployment

The site is deployed to GitHub pages as per official [vuepress guidance](https://vuepress.vuejs.org/guide/deploy.html#github-pages).

In order to deploy:
1. Configure GitHub pages for your repo as per the [vuepress guidance](https://vuepress.vuejs.org/guide/deploy.html#github-pages).
1. Generate the production files with
    ```bash
    npm rub build
    ```
1. Commit the files
    ```bash
    git add .
    git commit -m "publishing latest changes"
    ```
1. Push the changes to the remote
    ```bash
    git push
    ```

