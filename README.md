# Risk-Analysis

⚠️ Software designed to simulate risk analysis based on customer data, determining whether a customer is eligible for advances on receivables

### Functional Requirements

- A customer should be able to submit their data for analysis.

- The administrator should be able to view all customer requirements along with the result of their reliability level.

- The administrator can view the data of a specific customer.

### Business Rules

- If the customer has any criminal history, they should be Disapproved; otherwise, they receive no scoring.
- Debt level of the customer:
  - If it's greater than 10% of the annual revenue, it's Disapproved.
  - If it's between 9% and 6% of the annual revenue, it's considered Poor (score: 5).
  - If it's between 5% and 1% of the annual revenue, it's considered Good (score: 15).
  - If it's 0% of the annual revenue, it's considered Very Good (score: 20).
- Default history score: 0 || Disapproved.
- Serasa score:
  - If it's less than 300, it's Disapproved.
  - If it's between 301 and 500, it's considered Poor (score: 5).
  - If it's between 501 and 700, it's considered Good (score: 15).
  - If it's between 701 and 1000, it's considered Very Good (score: 25).
- Existence time:
  - If it's less than 2 years, it's considered Poor (score: 3).
  - If it's between 3 and 5 years, it's considered Average (score: 5).
  - If it's between 6 and 9 years, it's considered Good (score: 10).
  - If it's greater than 10 years, it's considered Very Good (score: 15).
- Annual revenue:
  - If it's less than $ 300,000, it's considered Micro (Disapproved).
  - If it's between $ 300,001 and $ 4.8 million, it's considered Small (score: 10).
  - If it's between $ 4.8 million and $12 million, it's considered Medium (score: 20).
  - If it's greater than $ 12 million, it's considered Large (score: 25).
- Financial result:
  - If it's profit, the score is 15.
  - If it's a loss, the score is 0.

## Development

To run the code in development mode, you need to have the following technologies installed:

- Node.js
- TypeScript
- Fastify
- Knex
- Sqlite
- Zod

### Follow these steps:

- Clone the repository.
- Install the dependencies using npm install.
- Run the TypeScript compiler in watch mode using npm run dev.
- And the server will already be running
- Use some tool to make requests and visualize them like postman and insomnia

## 🤝 Contributors

We want to thank the following people who contributed to this project:

Diogo-gallina: https://github.com/Diogo-gallina
