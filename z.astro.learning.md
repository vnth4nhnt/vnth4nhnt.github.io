# ASTRO

## basic

+ /src/pages/index.astro - home page

+ 2 section: front matter (meta data, variable) + content (html, astro component, jsx syntax)
+ /public/favicon/* --> site level: http://localhost:4321/favicon/favicon-dark-32.png
## layouts

+ cung cấp reusable UI structure, nhận vào các props

    ```jsx
    /*
        /layouts/TestLayout.astro
    */
    ---
    interface Props {
        title: string,
        message: string,
    } 

    const {title, message} = Astro.props as Props;
    ---

    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
            <h1>{message}</h1>
        </body>
    </html>
    ```

+ component imports trong pages
    ```jsx
    /*
        /pages/test.astro
    */
    ---
    import TestLayout from "../layouts/TestLayout.astro";
    ---

    <TestLayout title="hello" message="world"></TestLayout>
    ```

## css & styling

## astro components

+ /src/components: Footer.astro, Navbar.astro, ...
## routing basics

## markdown layouts