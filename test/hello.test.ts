import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function () {
  it("should say hi", async function () {
    //1. setup enviroment
    //2. deploy contract
    //3. call your functions to test

    //2. This string is the name of the contract!
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("Hello, world!");
  });
});
