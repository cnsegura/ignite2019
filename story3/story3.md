# Story 3 - Deploy to Azure Blockchain Service and create microservices for your smart contract

At the end of story 2 you had deployed your contract locally and had some experience interacting with it through a simple UI. In this story, we extend that story to deploy this contract to a ledger in the Azure Blockchain Service. Once deployed we will then use the VS Code extension to create a set of microservices for each function in your contract. These microservices, based on Azure Logic Apps, are a simple way to exercise functions on your smart contract in Azure. The exercising of, and reporting the response back, from your smart contract can then be plumbed back into any enterprise application, LoB UI or process (not a goal of this lab) demonstrating how you can then interact with contracts deployed in a private blockchain network

## Step 1: Connect to an Azure Blockchain Service in VS Code

If you did not have a Azure Blockchain Service (ABS) instance already created, you could create on through the VS Code extension. However, to save time, we have created one for you. To connect to this instance use the following steps.

- In the lower left hand pane of your VS Code extension, `left click on` (expand the Azure Blockchain tab if necessary) `-> Connect to network` as shown below

  ![](../images/connectToABS.png)

- After selecting, select the `Azure Blockchain Service` from the drop down

  ![](../images/selectABS.png)

- Select the subscription and resource groups from the drop down

- Once completed, you will see an `Azure Blockchain Service` connection has been added to your resource tree (this connects the VS Code extension, to the actual ABS resource deployed in Azure)

  ![](../images/absInTree.png)

## Step 2 - Deploy your contract/token to Azure Blockchain Service

- `Right click` on any Solidity (.sol) file in your solution and select "Deploy Contract"

- Select the entry that starts with `abs_` from the drop down (note your connection may have a different string after than abs_ then shown here)

  ![](../images/deployToABS.png)

- GENERATE MNEMONIC PART....!!!!
- This begins the process of deploying your contract/token to the Azure Blockchain Service you connected in step 1
- Once complete, you will find similar metadata in the output window as you saw when deploying a contract locally in story 2 (i.e., contract address etc)
- 