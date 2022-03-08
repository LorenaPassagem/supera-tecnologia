import React, { useState } from 'react';
import db from './api/products.json'
import {AddProduct, Qualtidade} from './components/AddProduct';
import { WrapCard, WrapGame, CardImg, GameTitle} from './components/CardGame';
import LogoStone from './components/LogoStone';
import ProductPrice from './components/ProductPrice';


function App() {
 
return (
  <>      
    <LogoStone/>
    <Qualtidade></Qualtidade>
    <WrapCard>
      {db.map((a) =>
        <WrapGame>              
              <CardImg src={require(`./assets/${a.image}`).default}>
              </CardImg>
              <GameTitle>{a.name} </GameTitle>
              <ProductPrice>{a.price} </ProductPrice>
              <AddProduct> </AddProduct>
        </WrapGame>
      )}
      </WrapCard>
         
  </> 
  )
}

export default App;
