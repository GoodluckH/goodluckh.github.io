function App() {
  return (
    <div className="bg-purple-500 pt-[10rem] w-full flex flex-row justify-center h-screen">
      <div className="max-w-4xl bg-black -mr-2 sm:mr-0">
        <div className="border-2 border-black -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3 bg-white">
          <section className="bg-cyan-500 px-5 py-5 border-b-2 border-black">
            <h2 className="text-gray-900 dark:text-white">
              <span className="text-4xl font-black text-black">Xipu Li</span>
            </h2>
            <ul className="text-lg md:text-xl font-semibold">
              <li>
                born in{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Zhumadian"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zhumadian
                </a>
                , a city in Henan, China
              </li>
              {/* <li>
          went to high school in{' '}
          <a
            href="https://www.archbishopryan.com/"
            target="_blank"
            rel="noreferrer"
          >
            Philadelphia
          </a>{' '}
          and{' '}
          <a
            href="https://www.bishopodowd.org/"
            target="_blank"
            rel="noreferrer"
          >
            Oakland
          </a>
        </li> */}
              <li>
                wrote and self-published{" "}
                <a
                  href="https://www.google.com/search?sxsrf=APq-WBty9ezcwY-ZvGwsNUu3FwiIfzqkmw:1644460579880&q=The+Imperium:+Empires+in+a+Fissure+Xipu+Li&stick=H4sIAAAAAAAAAOPgE-LVT9c3NEyJt0yPN62qUIJw0y3KLeJTinK0pLKTrfST8vOz9RNLSzLyi6xA7GKF_LycykWsWiEZqQqeuQWpRZmluVYKrrkFmUWpxQqZeQqJCm6ZxcWlRakKEZkFpQo-mTtYGQGb87a7bAAAAA&sa=X&ved=2ahUKEwiVydeFjfT1AhW4kokEHR4MCMEQmxMoAXoECB4QAw&biw=1299&bih=947&dpr=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  a sci-fi book
                </a>
              </li>
              <li>
                <a
                  href="https://moicandroic.home.blog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  wrote about
                </a>{" "}
                and invested in public equity
              </li>
              <li>
                <a
                  href="https://xipu.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  more writings
                </a>
              </li>
            </ul>
            <p className="py-1 text-slate-900 font-bold text-lg md:text-xl">
              now, I am building a consumer startup in San Francisco, CA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
