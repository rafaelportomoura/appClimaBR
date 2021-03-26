# Modelagem e Implementação de Software

Essa aplicação foi desenvolvida pelo professor PAULO AFONSO PARREIRA JUNIOR, na disciplina de Modelagem e Implementação de Software da UFLA.

[Repositório original](https://github.com/gcc132-2020-2/climabr)

# Clima BR

Uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.

# Como usar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

Enjoy!

