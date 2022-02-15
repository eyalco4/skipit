import Head from 'next/head'

const PageWrapper = ({ children }) => {
  return (
    <>
      {/*language=SCSS*/}
      <style jsx>{`
        .container {
          text-align: center;
          font-family: Helvetica, Arial;
        }

        .main {
          margin: 100px 0;
          width: 100%;
        }

        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 10%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          border-top: 1px solid #eaeaea;
          letter-spacing: 2px;
        }

        .footer img {
          width: 28px;
        }


      `}</style>
      <div className="container">
        <Head>
          <title>SkipIT</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className="main">

          {children}
        </main>
        <footer className="footer">
          Powered by SkipIT
        </footer>
      </div>
    </>
  )
}


export default PageWrapper;