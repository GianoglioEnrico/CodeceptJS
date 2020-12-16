Feature: add user
    As a user
    I want to be able to create other users
    So that different people can have individual data

    Scenario: signup a user
      Given the user has browsed to the homepage
      When the user adds user with name "Hari Bhandari" and username "hari" using the webUI
      Then user with name "Hari Bhandari" and username "hari" should be listed on users table