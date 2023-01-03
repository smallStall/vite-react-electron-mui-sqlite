const crypto = require('crypto');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del();
  await knex('projects').insert([...Array(9)].map((_, i) => makeProject(i)));
};

const makeProject = index => {
  return {
    id: crypto.randomUUID(),
    project_name: 'プロジェクト'.repeat(index + 1),
    project_objective: 'もくてき'.repeat(index + 1),
    background: 'はいけい'.repeat(index + 1),
  };
};
