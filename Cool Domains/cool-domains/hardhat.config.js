//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/tA6hSc2FzwkZ0Qnh_K3gnZyL-_z8Osq8",
      accounts: ["44c82f092dd5d16342b6c4372669c01225ef211a999de55b075696be4255472c"],
    }
  }
};
