
# For Start Node js server


## 'npm install'
## 'node server' 

**(if you install nodemon - nodemon server)


# API end points


### Posts

#### For create post    

POST  :: BASE_URL/post/

#### Get all approved posts

GET   :: BASE_URL/post/public

#### Delete posts

DELETE::  BASE_URL/post/:id

#### Approve and reject post end points 

PUT :: BASE_URL/post/:id


### comments

#### get all comments  
 

GET :: BASE_URL/comm/:id

#### create comments    

POST :: BASE_URL/comm/


### users 

#### login :
 	
POST :: BASE_URL/user/login

#### sign-up : 

POST :: BASE_URL/post/signup