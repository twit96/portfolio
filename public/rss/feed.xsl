<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html 
      xmlns="http://www.w3.org/1999/xhtml" 
      lang="en"
    >
      <head>
        <title><xsl:value-of select="/rss/channel/title"/>'s Web Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="icon" href="/img/favicon.png"/>
        <link rel="stylesheet" href="/rss/feed.css" type="text/css" />
        <!-- Custom Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <!-- nunito -->
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&amp;display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet';"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&amp;display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
        <!-- pacifico -->
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Pacifico&amp;display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet';"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&amp;display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
      </head>
      <body>


        <header>
          <div class="wrapper">
          
            <nav>
              <p class="card" style="background:var(--brand);">
                <strong>This is a web feed,</strong> also known as an RSS feed. <strong>Subscribe</strong> by copying the URL from the address bar into your newsreader.
              </p>
              <p class="card">
                Visit
                <a
                  href="https://aboutfeeds.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >About Feeds</a>
                to get started with newsreaders and subscribing. It's free.
              </p>
            </nav>

          </div>
        </header>


        <div class="wrapper" style="padding-top:0;">
          <svg
            aria-hidden="true"
            fill="none"
            height="8"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              height="8"
              id="sine_line_pattern"
              patternUnits="userSpaceOnUse"
              width="32"
            >
              <g>
                <path
                  d="M0 0.5C8 0.5 8 7.5 16 7.5C24 7.5 24 0.5 32 0.5"
                  stroke="var(--surface1)"
                  stroke-linecap="square"
                ></path>
              </g>
            </pattern>
            <rect
              fill="url(#sine_line_pattern)"
              height="100%"
              width="100%"
            ></rect>
          </svg>
        </div>
        

        <main>

          <section>
            <div class="content-section wrapper">
              <h1>
                <svg
                  class="rss-icon"
                  height="0.85em"
                  viewBox="0 0 448 512"
                  width="0.85em"
                  xmlns="http://www.w3.org/2000/svg" 
                >
                  <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                </svg>
                Web Feed Preview
              </h1>
              <div
                class="card content-section"
                style="background: var(--surface0);"
              >
                <h2><xsl:value-of select="/rss/channel/title"/></h2>
                <p><xsl:value-of select="/rss/channel/description"/></p>
                <a style="width:fit-content;">
                  <xsl:attribute name="href">
                    <xsl:value-of select="/rss/channel/link"/>
                  </xsl:attribute>
                  Visit Website &#x2192;
                </a>
              </div>
            </div>
          </section>

          <section>

            <div class="wrapper">
              <h2>Latest Posts</h2>
            </div>

            <div
              class="card content-section wrapper"
              style="--_content-gap:0.5em; background:var(--surface0);"
            >
              <xsl:for-each select="/rss/channel/item[5 &gt;= position()]">
                <article
                  class="card"
                  style="background:var(--surface3);"
                >
                  <h3>
                    <a>
                      <xsl:attribute name="href">
                        <xsl:value-of select="link"/>
                      </xsl:attribute>
                      <xsl:value-of select="title"/>
                    </a>
                  </h3>
                  <em>
                    Published: <xsl:value-of select="pubDate" />
                  </em>
                </article>
              </xsl:for-each>
            </div>

            <div class="content-section wrapper">
              <a class="btn" href="/">
                Return to Homepage
              </a>
            </div>
            
          </section>

        </main>
        
        
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
