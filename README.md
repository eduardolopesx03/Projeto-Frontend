# Projeto BurguerMania - Aplicação Web de Pedido de Hambúrguer

## Tela Inicial
Abaixo está a imagem da tela inicial da aplicação BurguerMania:

![home](https://github.com/user-attachments/assets/7e3aea98-5033-4b23-a71b-e4a2743a8243)

## Descrição do Projeto
O **BurguerMania** é um projeto desenvolvido com AngularJS, criado para proporcionar uma experiência de pedido de hambúrgueres de forma simples e intuitiva. O projeto foi desenvolvido com base no design fornecido no Figma e visa entregar uma aplicação responsiva e funcional, que permite aos usuários navegar entre as páginas de pedidos e cardápios de forma fácil.

A aplicação inclui componentes reutilizáveis, como cabeçalhos, botões, cards e inputs, todos desenvolvidos para garantir a manutenção da consistência visual e facilitar a reutilização em diferentes telas.

## Funcionalidades
- **Página de Pedido**: A página onde o usuário pode fazer os pedidos. Ao clicar em "Pedido", o usuário é redirecionado para esta tela.
- **Página de Cardápio**: Exibe as categorias de hambúrgueres. Ao clicar em uma categoria, o usuário é redirecionado para uma página que mostra os hambúrgueres disponíveis nessa categoria.
  
## Instruções para Executar a Aplicação
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/eduardolopesx03/Projeto-Frontend
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd Projeto-Frontend-master
   ```

3. **Instale as dependências**: Certifique-se de ter o Node.js e o Angular CLI instalados em seu ambiente. Caso não tenha, instale o Angular CLI com o comando:
   ```bash
   npm install -g @angular/cli
   ```
   Depois, instale as dependências do projeto:
   ```bash
   npm install
   ```

4. **Execute a aplicação**: Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

5. **Acesse a aplicação**: Abra seu navegador e acesse:
   [http://localhost:4200](http://localhost:4200)

## Tecnologias Utilizadas
- **AngularJS**: Framework principal para o desenvolvimento da aplicação.
- **HTML**: Estruturação do conteúdo da aplicação.
- **CSS**: Estilização dos componentes, utilizando variáveis CSS para garantir consistência visual.
- **TypeScript**: Linguagem de programação utilizada no desenvolvimento.
- **Bootstrap**: Framework para estilização responsiva e rápida.
  
## Componentes
Os principais componentes desenvolvidos são:
- **Header**: Cabeçalho reutilizável para navegação entre as páginas.
- **Botão**: Botão reutilizável em diversas partes da aplicação.
- **Card**: Card reutilizável para exibir os itens do cardápio.
- **Input**: Componente de input reutilizável em formulários.

## Roteamento
A navegação entre as páginas foi implementada utilizando o roteamento do Angular. As principais rotas incluem:
- **/pedido**: Página de pedidos.
- **/cardapio**: Página que exibe as categorias de hambúrgueres.
- **/cardapio/:id**: Página que exibe os hambúrgueres de uma categoria específica.

## Possíveis Melhorias Futuras
Embora o projeto tenha sido desenvolvido com o foco em componentização e uma estrutura responsiva, algumas melhorias podem ser feitas no futuro:
- **Aproveitamento completo da componentização**: Durante o desenvolvimento, as telas foram criadas primeiro, e a componentização ocorreu depois. Isso limitou o aproveitamento pleno dos componentes reutilizáveis, já que não foi possível refatorar todo o código para utilizar os componentes de forma mais eficiente.
- **Melhoria na navegação e usabilidade**: Algumas melhorias podem ser feitas para otimizar a navegação entre as páginas, garantindo uma experiência ainda mais fluida e intuitiva para os usuários.
- **Integração com uma API de pedidos**: O projeto atualmente não possui integração com uma API backend. Em futuras versões, planejo integrar uma API para gerenciar pedidos e dados de cardápio.

## Links
- **Projeto Figma**: https://www.figma.com/design/ZVUq3b0IH9fYUHESjmv6NB/BurguerMania?node-id=1-2&node-type=canvas&t=DSXPtFfVyFp09HOe-0
