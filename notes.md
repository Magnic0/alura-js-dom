# Document Object Model

Esta é uma documentação não oficial, feita por [um estudante](https://github.com/magnic0/) da [Alura](https://alura.com.br/) como forma de anotação para consultas futuras e para quem mais quiser usá-la.

---

## O DOM

O **Document Object Model**, mas comumente conhecido como *DOM*, é uma interface de linguagem neutra cuja função é permitir acesso ao *HTML* através do JavaScript, tornando possível a atualização do mesmo de forma dinâmica. Assim, podemos utilizar do leque imenso de ferramentas do JavaScript a nosso favor para modelar e remodelar uma página em tempo real através da linguagem.

## O objeto *document*

No JavaScript, **document** representa o arquivo HTML no qual o **script** está sendo referenciado. Portanto, existem diversos métodos que podem ser *conjurados* utilizando este objeto.

### Métodos e propriedades do objeto *document*

Além dos métodos, como mencionado acima, existem propriedades criadas para essa manipulação:

1. Métodos para **selecionar** elementos HTML:

- `document.getElementById('id')`: Seleciona um elemento pelo seu ID;
- `document.getElementsByTagName('tag')`: Seleciona elementos pela sua tag;
- `document.getElementsByClassName('class')`: Seleciona elementos pela classe;
- `document.querySelector(element)`: Seleciona qualquer elemento especificado;
- `document.querySelectorAll(element)`: Seleciona todos os elementos com o identificador especificado.

2. Propriedades e métodos para **modificar** elementos HTML:

- `element.innerHTML`: Obtém/altera qualquer elemento no HTML;
- `element.innerText`: Insere textos no HTML;
- `element.attribute`: Altera o valor de um elemento;
- `element.setAttribute(attribute, value)`: Altera o valor de um atributo de um elemento.

3. Métodos para **adicionar e excluir** elementos:

- `document.write(value)`: Imprime o valor especificado no fluxo de saída do HTML;
- `document.appendChild(element)`: Adiciona um elemento no HTML;
- `document.removeChild(element)`: Faz o contrário do método acima;
- `document.replaceChild(element)`: Substitui um elemento HTML;
- `document.createElement(element)` Cria um elemento HTML.

Um método conhecido e comumente usado, é o `element.addEventListener(event, action)`. Este tem uma função simples, porém extremamente útil, já que é capaz de *perceber* um evento acionado pelo usuário HTML e executar um bloco de código especificado para tal. Exemplo:

```
button.addEventListener('click', () => {
  alert('I'm clicked!');
});
```

O bloco acima demonstra a utilização de um *EventListener* para a percepção de um clique no elemento `button`, fazendo com que seja executada uma **arrow function** que dispara um alerta no navegador.
