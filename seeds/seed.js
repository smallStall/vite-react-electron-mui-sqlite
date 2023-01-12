/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('lots').del();
  await knex('projects').del();
  await knex('users').del();
  await knex('projects').insert([...Array(9)].map((_, i) => makeProject(i)));
  await knex('users').insert([...Array(3)].map((_, i) => makeUser(i)));
  await knex('lots').insert([...Array(15)].map((_, i) => makeLot(i)));
};

const makeProject = index => {
  return {
    id: 'a' + index,
    project_name: 'プロジェクト'.repeat(index + 1),
    project_objective: 'もくてき'.repeat(index + 1),
    background: 'はいけい'.repeat(index + 1),
  };
};

const makeUser = index => {
  return {
    id: 'b' + index,
    user_name: 'ユーザー'.repeat(index + 1),
  };
};

const makeLot = index => {
  return {
    id: 'c' + index,
    lot_number: 's-' + index,
    project_id: 'a' + (index % 3),
    standard_lot_number: 's-'.repeat(1 + (index % 3)),
    user_id: 'b' + (index % 3),
    lot_objective: 'もも'.repeat(index + 1),
    details: 'しょし'.repeat(index + 1),
  };
};
