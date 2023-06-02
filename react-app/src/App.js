import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className=" p-3 bg-slate-900 text-stone-100 text-center">
      <header>
        <img align="center" src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <h5 className="capitalize font-serif italic">
          How to Add your contribution:
        </h5>
        <br />
        <p className="uppercase font-extrabold italic">
          You will find the Repo{" "}
          <a
            className="text-sm text-amber-700 underline"
            href="https://github.com/Pritam2958/react-app"
          >
            here
          </a>
        </p>
        <h6 className="bg-gradient-to-tl from-teal-900 to-slate-600 capitalize italic p-5">
          Your contribution is a necessity!
        </h6><br/>
        <p className="prose prose-h3:font-sans italic text-sm text-center text-slate-900 bg-gradient-to-br from-yellow-400 to-red-700">
          <h3 className="text-gray-700 font-black">What is ReactJS ??</h3>
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]<br />
          React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9]<br />
          Project status can be tracked via the core team discussion forum.[37] However, major changes to React go through the Future of React repository issues and pull requests.[38][39] This enables the React community to provide feedback on new potential features, experimental APIs and JavaScript syntax improvements.<br />
          React was created by Jordan Walke, a software engineer at Meta, who released an early prototype of React called "FaxJS".[40][41] He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.[citation needed] It was open-sourced at JSConf US in May 2013.[41]<br />
          React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.<br />
          On September 26, 2017, React 16.0 was released to the public.[46]<br />
          On August 10, 2020, the React team announced the first release candidate for React v17.0, notable as the first major release without major changes to the React developer-facing API.[47]<br />
          On March 29, 2022, React 18 was released which introduced a new concurrent renderer, automatic batching and support for server side rendering with Suspense.[48]<br />
        </p>
        <i className="font-extralight">Source: <a href="https://wikipedia.org/" className="underline font-black">Wikipedia</a></i>
      </header>
    </div>
  );
}

export default App;
