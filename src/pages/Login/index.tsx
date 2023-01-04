import React, { useEffect } from "react";
import { Paragrafo, Title } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from 'react-redux'
import { clicaBotaoRequest, clicaBotaoFailure, clicaBotaoSuccess } from "../../store/modules/example/actions";

export default function Login() {
  //Dispara quantas ações que eu quiser que ele dispare e depois trato os dados no Store
  const dispatch = useDispatch();

  //Função chamada ao clicar no botão enviar. Ela vai prevenir que a pagina seja recarregada (default prevent) e depois usa o dispatch para disparar uma ação
  function handleClick(e: any){
    e.preventDefault();
    //A função clicaBotão vem do arquivo actions.tsx
    dispatch(clicaBotaoRequest())
  }

  return (
    <Container>
      <Title>
        Login
        <small>Opa</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quos.</Paragrafo>
      <button type="button" onClick={handleClick}>Enviar</button>
    </Container>
  )
}
