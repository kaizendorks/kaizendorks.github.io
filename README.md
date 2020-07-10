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
- Repo cards are generated with [https://gh-card.dev/](https://gh-card.dev/). Note the repo should have a description!

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
1. You have a couple options for running the development site (Docker v Native).

### Docker

1. Buld and run the container
    ```bash
    docker-compose up
    ```
1. (Optional) Clean up containers and volumes when you're done
    ```bash
    docker-compose down -v
    ```

### Native

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

Since this is an organization repo, the files for the GitHub pages site need to be located in the master branch of the repo. See [official docs](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites). (You could switch your "main" branch to a different branch, but then GitHub pages also needs the site files to be located there)

Deployment essentially means:
1. run the vuepress build command `npm run build`, which generates the files in `./wwwroot`
1. switch over to the folder where the static contents are generated `cd ./wwwroot`
1. initialize a new git repo
1. force push the contents of the `wwwroot` folder to master

### Automatic deploy via GitHub actions
By commiting code to the `source` branch, you will trigger the configured [GitHub action](https://help.github.com/en/actions) workflow as per the `.github/workflows/deploy.yml` file.

The workflow file essentially codifies the steps outlined above.
- Uses [Node action](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions) to run the `npm` commands that build the vuepress site.
- Users the community provided [github-push action](https://github.com/marketplace/actions/github-push) to force push the resulting files to the master branch.

### Manual deploy

1. Make sure you are in the **source branch**, and not in master
1. Run the deploy script
    ```bash
    ./deploy.sh
    ```
