<!-- Início do README.md -->

<h1 align=" justify">COLORFUL COMPANIES PI</h1>

<p align="justify"> O objetivo central do presente trabalho foi a viabilização de um aplicativo com  valor agregado que fosse móvel e baseado nas premissas de desenvolvimento  web. Na primeira entrega o desafio foi apresentar uma ideia de produto baseado  numa necessidade real ou refletindo uma proposta de negócio sugerida pelo grupo. A partir dessa ideia foram apresentadas as justificativas para a sua criação, as  dificuldades apresentadas, os benefícios gerados e os diferenciais entre os  possíveis concorrentes.
</p>
<p align="justify"> Baseando-se nos problemas levantados, nas características do público-alvo e  na oportunidade de explorar um nicho de mercado ainda não atendido, optou-se  pelo desenvolvimento de um aplicativo web, chamado Colorful Companies, destinado a avaliar as empresas quanto ao ambiente de trabalho que elas  proporcionam aos profissionais de TIC LGBTQIAP+.
</p>

<h2>Pré-requisitos</h2>

<ul>
  <li>Git</li>
  <li>Node JS 18.16.0 </li>
  <li>PostgreSQL</li>
  <li>HTML/CSS</li>
</ul>

<h2>Instalação</h2>

<p>Para instalar a aplicação, siga os seguintes passos:</p>

<ol>
  <li>Clone dos respositórios:</li>
</ol>

<pre><code>git clone https://github.com/maritrombini/colorful-companies-frontend.git
</code></pre>

<pre><code>git clone https://github.com/maritrombini/colorful-companies-backend.git
</code></pre>

Execute o comando no projeto backend, no terminal na IDE de sua preferência 
<pre><code>npm install</code></pre>
  
<h2>Execução</h2>

<p>Para executar a aplicação, execute o seguinte comando no terminal do projeto backend.</p>
<pre><code>npm run dev </code></pre>
<p>A aplicação backend estará disponível em <a href="http://localhost:3000">http://localhost:3000</a>.</p>
<p>Para abrir o front, basta clicar na página index.html localizada em:</p>
<pre><code>../colorful-companies-frontend/login/index.html </code></pre>


<h2>Login</h2>
  
<p>Para realizar o login você pode usar</p>
<p>EMAIL: teste@teste.com</p>
<p>PASSWORD: 101010</p>

<h2>Tecnologias</h2>

<p>As seguintes tecnologias foram utilizadas no desenvolvimento da API Rest do projeto:</p>

<ul>
  <li>[Node JS 18.16.0](https://nodejs.org/en)</li>
  <li>[CSS](https://www.w3schools.com/css/)</li>
  <li>[PostgreSQL](https://www.postgresql.org/)</li>
  <li>[Postman](https://www.postman.com/)</li>
  <li>[HTML](https://www.w3.org/html/)</li>
</ul>

<h2>Banco de Dados</h2>
  <p>Abaixo segue a relação de dados e os seus tipos:</p>

<table>
  <thead>
    <tr>
      <th>Atributo</th>
      <th>Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>UUID</td>
    </tr>
    <tr>
      <td>CPF</td>
      <td>String</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Text</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>Text</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>Varchar (100)</td>
    </tr>
    <tr>
      <td>AmountOfContributions</td>
      <td>Int (24)</td>
    </tr>
    <tr>
      <td>CreatedAt</td>
      <td>Timestamp Z</td>
    </tr>
    <tr>
      <td>DeletedAt</td>
      <td>Timestamp Z</td>
    </tr>
    <tr>
      <td>City</td>
      <td>Varchar (100)</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Varchar (100)</td>
    </tr>
  </tbody>
</table>

    
<h2>Grupo do projeto</h2>
   <p>Grupo formado por alunos do 4° período do curso de Análise e Desenvolvimento de Sistemas do SENAC</p>
   <li>Elenilson Sobrinho Lobato Junior</li>
   <li>Enzo Enrico Leal Mascia</li>
   <li>Giovanna Alves Marins Augusto</li>
   <li>Jhonnathan Maciel Guedes</li>
   <li>Lúcio Érico Soares Cunha</li>
   <li>Maria Aida Fernandes Vitória</li>
   <li>Mariana Galvão e Sena Trombini</li>
   <li>Natasha de Oliveira Gulyas</li>



<!-- Fim do README.md -->
