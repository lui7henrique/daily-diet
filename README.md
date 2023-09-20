


# 🍏 **Daily Diet API**

The Daily Diet API is an application developed as part of **Challenge 02** of the **["Creating RESTful APIs with Node.js"](https://rocketseat.com.br)** module.

## 📋 **Rules**

- [x] It must be possible to create a user 
- [x] It must be possible to identify the user in requests 
- [x] It must be possible to register a meal, with the following information:
  - Meals must be related to a user 
  - Name 
  - Description 
  - Date and Time 
  - Is it within the diet or not 
- [x] It must be possible to edit a meal, being able to change all the above data 
- [x] It must be possible to delete a meal 
- [x] It must be possible to list all meals of a user 
- [x] It must be possible to view a single meal 
- [x] It must be possible to retrieve a user's metrics 
  - Total number of registered meals 
  - Total number of meals within the diet 
  - Total number of meals outside the diet
  - Best sequence of meals within the diet 
- [x] The user can only view, edit, and delete the meals that he created

## 🚀 **How to run:**

1. Clone the repository:

   ```shell
   $ git clone https://github.com/your-username/daily-diet-api.git
   ```

2. Access the project folder:

   ```shell
   $ cd daily-diet-api
   ```

3. Install the dependencies:

   ```shell
   $ npm install
   ```

4. Configure the environment variables in a `.env` file:

   ```shell
   # Example environment variables
   NODE_ENV=development
   DATABASE_CLIENT=sqlite
   DATABASE_URL=./db/dev.sqlite3
   ```

5. Run the database migrations:

   ```shell
   $ npx knex migrate:latest
   ```

6. Start the server:

   ```shell
   $ npm start
   ```

Now, the **Daily Diet API** is up and running, ready for use.

##  👨‍💻 **Author**

Luiz Henrique - Software Developer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)

> This project was developed as part of **Challenge 02** of the **["Creating RESTful APIs with Node.js"](https://rocketseat.com.br)** course at **[Rocketseat](https://rocketseat.com.br)**. 🚀📚


