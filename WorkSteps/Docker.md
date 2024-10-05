# Steps to Dockerize a MERN Stack Application

1. **Set Up Project Structure**
   - Organize the project with `/client` (React) and `/server` (Node.js) folders.
   - Create a `/docker` folder for Docker-related files.

2. **Create Dockerfile for Backend**
   - Define a `Dockerfile` in the `/server` folder to build the Node.js app.

3. **Create Dockerfile for Frontend**
   - Define a `Dockerfile` in the `/client` folder to build the React app.

4. **Create `docker-compose.yml`**
   - Create `docker-compose.yml` in the root or `/docker` folder to manage services for frontend, backend, and MongoDB.

5. **Update MongoDB URI in Backend**
   - Update MongoDB connection string in the backend to use the Docker service.

6. **Build and Run Containers**
   - Run `docker-compose up --build` to start all containers.

7. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

8. **Stop and Remove Containers**
   - Run `docker-compose down` to stop and clean up containers.

9. **Optional: Add `.dockerignore`**
   - Create `.dockerignore` files for the `client` and `server` directories to exclude unnecessary files like `node_modules`.