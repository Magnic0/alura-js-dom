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
- `document.getElementsByClassName('class')`: Seleciona elementos pela classe.

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
