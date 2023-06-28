import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('clients', (table) =>{
        table.uuid('id').primary()
        table.text('company_name').notNullable()
        table.text('business_email').notNullable()
        table.text('cnpj').notNullable()
        table.text('criminal_antecedent').notNullable()
        table.decimal('debt_level').notNullable()
        table.text('late_payment_history').notNullable()
        table.decimal('serasa_score').notNullable()
        table.decimal('time_of_existence').notNullable()
        table.decimal('annual_expense').notNullable()
        table.decimal('annual_recipe').notNullable()
        table.text('financial_result').notNullable()
        table.text('rank').notNullable()
        table.text('status').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('clients');
}

