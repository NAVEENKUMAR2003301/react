
import Header from "./component/Header.jsx"
import Content from "./component/Content.jsx"
import Footer from "./component/Footer.jsx"


function App() {

  let user = "hi"

  return (
    <>
      <main className="app">
        <Header user={user} />
        <Content user="how are you" />
        <Footer user="navi" />
      </main>
    </>
  );
}

export default App
