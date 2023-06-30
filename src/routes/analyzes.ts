import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { FinancialResultValidate } from "../utils/FinancialResultValidate";
import { SerasaScoreValidate } from "../utils/SerasaScoreValidate";
import { DebtLevelValidate } from "../utils/DebtLevelValidate";
import { TimeOfExistenceValidate } from "../utils/TimeOfExistenceValidate";
import { CriminalModelValidate } from "../utils/CriminalModelValidate";
import { LatePaymentHistoryValidate } from "../utils/LatePaymentHistoryValidate";
import { FinalScore } from "../utils/FinalScore";
import { FinalRank } from "../utils/FinalRank";
import { SetStatus } from "../utils/SetStatus";

export async function analyzesRoutes(app: FastifyInstance){

    app.get('/', async() => {
        const analyzes = await knex('clients').select()

        return { analyzes }
    })

    app.get('/:id', async(request) => {
        const getCliensParamsSchema = z.object({
            id: z.string().uuid(),
        });

        const { id } = getCliensParamsSchema.parse(request.params);

        const analizes = await knex('clients')
            .where('id', id)
            .first()
        
        return { analizes }
    })

    // app.get("status", async(request) => {
    //     const getCliensParamsSchema = z.object({
    //       status: z.enum(['APPROVED', 'DISAPPROVED']),
    //     });

    //     const { status } = getCliensParamsSchema.parse(request.params);

    //     const analyzes = await knex('clients').where('status', status)

    //     return { analyzes }
    // })

    // app.get('/:rank', async(request) => {
    //     const getCliensParamsSchema = z.object({
    //         rank: z.string()
    //     });

    //     const { rank } = getCliensParamsSchema.parse(request.params);

    //     const analizes = await knex('clients')
    //         .where('rank', rank)
            
        
    //     return { analizes }
    // })

    app.post('/', async (request, reply) => {
        const createClientAnalyze = z.object({
            company_name: z.string(),
            business_email: z.string(),
            cnpj: z.string(),
            criminal_antecedent: z.enum(['yes', 'no']),
            debt_level: z.number(),
            late_payment_history: z.enum(['yes', 'no']),
            serasa_score: z.number(),
            time_of_existence: z.number(),
            annual_expense: z.number(),
            annual_recipe: z.number(),
            financial_result: z.enum(['profit', 'prejudice']).default('prejudice'),
            rank: z.enum(['S', 'A', 'B', 'C', 'D']).default("D"),
            status: z.enum(['APPROVED', 'DISAPPROVED']).default('DISAPPROVED'),
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

        
        
        const scoreCriminalModel = CriminalModelValidate
            .criminalModelValidaTe(criminal_antecedent);

        const scoreLatePayment = LatePaymentHistoryValidate
            .latePaymentHistoryValidate(late_payment_history);

        const scoreTimeExistence = TimeOfExistenceValidate
            .calculateDateOfExistence(time_of_existence);

        const scoreDebtLevel = DebtLevelValidate
            .scoreDebtLevelCalculate(debt_level, annual_recipe);         

        const serasaScore = SerasaScoreValidate
            .calculateSerasaScore(serasa_score);

        const financialResult = FinancialResultValidate
            .calculateFinancialResult(annual_recipe, annual_expense);

        const scoreFinacial = FinancialResultValidate
            .totalScoreFinancialCalculate(financialResult);

        const ScorePoints = [
          scoreCriminalModel,
          scoreLatePayment,
          scoreTimeExistence,
          scoreDebtLevel,
          serasaScore,
          scoreFinacial,
        ];

      
        const finalScore = FinalScore.calculateTotalScore(ScorePoints);

        const setRank = FinalRank.selectingRankByScore(finalScore);
        
        const setStatus = SetStatus.setStatusByScore(finalScore);
        
      
        await knex('clients').insert({
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


    app.delete('/:id', async(request, reply) => {
        const getCliensParamsSchema = z.object({
            id: z.string().uuid(),
        });

        const { id } = getCliensParamsSchema.parse(request.params);

        const analizes = await knex('clients')
            .where('id', id)
            .delete()
        
        return reply.status(201).send();
    })

}