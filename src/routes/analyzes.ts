import { FastifyInstance } from "fastify";
import { z } from "zod";
import { randomUUID } from "node:crypto";

import { knex } from "../database";
import { FinancialResultValidate } from "../utils/FinancialResultValidate";
import { SerasaScoreValidate } from "../utils/SerasaScoreValidate";
import { DebtLevelValidate } from "../utils/DebtLevelValidate";
import { TimeOfExistenceValidate } from "../utils/TimeOfExistenceValidate";
import { CriminalModelValidate } from "../utils/CriminalModelValidate";
import { LatePaymentHistoryValidate } from "../utils/LatePaymentHistoryValidate";
import { FinalScore } from "../utils/FinalScore";
import { FinalRank } from "../utils/FinalRank";
import { SetStatus } from "../utils/SetStatus";
import { AnnualRecipeValidate } from "../utils/AnnualRecipeValidate";

export async function analyzesRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const analyzes = await knex("clients").select();

    return { analyzes };
  });

  app.get("/:id", async (request) => {
    const getCliensParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getCliensParamsSchema.parse(request.params);

    const analizes = await knex("clients").where("id", id).first();

    return { analizes };
  });

  app.post("/", async (request, reply) => {
    const createClientAnalyze = z.object({
      company_name: z.string(),
      business_email: z.string().email(),
      cnpj: z.string(),
      criminal_antecedent: z.enum(["yes", "no"]),
      debt_level: z.number().nonnegative(),
      late_payment_history: z.enum(["yes", "no"]),
      serasa_score: z.number().nonnegative(),
      time_of_existence: z.number().nonnegative(),
      annual_expense: z.number(),
      annual_recipe: z.number(),
      financial_result: z.enum(["PROFIT", "PREJUDICE"]).default("PREJUDICE"),
      rank: z.enum(["S", "A", "B", "C", "D"]).default("D"),
      status: z.enum(["APPROVED", "DISAPPROVED"]).default("DISAPPROVED"),
    });

    const {
      company_name,
      business_email,
      cnpj,
      criminal_antecedent,
      debt_level,
      late_payment_history,
      serasa_score,
      time_of_existence,
      annual_expense,
      annual_recipe,
    } = createClientAnalyze.parse(request.body);

    const scoreAnnualRecipe =
      AnnualRecipeValidate.calculateAnnualRecipeScore(annual_recipe);
    const scoreCriminalModel =
      CriminalModelValidate.criminalModelValidaTe(criminal_antecedent);
    const scoreLatePayment =
      LatePaymentHistoryValidate.latePaymentHistoryValidate(
        late_payment_history,
      );
    const scoreTimeExistence =
      TimeOfExistenceValidate.calculateDateOfExistence(time_of_existence);
    const scoreDebtLevel = DebtLevelValidate.scoreDebtLevelCalculate(
      debt_level,
      annual_recipe,
    );
    const serasaScore = SerasaScoreValidate.calculateSerasaScore(serasa_score);
    const financialResult = FinancialResultValidate.calculateFinancialResult(
      annual_recipe,
      annual_expense,
    );
    const scoreFinacial =
      FinancialResultValidate.totalScoreFinancialCalculate(financialResult);

    const ScorePoints = [
      scoreCriminalModel,
      scoreLatePayment,
      scoreTimeExistence,
      scoreDebtLevel,
      scoreFinacial,
      serasaScore,
      scoreAnnualRecipe,
    ];

    const finalScore = FinalScore.calculateTotalScore(ScorePoints);
    const setRank = FinalRank.selectingRankByScore(finalScore);
    const setStatus = SetStatus.setStatusByScore(finalScore);

    await knex("clients").insert({
      id: randomUUID(),
      company_name,
      business_email,
      cnpj,
      criminal_antecedent,
      debt_level,
      late_payment_history,
      serasa_score,
      time_of_existence,
      rank: setRank,
      status: setStatus,
      financial_result: financialResult,
    });

    return reply.status(201).send();
  });

  app.delete("/:id", async (request, reply) => {
    const getCliensParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getCliensParamsSchema.parse(request.params);

    const analizes = await knex("clients").where("id", id).delete();

    return reply.status(201).send();
  });
}
