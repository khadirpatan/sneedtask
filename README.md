# sneedtask
after Dowloading you will get a folder with 2 subfolders.(client and Server)..

open terminal in client folder and run below command (It will install all the node_modules which are mentioned as dependencis
You should have installed node & npm in your system to complete this action.

open cleint folder and enter following command.
<b>npm install</b> 

open another new terminal in server folder

<b>npm install</b>


after installing packeges , goto Server folder and run the below command (this will run the server and connect to mongoDB)

<b>node index.js </b>

keep it on run, let server is on

goto client folder  open a new terminal and enter below command

<b>npm start</b>

you can check my app at localhost:3000

***Note***:

<b>Beacuse cilent and server are running in the same system it might thorw following error in the client console.
<i>Access to XMLHttpRequest at 'http://localhost:9090/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</i>
 to resolve this issue please istall following extension in the chrome browser and on the "Enable cross-origin resource sharing" toggle.
  refresh the app it will run.
  <a>https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en</a>
</b>
