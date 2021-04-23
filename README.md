# Magic Potion 

Magic Potion is a product ordering form application that sends a successful POST request upon submission with valid data entry. 

* **DATA SCHEMA:** This application uses a SQLite database and contains two schemas: `users` and `payments`. Upon a successful order, a `user` will submit an `email`, `quantity`, `total` (price), and an `id` will be automatically generated. In the same order, a `payment` will submit a `ccNum` (credit card number),an `exp` (expiration date), a `user_id` that references the one generated in the `users` table, and an automatically generated `id`. This schema allows data to be organized in a relational manner to easily find the relationship between a `user` and their (multiple) `payments`.

* **SCALABILITY:** 

* **FRONTEND ARCHITECTURE:** Magic Potion was created with React to allow usage of reusable UI components that effortlessly and quickly presents data that changes over time without the need of reloading the page.

* **FORM VALIDATION & ERROR HANDLING:**

* **API ARCHITECTURE:**

* **SCALABILITY:**

* **RETROSPECTIVE:**


## Installation

