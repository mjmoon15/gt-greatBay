// require mysql
const mysql = require("mysql");
// require inquirer
const inquirer = require("inquirer");
// require express
const express = require("express");

///create seeds for database
//ask user questions via inquirer and then either "POST AN ITEM", "BID ON AN ITEM" or exit
 //use conditional statements to determine If their bid is higher, inform the user of their success and replace the previous bid with the new one. If their bid is lower (or equal), inform the user of their failure and boot them back to the selection screen.
