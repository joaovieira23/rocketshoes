import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-vision-club-fg/83/D12-9994-283/D12-9994-283_zoom2.jpg?ts=1564563467&ims=326x"
        alt="Tênis"/>
        <strong>Tênis incrivel</strong>
        <span>$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-vision-club-fg/83/D12-9994-283/D12-9994-283_zoom2.jpg?ts=1564563467&ims=326x"
        alt="Tênis"/>
        <strong>Tênis incrivel</strong>
        <span>$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-vision-club-fg/83/D12-9994-283/D12-9994-283_zoom2.jpg?ts=1564563467&ims=326x"
        alt="Tênis"/>
        <strong>Tênis incrivel</strong>
        <span>$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-vision-club-fg/83/D12-9994-283/D12-9994-283_zoom2.jpg?ts=1564563467&ims=326x"
        alt="Tênis"/>
        <strong>Tênis incrivel</strong>
        <span>$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-campo-nike-phantom-vision-club-fg/83/D12-9994-283/D12-9994-283_zoom2.jpg?ts=1564563467&ims=326x"
        alt="Tênis"/>
        <strong>Tênis incrivel</strong>
        <span>$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
