# CRUD API with NestJS and Next.js

## Description

This project is a simple CRUD API implemented using **NestJS** for the backend and **Next.js** for the frontend. It uses **PostgreSQL** as the database and manages the development and production environment through **Docker**.

## Data Structure

Data is represented in JSON format, where each object represents a product:

```json
[
    {
        "id": 1,
        "name": "Product A",
        "description": "Description of Product A",
        "price": 100.00
    },
    {
        "id": 2,
        "name": "Product B",
        "description": "Description of Product B",
        "price": 150.00
    }
]
```

Each product object contains:
- `id`: Unique identifier for the product.
- `name`: Name of the product.
- `description`: Description of the product.
- `price`: Price of the product.

## Endpoints

### 1. Create Product

**Endpoint:** `/products`

**Method:** POST

**Description:** Creates a new product with the data provided in the request body.

### 2. List Products

**Endpoint:** `/products`

**Method:** GET

**Description:** Returns a list of all products.

### 3. Get Product

**Endpoint:** `/products/:id`

**Method:** GET

**Description:** Returns details of a specific product based on the ID provided in the URL.

### 4. Update Product

**Endpoint:** `/products/:id`

**Method:** PATCH

**Description:** Updates the details of an existing product based on the ID provided and the data in the request body.

### 5. Delete Product

**Endpoint:** `/products/:id`

**Method:** DELETE

**Description:** Removes a specific product based on the ID provided.

## Technologies Used

- **[NestJS](https://nestjs.com/):** A framework for building efficient and scalable Node.js applications.
- **[Next.js](https://nextjs.org/):** A React framework for web applications and server-side rendering.
- **[PostgreSQL](https://www.postgresql.org/):** A relational database management system.
- **[Docker](https://www.docker.com/):** A platform for developing and running applications in containers.
- **[Prisma](https://www.prisma.io/):** An ORM for PostgreSQL and other databases.

## Project Setup

### 1. Install Dependencies

For the backend (NestJS), navigate to the `backend` directory and run:

```bash
npm install
```

For the frontend (Next.js), navigate to the `frontend` directory and run:

```bash
npm install
```

### 2. Set Up Docker

Ensure you have Docker installed. The project includes a `docker-compose.yml` file that configures containers for the backend, frontend, and database. To start the containers, run:

```bash
docker-compose up
```

### 3. Run the Project

- **Backend (NestJS):** The API will be accessible at `http://localhost:3000`.
- **Frontend (Next.js):** The frontend will be accessible at `http://localhost:3001`.

## Testing the API

Use tools like Postman or cURL to test the API endpoints:

- Create product: `POST http://localhost:3000/products`
- List products: `GET http://localhost:3000/products`
- Get product: `GET http://localhost:3000/products/:id`
- Update product: `PATCH http://localhost:3000/products/:id`
- Delete product: `DELETE http://localhost:3000/products/:id`

## Contributing

Feel free to open issues or submit pull requests to contribute improvements to this project.

## License

This project is licensed under the [MIT License](LICENSE).
