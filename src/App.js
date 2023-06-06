import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="block1">
        <ul className="text2">
          <li className="hello1">TEST INFO</li>
          <li className="hello2">TEST INFO</li> <li className="hello3">TEST INFO</li>{' '}
          <li className="hello4">TEST INFO</li>
        </ul>
      </div>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="привет!" price={500} />
            <PizzaBlock title="праопро!" price={600} />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
