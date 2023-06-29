# Risk-Analysis
⚠️software designed to simulate risk analysis based on customer data, defining whether or not a customer is eligible for advances on receivables.

### Requisitos Funcionais

- [ ] Um cliente deve poder enviar seus dados para serem analisados

- [ ] O administrador deve poder ver todas os requisitos dos clientes já com o resultado do seu nivel de confiabilidade

- [ ] O administrador pode ver os dados de um cliente específico

### Regras de Negócio

#### Pontuação para definir rank:
- Se o cliente tiver algum histórico criminal, ele deve ser Reprovado, caso não tenha ele não recebe nada de pontuação
- se o nível de endividamento do cliente 
- o lucro deve ser definido pela receita anual - despesa anual


[ ] Modelo criminal - 0 || REPROVADO;

[ ] Nível de endividamento (>10%FA = REPROVA| 9%FA-6% - ruim = 5 | 5%-1% - bom = 15 | 0% muito bom = 20)  - 20

[ ] Histórico de inadimplência - 0  || REPROVADO

[x] Score do serasa (<300 = REPROVA| 301-500 - ruim = 5 | 501-700 -  bom = 15 | >700-1000 - muito bom = 25) - 25

[ ] Tempo de existência (<2 ruim = 3| 3-5 - medio = 5 | 6-9 - bom = 10 | >10 muito bom = 15) - 15

[ ] Faturamento anual (<300mil - micro = REPROVADO | >301mil - 4.8m - pequena = 10 | >4.8m - <12m - média = 20 | >12m grande Porte= 25) - 25

[x] Resultado financeiro (lucro = 15 ou prejuízo = 0) - 15

