# Magic Potion 

## Background

Magic Potion is a product ordering form application that sends a successful POST request upon submission with valid data entry. 

* **DATA SCHEMA:** This application uses a [**SQLite**](https://www.sqlite.org/index.html "SQLite") database and contains two schemas: `users` and `payments`. Upon a successful order, a `user` will submit an `email`, `quantity`, `total` (price), and an `id` will be automatically generated. In the same order, a `payment` will submit a `ccNum` (credit card number),an `exp` (expiration date), a `user_id` that references the one generated in the `users` table, and an automatically generated `id`. This schema allows data to be organized in a relational manner to easily find the relationship between a `user` and their (multiple) `payments`.

* **SCALABILITY & IMPROVEMENT:** As this application would grow and be expected to experience increased web traffic, scalability over time could be accomplished by **scaling the server(s)** via `horizontal scaling` (increasing number of servers) and/or `vertical scaling` (increasing RAM, CPU, and/or memory to an existing server). **Reducing server loads** via `compressing CSS`, `image optimization`, and `removing unnecessary code` would also allow increased server performance. Using a **load balancer** like [nginx](http://nginx.org/en/docs/http/load_balancing.html#:~:text=It%20is%20possible%20to%20use,of%20web%20applications%20with%20nginx. "nginx") can distribute traffic to multiple servers to improve performance and scalability of the application as well. Utilizing a **microservices architecture** can allow for increased/focused development speed and server resource allocation to a particular microservice in response to demand. 

* **FRONTEND ARCHITECTURE:** Magic Potion was created with [**React**](https://reactjs.org/docs/getting-started.html "React") to allow usage of reusable UI components that effortlessly and quickly presents data that changes over time without the need of reloading the page. Predictable one-way flow of data allows for quick and efficient debugging. React's use of uncontrolled components allows easy management of form data that can be selectively passed along to desired controlled components. This application utilizes a single **Form** (uncontrolled) component to manage data and passes on that data to appropriate uncontrolled components. 

* **FORM VALIDATION & ERROR HANDLING:** Form Validation was accounted for in both the frontend and the backend depending on the input field. For `quantity`, an alert is generated when a user attempts to put in more than 3 potions. For `email`, `ccNum`, and `exp`, [regex](https://www.regular-expressions.info/ "Regular-Expressions Info") was utilized to validate input fields by appropriate format. Additionally, [HTML <input> data tags](https://www.w3schools.com/tags/tag_input.asp "HTML <input> tag") were applied to validate appropriate data types like `text`, `email`, and `number`. Error handling also occurred in the backend, with API routes returning success (201) or error (422) status response codes in addition to unit tests created with [PHPUnit Testing](https://phpunit.de/ "PHPUnit"). 

* **API ARCHITECTURE:** Magic Potion utilizes a [RESTful API](https://restfulapi.net/ "REST API") that effectively facilitates the transfer of client-side information via [Axios](https://www.axios.com/ "Axios") to and from the server-side information via [**PHP Laravel**](https://laravel.com/ "PHP Laravel"). Once a user has successfully inputted valid input information for their order, a **GET** API call for a **duplicate email check** is initiated. If the email is found to be a duplicate, React will be able to receive and render that information in the form of an error message. Once the user enters in a non-duplicate email with the rest of the validated form data, a successful **POST** request will be initiated to write **user and payment data SQLite**. A successful POST request will relay that information back to React where the user will be notified of their successful order.

* **RETROSPECTIVE:** With more time, I would add additional changes to make the form more **dynamic** with animations and vibrant styling to make the User Experience more engaging. I would also have tried to experiment and familiarize myself with PHP Laravel and it's differences from NodeJS. Jumping right into a new backend language, there were many idiosyncrasies that took me a while to debug and figure out. For example, since PHP is a mixed paradigm language, it allows the use and return of non-object data types, like arrays. I was stuck for almost half a day testing my API route not realizing that I had to convert my object request into an array to make it work. If I had used NodeJS, I probably would have been able to implement more frontend changes, but I also had a lot of fun learning about PHP and I enjoyed the amount of community support and documentation available for it.

## Installation

Before running this application, please make sure you have the following installed:

- PHP ([Installation Guide](https://www.php.net/manual/en/install.php))
- Composer ([Installation Guide](https://getcomposer.org/doc/00-intro.md))
- Laravel ([Installation Guide](https://laravel.com/docs/5.8))

Clone the repo and cd into directory:

```bash
$ git clone https://github.com/spencerng94/magic-potion.git
$ cd magic-potion
```

To install PHP dependancies:

```bash
composer install
```

To install JS dependancies:
```bash
npm install
```

Start PHP Laravel server (http://localhost:8000/):
```bash
php artisan serve
```

## Usage 

A user can fill out a form and fill out the fields with a valid `quantity` (max: 3), `email` address, `ccNum` (credit card number), and `exp` (credit card expiration date). The `total` cost for the potions will automatically be calculated and applied upon a valid `quantity` entry.

- **App Startup:** The form will display as a SPA (Single Page Application) as shown with the aforementioned input fields. 
- **Successful Order:** The form will notify the user that the Order was successful with a green notification above "Your Order".
- **Order Error:** The form will notify the user that the Order failed and to address an invalid input or a duplicate email error via a notification above "Your Order".

<p align="center">
 <img src="https://magic-potion-bucket.s3-us-west-1.amazonaws.com/Untouched.png" width="375" height="650"/>
 <img src="https://magic-potion-bucket.s3-us-west-1.amazonaws.com/Success.png" width="375" height="650"/>
</p>

<p align="center">
 <img src="https://magic-potion-bucket.s3-us-west-1.amazonaws.com/Errors.png" width="375" height="650"/>
 <img src="https://magic-potion-bucket.s3-us-west-1.amazonaws.com/Duplicate.png" width="375" height="650"/>
</p>

## POST Order
Writes valid form data for a single user and their payment information into SQLite database and returns unique payment `id` upon success.

- **URL**: /api/magic
- **METHOD**: `POST`
- **URL Params**: None
- **Data Params**: 
```javascript
{
    email: 'dogecoin4@gmail.com',
    quantity: 1,
    total: 49.99,
    payment: {
        ccNum: '5105105105105100',
        exp: '12/12'
    }
}
```
- **Success Response:**
    - **Code:** 201 <br />
      **Content:** 
```javascript      
`{ 
    "id" : uid 
}`
```
- **Error Response:**
    - **Code:** 422 <br />
      **Content:**
```javascript
`{
    "error": "Already Exists"
}`
```

## Testing 

To run the unit tests for API requests please run the following command from the root directory:

```bash
composer run test
```