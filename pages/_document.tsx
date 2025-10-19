import { ColorModeScript } from "@chakra-ui/react";
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "//hm.baidu.com/hm.js?922e7991abd659d219be3e5932ec15c9";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
                })();
              `,
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
