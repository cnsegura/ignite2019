# Story 4 - Exercise the Logic App in Azure

At the end of story 3 you had deployed the token to the Azure Blockchain Service and you have created the microservice script that will be used to create the Logic App in Azure.  In this story, we will exercise a smart contract function via a Logic App.

## Step 1: Exercise the Logic App

For this lab, we have an already deployed Logic App with the output that was generated from VS Code.  Now the logic app has been created we will simulate calling this app.  This is a standard REST based call, so any tooling that can perform REST calls will work.  In this lab we will use the REST client extension for VS Code.

  - Download the REST client extension
    - In VS Code, click on the icon in the left navigation to manage VS Code extension.  In the search bar, enter: `REST client`.  Click install to install the extension

      ![](../images/story4_installRestExtension.png)

    - Create a new file in VS Code (anywhere is fine) and add the following content to this file.

    ```
    POST https://prod-17.eastus.logic.azure.com:443/workflows/e8cfadff3cb940b9b2873181c8926c18/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=orwa_PVBPyv2Mt_tA8erw8DK2O1kR1dZrbdnbk_SnQ4 HTTP/1.1
    ```

    - To run the POST transaction, which will return the total supply of tokens from the blockchain state run:
      
      ``` 
      <CTRL + ALT + R>
      ```


### This completes the final story for this lab on development of decentralized applications with VS Code
