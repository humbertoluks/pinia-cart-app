### Explicação das Classes Tailwind usadas:

#### Container Principal (`.app-container` -\> `.container`)

-   `container`: Define uma largura máxima para o elemento e centraliza-o na página.
-   `mx-auto`: `margin-left: auto; margin-right: auto;` para centralizar.
-   `px-4 py-8`: `padding-left`, `padding-right` de 1rem (16px) e `padding-top`, `padding-bottom` de 2rem (32px).
-   `max-w-3xl`: `max-width: 48rem` (768px), similar ao `max-width: 900px` anterior.
-   `bg-white`: `background-color: #fff;`
-   `shadow-lg`: Adiciona uma sombra maior.
-   `rounded-lg`: Adiciona um `border-radius` grande.

#### Títulos (`h1`, `h2`)

-   `text-4xl`, `text-2xl`: Tamanho do texto (`font-size`).
-   `font-bold`: `font-weight: 700;`.
-   `mb-6`, `mb-4`: `margin-bottom` (margem inferior) de 1.5rem (24px) e 1rem (16px), respectivamente.
-   `text-gray-900`, `text-gray-800`: Cores de texto.

#### Resumo do Carrinho (`.cart-summary`)

-   `text-base`: Tamanho do texto padrão.
-   `text-gray-600`: Cor do texto.
-   `ml-2`: `margin-left` de 0.5rem (8px).

#### Divisor (`hr`)

-   `my-6`: `margin-top` e `margin-bottom` de 1.5rem (24px).
-   `border-t`: Adiciona apenas a borda superior.
-   `border-gray-200`: Cor da borda.

#### Layout de Cards (Carrinho)

-   `flex`: `display: flex;` para alinhar os itens em uma linha.
-   `flex-wrap`: Permite que os itens quebrem para a próxima linha se não houver espaço.
-   `gap-4`: Espaço entre os itens flex (1rem / 16px).
-   `w-40`: `width: 10rem` (160px), similar ao `width: 150px` fixo que você tinha.

#### Layout de Cards (Produtos)

-   `grid`: `display: grid;`.
-   `grid-cols-1`: 1 coluna por padrão.
-   `sm:grid-cols-2`: 2 colunas em telas pequenas (`sm`) e maiores.
-   `md:grid-cols-3`: 3 colunas em telas médias (`md`) e maiores.
-   `gap-6`: Espaço entre os itens da grid (1.5rem / 24px).

#### Estilo de Cards (`.cart-item-card`, `.product-card`)

-   `p-4`: `padding` de 1rem (16px) em todas as direções.
-   `border`: `border: 1px solid;`
-   `border-gray-300`: Cor da borda.
-   `rounded-md`: `border-radius` médio.
-   `bg-gray-50`: `background-color` cinza claro.
-   `text-center`: `text-align: center;`.
-   `shadow-sm`: Adiciona uma sombra pequena.

#### Nomes e Preços de Itens/Produtos

-   `block`: `display: block;` para que ocupem toda a largura e quebrem a linha.
-   `font-semibold`: `font-weight: 600;`.
-   `text-lg`, `text-base`: Tamanho do texto.
-   `mb-1`, `mb-3`: `margin-bottom` pequeno e médio.
-   `text-gray-800`, `text-gray-600`: Cores de texto.

#### Botões (`button`)

-   `w-full`: `width: 100%;`.
-   `py-2`: `padding-top` e `padding-bottom` de 0.5rem (8px).
-   `bg-red-600`, `bg-blue-600`: Cores de fundo para os botões.
-   `text-white`: Cor do texto branca.
-   `rounded-md`: `border-radius` médio.
-   `hover:bg-red-700`, `hover:bg-blue-700`: Muda a cor de fundo ao passar o mouse.
-   `transition-colors`: Adiciona uma transição suave nas mudanças de cor.
-   `text-sm`: Tamanho de texto pequeno.
