import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    clients: {
      id: string;
      company_name: string;
      business_email: string;
      cnpj: string;
      criminal_antecedent: string;
      debt_level: number;
      late_payment_history: string;
      serasa_score: number;
      time_of_existence: number;
      annual_expense: number;
      annual_recipe: number;
      financial_result: string;
      rank: string;
      status: string;
    };
  }
}
