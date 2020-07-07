// require mysql
const mysql = require("mysql");
// require inquirer
const inquirer = require("inquirer");
// require express
const express = require("express");

///create seeds for database
//ask user questions via inquirer and then either "POST AN ITEM", "BID ON AN ITEM" or exit

//use conditional statements to determine If their bid is higher, inform the user of their success and replace the previous bid with the new one. If their bid is lower (or equal), inform the user of their failure and boot them back to the selection screen.
const questions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: ["POST", "BID", "EXIT"]},
    {
        type: "input",
        message: "What are you selling",
        name: "item",
        when: (response) => response.action === "POST"
    },
    {
        type: "list",
        message: "What category is your item?",
        name: "category",
        choices: ["Antiques", "Electronics", "Sporting Goods", "Other"],
        when: (response) => response.action === "POST"
    },
    {
        type: "input",
        message: "What is your item's price? (number only)",
        name: "price",
        when: (response) => response.action === "POST"
    },
    {
        type: "list",
        message: "What item would you like to bid on?",
        name: "bidChoice",
        choices: ["from list"],
        when: (response) => response.action === "BID"
    }
    //IF BID IS HIGHER, ACCEPT
    //IF BID LOWER, DENY
];