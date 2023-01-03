import React from 'react'
import { Container } from '../../styles/GlobalStyles'


//Função para exebir uma mensagem de página não encontrada caso o usuário coloque uma rota que não exista
export default function Page404() {
  return (
    <Container>
      <h1>Essa página não existe</h1>
    </Container>
  )
}
