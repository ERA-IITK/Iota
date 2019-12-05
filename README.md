# Chatbot
The chatbot has been made using Google's Dialogflow API which is hosted on Google Cloud Platform. 
To start building conversational Actions with Dialogflow, you'll first need an Actions project, which lets you manage your Actions and a Dialogflow agent, which lets you build and manage your conversational fulfillment.

To start building Actions, you'll first need to create an Actions project:

* Open the Actions Console.

* Click on Add/import project.

* Type in a Project name, like actions-codelab. This name is for your own internal reference; later on, you can set an external name for your project.

* Click Create Project.

* Choose the Conversational card at the bottom of the page.

* Click Build > Actions in the left nav.

* Click Add your first Action.

* Select at least one language for your Action, followed by Update. For this codelab, we recommend only selecting English.

* On the Custom intent card, click Build. This opens the Dialogflow Console in another tab.


## Create a Dialogflow agent

Now that you've built your Actions project, create a Dialogflow agent and associate it with your project:

* After following the steps above, you should already be in the Dialogflow Console with your Actions project name at the top. You may need to authorize Dialogflow to use your Google account, and accept the Terms of Service.

* Click Create.

If the agent creation is successful, the Intents appears. You can now begin customizing how your Dialogflow agent responds to user requests. You may refer to the docs here: https://dialogflow.com/docs

## Integration With Messenger

For integrating the bot with messenger you need to have admin rights of the page. Once you have that,

* Go to developers.facebook.com

* Create a new app.

* Add the page you want to integrate and generate its token.

* Enable webhooks integration and add the callback URL from the dialogflow agent to the app. 

* Submit the required documents and send the app for review. Details regarding which can be seen here: https://developers.facebook.com/docs/apps/review/

