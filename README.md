![Tabr To Do List Img](/public/images/TABR.png)
# Tabr started by @phoniks and @harmanLearns
Tab based To Do List App with unlimited `tabs` and `tasks`.

## What you will be able to with our app:

- Create different tabs
- Create tasks for your tabs
- View all of your tasks for a specific tab
- Update tasks on a tab
- Delete tasks from a tab
- Check off tasks as completed or uncompleted
- Rearrange tasks
- Signup/login/logout

## Stack

- [node](https://nodejs.org/en/)
- [express](http://expressjs.com/)
- [passport](http://passportjs.org/)
- [es2016](http://es6-features.org/#Constants)
- [postgres](http://devdocs.io/postgresql/)
- [pug](https://pugjs.org/api/getting-started.html)
- [pg-promise](https://github.com/vitaly-t/pg-promise)
- [BootStrap](http://getbootstrap.com/)

## Steps to setup app:
#### 1. if ( you need to clone the repo ){

        $ git clone https://github.com/harmanlearns/theCootList.git harmanTabr
      
####    }
####2. if ( you have postgres installed and running properly ){

$ psql -f database/schema.sql // Creates postgres database called tabr

####  }else if ( you do not have postgres installed ){
    
      $ brew update 
      
      $ brew doctor
      
      $ brew install postgres
      
      $ initdb /usr/local/var/postgres -E utf8 // initialize postgres
      
      $ brew services start postgres // start postgres as a background brew service 
      
      $ createdb [computerName] // create a database with same name as mac
      
      $ psql // should cause you to enter into postgres command line i.e.:
        psql (9.5.5)
        Type "help" for help.
        
        nuevoMac=#
        
      $ \q // get out of postgres command line 
      
      $ psql -f database/schema.sql // Creates postgres database called tabr
####  }
####3. if ( you do not have yarn installed ) {

        $ npm i -g yarn

####  }else{
  
        $ yarn // installs all dependencies listed in package.json and based on yarn.lock file
    
####  }
####4. Start the app on [localhost:3000/users/register](http://localhost:3000/users/register)

        $ yarn start
