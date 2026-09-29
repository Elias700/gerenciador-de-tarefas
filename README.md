# Meu Plantão

> Sistema para gestão de escalas, controle de horas e acompanhamento financeiro de plantões para profissionais de saúde.

---

## Sobre o Projeto

Profissionais da saúde (médicos, enfermeiros, técnicos, entre outros) frequentemente enfrentam desafios para gerenciar múltiplos vínculos trabalhistas, escalas variáveis e relatórios financeiros. É comum perder o controle de quantas horas foram trabalhadas, quantos plantões foram realizados e quais valores ainda estão pendentes de recebimento.

O **Meu Plantão** foi desenvolvido para solucionar essa dor. Trata-se de uma plataforma centralizada que permite registrar, visualizar e gerenciar todo o histórico de trabalho com clareza, facilitando o planejamento financeiro e a organização da rotina.

---

## Funcionalidades

- [x] **Visão Geral Dinâmica:** Painel com métricas de horas acumuladas, total a receber e recebidos.
- [x] **Próximos Plantões:** Acompanhamento das escalas futuras organizadas por data e local.
- [x] **Histórico de Plantões:** Registro completo e consulta de escalas passadas.
- [x] **Controle Financeiro:** Resumo claro do faturamento esperado versus faturamento realizado.
- [x] **Cadastro de Escalas:** Interface simples para inclusão de novos plantões com valor, carga horária e instituição.

---

## Tech Stack

### **Frontend**
| Tecnologia | Função |
| :--- | :--- |
| **Angular 21** | Framework Web Principal |
| **Angular Material** | Biblioteca de Componentes UI |
| **Tailwind CSS** | Framework de Estilização |
| **TypeScript** | Linguagem Principal |

### **Backend & Banco de Dados** *(Em Planejamento)*
| Tecnologia | Função |
| :--- | :--- |
| **Java** | API REST / Regras de Negócio |
| *A definir* | Persistência de Dados (SGBD) |

---

## Como Executar o Projeto Localmente

### **Pré-requisitos**
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS)
- [Angular CLI](https://angular.dev/tools/cli)

### **Passo a Passo**

```bash
# 1. Clonar o repositório
git clone https://github.com/Elias700/meu-plantao.git

# 2. Acessar o diretório do projeto
cd meu-plantao

# 3. Instalar as dependências
npm install

# 4. Executar a aplicação
ng serve
