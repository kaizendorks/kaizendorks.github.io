# Kaizen Dorks website

Welcome to the source code of the Kaizen Dorks website!

The latest version of the site is available at https://kaizendorks.github.io/.

## Stack
This website was:

- Built using [vuepress](https://vuepress.vuejs.org/) and the [@vuepress/theme-blog](https://vuepress-theme-blog.ulivz.com/).
- Scaffolded using [create-vuepress](https://github.com/vuepressjs/create-vuepress) as per official [@vuepress/theme-blog guidance](https://vuepress-theme-blog.ulivz.com/#quick-start).
- Published to GitHub pages as per official [vuepress guidance](https://vuepress.vuejs.org/guide/deploy.html#github-pages).

### Changes to default themes
The default `@vuepress/theme-blog` has been modified with the following changes:

- Added the sidebar from [@vuepress/theme-default](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default). See the docs [for usage](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar)
- Overwrote the `GlobalLayout` to display the sidebar when enabled in FrontMatter
- Overwrote the `Header` to display the logo next to the title
- Copied the `vuepress-plugin-container` configuration and styles from the [@vuepress/theme-default](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default). See the docs [for usage](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar)
- Made a mess of the styles! Cleanly merging the styles of both themes is still pending :)

See the official vuepress docs on [theme inheritance](https://vuepress.vuejs.org/theme/inheritance.html).

### Github cards
You will see both GitHub profile and repo cards across the website.
- Profile cards are generated with [https://lab.lepture.com/github-cards/](https://lab.lepture.com/github-cards/)
- Repo cards are generated with [https://gh-card.dev/](https://gh-card.dev/)

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
1. Switch to the **source branch**! This is very important since the master branch contains _the generated site_!
    ```bash
    git checkout source
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
1. Make sure you are in the **source branch**, and not in master
1. Run the deploy script
    ```bash
    ./deploy.sh
    ```

The deploy script essentially:
1. runs the vuepress build command `npm run build`
1. switches over to the folder where the static contents are generated `cd ./wwwroot`
1. overwrites the master branch with the contents of that folder `git push -f`
