# Easy Generator Coding Task

## Technologies Used
### Frontend
- REACT + VITE + TYPESCRIPT
- Redux Toolkit for state management and REST APIs
- Storybook for UI component development
- React Hook Form with Zod schema validator
- Tailwind CSS and PostCSS
### Backend
- Nest.js
- TypeORM with MongoDB
- Authentication with Passport JWT
- Swagger for API documentation
## Improvements
1. Implement better error handling mechanisms across both frontend and backend to capture and manage errors gracefully, providing users with clear and helpful messages.
2. Fully dockerize both the frontend and backend applications to facilitate easier deployment and ensure consistent environments across development, testing, and production.
3. Add comprehensive unit test cases for both frontend and backend to verify the functionality and robustness of individual components and modules.
4. Implement end-to-end (E2E) tests to ensure that the entire application flow works as expected from the user’s perspective, covering critical paths and user journeys.
5. Introduce loading components throughout the application to enhance user experience by providing feedback during data fetching and processing.
# Installation
To install Easy Generator Coding Task, you can use `yarn`:
## Frontend
### Navigate to the frontend directory:
```
cd frontend
```
### Install Dependencies
```
yarn
```
### Run Locally
```
yarn dev
```
## Backend
### Navigate to the backend directory:
```
cd frontend
```
### Install Dependencies
```
yarn
```
### Run MongoDB with Docker
```
docker compose up -d
```
### Run Locally
```
yarn start:dev
```