# Story 2: Deploy and interact with token locally

At the end of story 1 you had scaffolded out a development environment, downloaded, and integrated a OSS ERC20 token into your workspace. In this section, we will build, deploy, and interact with this token on ledger on your local machine. 

## Step 1 - Compile and deploy the token

- To build a project, `right click` on any solidity (.sol) file in your solution and select "Build Contracts" from the drop down

  ![](../images/builldToken.png)

- Once completed you will have a new directory in your workspace titled "build" - This directory includes all of the build process metadata including contract ABI, Bytecode etc.

## Step 2 - Deploy the contract locally

- After the build process completes, `right click` on any Solidity file (.sol) in your project and select "Deploy Contracts" from the dropdown menu

- After selecting "Deploy Contracts" select `development 127.0.0.1:8545` from the selection options

  ![](C:\ignite\ignite2019\images\deployLocal.png)

- This starts the process of deploying a contract a local (emulated) ledger

- Once this process completes you will see information from the deployment including estimated (virtual) gas costs, contract address etc. This information is available in the output channel for Azure Blockchain (bottom right of the VS Code window as shown below)

  `Note: your values will be different than shown below`

  ![](../images/localDeploymentComplete.png)