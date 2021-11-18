# node-api-postgres

install postgresql with homebrew :

brew install postgres

create a table with the following script in posgregsql : 

CREATE TABLE posts
(
    id serial NOT NULL,
    id_user INT NOT NULL,
    title varchar(50) NOT NULL,
    description varchar(500) NOT NULL,
    created_at timestamp with time zone DEFAULT now()
)

update the crenditials with yours in the file src/config/database-config.js to connect to your local postgresql server

and in the terminal run : 

npm run dev
