import Prism from "prismjs"
import React from "react"

export default function ExamplePage(props: any): React.ReactElement {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="canonical"
          href={`https://hen.cat/picknmix/${props.name}`}
        />
        <link
          rel="stylesheet"
          href="style.scss"
        />
      </head>
      <body>

        <article>
          <header>
            <h1>
              {props.example.name}
            </h1>
            <p>
              {props.example.description}
            </p>
          </header>

          <section>
            <iframe src={`/examples/${props.example.name.toLowerCase().replace(/ /g, "-")}/iframe.html`} />
          </section>

          <section>
            <h2>Stylesheet</h2>
            <pre className="language-scss">
              <code dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  props.example.scss,
                  Prism.languages["css"],
                  "css",
                )
              }} />
            </pre>
          </section>

          <section>
            <h2>Markup</h2>
            <pre className="language-scss">
              <code dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  props.example.html,
                  Prism.languages["html"],
                  "html",
                )
              }} />
            </pre>
          </section>

        </article>

      </body>
    </html>
  )
}
