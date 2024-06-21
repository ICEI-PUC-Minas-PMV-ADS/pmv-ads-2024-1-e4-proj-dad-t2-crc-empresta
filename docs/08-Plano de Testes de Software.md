# Plano de Testes de Software

# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Para a realização dos Testes de Software, adotaremos os seguintes requisitos:
 * Site publicado na Internet;
 * Navegador da Internet - Chrome, Firefox ou Edge;
 * Conectividade de Internet para acesso às plataformas.

Os Casos de Testes serão realizados utilizando dados Válidos e Inválidos, conforme descritos a seguir:

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-01 - Aplicação distribuída |RF-01 – A aplicação deve ser distribuída, permitindo o acesso em vários computadores conectados à rede.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|A aplicação deve ser distribuída, permitindo o acesso em vários computadores conectados à rede.|<ol><li>Acessar a aplicação de pelo menos 2 dispositivos diferentes</li><li>Fazer o login</li><li>Executar o empréstimo e devulução </li><li>Consultar o histórico de empréstimos e devoluções.</li></ol> | A aplicação deve funcionar perfeitamente em dispositivos diferentes.

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-01 - RF-01 | A aplicação deve ser distribuída, permitindo o acesso em vários computadores conectados à rede. | | |
| | | 

# 

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-02 - Cadastre-se |RF-02 – A aplicação deve permitir emrpéstimos de equipamentos de informática.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Validar a função de empréstimo e devolução de equipamentos.|<ol><li>Acessar a aplicação</li><li>Emprestar algum equipamento de informática</li><li>Verificar se o empréstimo foi efetuado</li></ol> | A aplicação deve efetuar o empréstimo e devolução de equipamentos.|

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-02 - RF-02 | Validar a função de empréstimo e devolução de equipamentos. | |  |
| | 
 

 # 
 
| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-03 - Fazer Login |RF-03 – A aplicação deve permitir ao usuário se cadastrar e realizar o login.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|A aplicação deve ser acessada apenas com administrador.|<ol><li>Acessar o navegador</li><li>Informar o endereço do site (crcempresta.vercel.app)</li><li>Preencher os campos obrigatórios `e-mail` e `senha` com os dados após já ter se cadastrado.</li><li>Clicar no botão `Entrar`</li></ol> | A aplicação deve direcionar o usuário para a página inicial. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-03 - RF-03 | A aplicação deve ser acessada apenas com administrador | | |
| |  

# 
 
| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-04 - Validação de usuario para empréstimo de equipamento |RF-04 – O empréstimo deve ser validado com a identidade acadêmica do aluno ou professor.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o sistema valida o empréstimo com a identidade acadêmica do aluno ou professor.|<ol><li>Acessar o navegador</li><li>Informar o endereço do site (crcempresta.vercel.app)</li><li> acessar a aplicação </li><li>Efetuar um empréstimo. </li><li>Verificar se o sistema solicita usuário de aluno e/ou professor.</li></ol> | A aplicação deve solicitar a identificação de aluno ou professor para efetuar o empréstimo. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-04 - RF-04 | O empréstimo deve ser validado com a identidade acadêmica do aluno ou professor. | | |
| |  

# 

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-05 - Validação de usuario para Devolução de equipamento |RF-05 – A devolução deve ser validada com a identificação do acadêmico do aluno ou professor.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o usuário cadastrado consegue redefinir sua senha esquecida.|<ol><li>Acessar o navegador</li><li>Informar o endereço do site (crcempresta.vercel.app)</li><li> acessar a aplicação </li><li>Efetuar uma devolução de equipamento. </li><li>Verificar se o sistema solicita usuário de aluno e/ou professor.</li></ol> | A aplicação deve solicitar a identificação de aluno ou professor para efetuar a devuloção. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-05 - RF-05 | A devolução deve ser validada com a identidade acadêmica do aluno ou professor. |    |    |
| Registro da tela: |

# 

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-06 - Cadastro de novos itens |RF-06 – A aplicação deve permitir o cadastro de novos itens.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se a aplicação impede a recuperação de senha com um e-mail inválido |<ol><li>Acessar o navegador</li><li>Informar o endereço do site (http://crcempresta.vercel.app)</li><li>acessar a tela de admin</li><li>ir na aba de itens</li><li>Tentar criar um item</li></ol>| A aplicação deve permitir a criação de novos itens. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-06 - RF-06 | Verificar se a aplicação permite criar novos itens. |    |    |
| Registro da tela: |

# 

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-07 - Edição de itens |RF-07 – 	A aplicação deve permitir a edição de itens|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o filtro por Eixo está fazendo a busca correta de Perguntas por Eixo. |<ol><li>Acessar o navegador</li><li>Informar o endereço do site (http://crcempresta.vercel.app)</li><li>acessar a tela de admin</li><li>ir na aba de itens</li><li>Tentar editar um item</li></ol> | A aplicação deve permitir a edição itens. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-07 - RF-07 | Verificar se a aplicação permite editar itens. |    |    |
| Registro da tela: |

# 

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-08 - Exclusão de itens |RF-08 – A aplicação deve permitir a exclusão de itens.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o filtro por Microfundamento está fazendo a busca correta de Perguntas por este Microfundamento. |<ol><li>Acessar o navegador</li><li>Informar o endereço do site (http://crcempresta.vercel.app)</li><li>acessar a tela de admin</li><li>ir na aba de itens</li><li>Tentar excluir um item</li></ol> | A aplicação deve permitir a exclusão itens. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-08 - RF-08 | Verificar se a aplicação permite excluir itens. |    |    |
| Registro da tela: |

# 

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-09 - Mostrar codigo do usuário tomador |RF-09 – A aplicação deve apresentar qual o código do usuário tomador.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o codigo do usuário tomado é apresentado no histórico. |<ol><li>Acessar o navegador</li><li>Informar o endereço do site (http://crcempresta.vercel.app)</li><li>Acessar o histórico de empréstimos e devoluções</li></ol> | A aplicação deve apresentar qual o código do usuário tomador. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-09 - RF-09 | Verificar se a aplicação mostra qual o codigo de pessoa do usuário tomador do empréstimo. |    |    |
| Registro da tela: |

# 

| **Caso de teste** | **Requisitos Associados**|
|--|--|
|CT-10 - A aplicação deve apresentar em qual local foi colocado o equipamento.|

|Objetivo do teste| Passos | Critérios de êxito|
|-|-|-|
|Verificar se o local que onde equipamento alocado é apresentado no histórico. |<ol><li>Acessar o navegador</li><li>Informar o endereço do site (http://crcempresta.vercel.app)</li><li>Acessar o histórico de empréstimos e devoluções</li></ol> | Aplicação deve apresentar em qual local foi colocado o equipamento. |

Registro:
| **ID** | **Descrição do teste** | **Descrição do resultado** | **Gravidade** |
|:---: |:---: |:---: |:---: |
| CT-10 - RF-10 | Verificar se a aplicação mostra em qual local foi colocado o equipamento.|    |    |
| Registro da tela: |

# 

