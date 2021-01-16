## Budget Tracker

A simple full stack budget tracker. 

Keeps track of your spending using the 50/30/20 budgeting methods using the categories: Needs, Wants, and Savings/Debts. 

<br/>

**Notes:**
- Uses MERN (MongoDb, Express, React, Node.Js)

- To change initial budgeting amount go to client/src/context/GlobalSate.js and edit inital inside of initalState (line 7 in the file)

<br/>

**Resources:**
- Made while watching tutorial by [Traversy Media](https://www.youtube.com/watch?v=KyWaXA_NvT0&list=WL&index=18) with my own additions.

- For more information regarding the budgeting method, check out [this](https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator) article.

- Update MONGO_URI in config/config.env with your own Mongodb URI

<br/>

**Instructions:**
```
 To Start first run
 $ npm install
 $ cd client && npm install
 $ cd ..
 
 # Run front and backend
 npm run dev
 
 # Prod
 npm start
```