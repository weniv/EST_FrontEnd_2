import { LanguageProvider } from "./Context/LanguageProvider";
import Content from "./Components/Content";
import LangSelector from "./Components/LangSelector";


function App() {
  return (
    <LanguageProvider>
      <LangSelector />
      <Content />
    </LanguageProvider>
  );
}
export default App;
