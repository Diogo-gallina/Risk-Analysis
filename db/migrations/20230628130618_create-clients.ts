import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('clients', (table) =>{
        table.uuid('id').primary()
        table.text('cnpj').notNullable()
        table.text('criminal_antecedent').notNullable()
        table.decimal('debt_level').notNullable()
        table.text('late_payment_history').notNullable()
        table.decimal('serasa_score').notNullable()
        table.decimal('time_of_existence').notNullable()
        table.decimal('annual_revenue').notNullable()
        table.text('financial_result').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('clients');
}

