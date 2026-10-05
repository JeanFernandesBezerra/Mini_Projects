
# 🪙 Crypto Exchange CLI Project

Um simulador de exchange de criptomoedas baseado em terminal, desenvolvido em **JavaScript (Node.js)**. O projeto conta com um sistema de autenticação de usuários, validação estrita de segurança para senhas, gerenciamento de carteira (depósitos e saldos) e emissão de ordens de compra e venda para **Bitcoin (BTC)**, **Ethereum (ETH)** e **Solana (SOL)** com ordenação dinâmica de ofertas.

---

## 🛠️ Funcionalidades principais

### 🔐 1. Sistema de Login e Cadastro (`LoginCriptoProject.js`)
* **Autenticação:** Permite o acesso seguro de usuários já cadastrados (padrão: usuário `jean` com a senha `123?`).
* **Validador de Senhas Robusto:** O cadastro de novas contas exige critérios rígidos de segurança:
  * Mínimo de 8 caracteres.
  * Pelo menos uma letra maiúscula.
  * Pelo menos uma letra minúscula.
  * Pelo menos um número.
  * Pelo menos um caractere especial (`!@#$%¨&*()_-+=';:,.></?|*`).
* **Geração de ID:** Criação automática e sequencial de IDs únicos para novos investidores.

### 📈 2. Ambiente de Negociação (`ExchangeCriptoProject.js`)
* **Consulta de Carteira:** Exibição clara dos saldos em tempo real do investidor, tanto em Reais (R$) quanto nas criptomoedas suportadas.
* **Depósito de Capital:** Sistema para simular a entrada de fundos em Reais (R$) com verificação contra valores inválidos ou negativos.
* **Ordens de Compra e Venda:** 
  * Desconto automático do saldo ao enviar ordens.
  * Verificação antifraude e trava de saldo insuficiente (você não pode comprar ou vender o que não tem).
  * Carimbo de data/hora (`HH:MM:SS`) gerado automaticamente para cada ordem.
* **Livro de Ofertas Inteligente (Order Book):**
  * **Ordens de Compra:** Organizadas automaticamente pelo algoritmo (Bubble Sort) priorizando o **maior preço unitário** (quem paga mais compra primeiro).
  * **Ordens de Venda:** Organizadas priorizando o **menor preço unitário** (quem vende mais barato sai na frente).

---

## 🚀 Como Rodar o Projeto do Absoluto Zero

### 📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
1. **Node.js** (Versão LTS recomendada) -> Baixe em [nodejs.org](https://nodejs.org/)
2. **Visual Studio Code** (ou qualquer editor de código de sua preferência)
3. **Code Runner** (para conseguir rodar no terminal do VSCode)

### 🏃‍♂️ Passo a Passo no VS Code

1. **Baixe ou clone os arquivos do projeto** para o seu computador.
2. Abra o **VS Code**.
3. No menu superior, vá em `File (Arquivo)` > `Open Folder (Abrir Pasta)` e selecione a pasta exata onde os arquivos `LoginCriptoProject.js` e `ExchangeCriptoProject.js` estão salvos.
4. Instale a biblioteca necessária para capturar entradas no terminal executando o comando abaixo no seu terminal do VS Code (`Ctrl + Shift + '`):
```bash
   npm init -y
   npm install prompt-sync
