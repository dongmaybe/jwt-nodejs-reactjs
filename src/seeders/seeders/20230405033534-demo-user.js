'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      await queryInterface.bulkInsert('user', [
       { username: 'John Doe',
        password: 'false',
        email:'dong'
      },
        { username: 'John Doe',
        password: 'false',
        email:'dong'
      },
        { username: 'John Doe',
        password: 'false',
        email:'dong'}
      ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
