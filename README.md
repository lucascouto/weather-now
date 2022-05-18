# WeatherNow

Essa aplicação mostra em tempo real dados de clima de três cidades diferentes: Nuuk, GL; Urubici, BR; Nairobi, KE. A cada 10 minutos é feita uma nova requisição para que os dados possam ser atualizados. O sistema de coloração das temperaturas seguem o seguinte padrão:

- temperaturas menores ou iguais a 5 são mostradas em azul;
- temperaturas maiores que 5 e menores ou iguais a 25 são mostradas em laranja;
- temperaturas maiores que 25 são mostradas em vermelho.

Para mostrar os dados, a aplicação consome a API de https://openweathermap.org/api.

## Como rodar a aplicação
A aplicação encontra-se no ar no seguinte endereço: https://lucas-weather.netlify.app/. Aproveite o link para testar em um celular! Caso se deseja rodar a aplicação na máquina local, os seguintes passos devem ser seguindos:

- clone o projeto: `$ git clone git@github.com:lucascouto/weather-now.git`
- mude para a pasta do projeto: `$ cd weather-now`
- instale todas as dependências: `$ npm i`
- rode o projeto localmente: `$ ng serve`


## Usabilidade

A princípio, é mostrado apenas as temperaturas das cidades, porém ao clicar em cada card, é possível ver mais informações sobre o clima: umidade e pressão.

### Desktop

https://user-images.githubusercontent.com/3027605/168926997-bce9df9c-d783-479c-86e0-3787253259f9.mp4

### Mobile

https://user-images.githubusercontent.com/3027605/168928556-41815dbd-99e9-4ba8-a7b4-54b3fde91c2f.mp4

#### Mensagem de erro

Sempre que por algum motivo haja algum erro na requisição, é mostrado a seguinte mensagem de erro:

![2022-05-17_22-54](https://user-images.githubusercontent.com/3027605/168941134-9f9e3e9d-af4a-422d-89bd-2ad4c04302d4.png)

Clicando no botão "Try Again", é feito uma nova tentativa de requisição à API.


