import Header from './components/header/Header';
import { configLangEn } from './configs/config-lang';

const App = () => {
  return (<div>
    <Header langConfig={configLangEn.header} />
    APP
    </div>);
};

export default App;
