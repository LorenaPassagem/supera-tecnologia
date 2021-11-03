import db from './api/products.json'
import AddProduct from './components/AddProduct';
import { WrapCard, WrapGame, CardImg, GameTitle} from './components/CardGame';
import LogoStone from './components/LogoStone';
import ProductPrice from './components/ProductPrice';


function App() {
  return (
  <>  
    <LogoStone/>
    
        {db.map((a) =>
        <WrapGame>
                <WrapCard>
                  <CardImg src={require(`./assets/${a.image}`).default}></CardImg>
                  <GameTitle>{a.name}</GameTitle> 
                  <ProductPrice>{a.price} </ProductPrice>
                  <AddProduct> Add no carrinho</AddProduct>  
                </WrapCard>    
        </WrapGame> )}
  </> 
  )
}

export default App;
