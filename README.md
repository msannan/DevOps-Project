# DevOps-Project-Frontend
  Backend can be found here `https://github.com/msannan/DevOps-Project-Backend`

# What is this application?
  This application has 3 endpoints `/hello`, `/intructor/1` and `/student/1`

  - /hello: Greets the project instructor
  - /intrcutors/1: displays the name of the instructor
  - /student/1: displays the name of the student

# How to run this application through docker compose?
  - Run command in terminal: `docker-compose up -d`. This command runs complete project `Frontend` & `Backend`
  - Run `docker ps` and check on which port frontend is and browse `localhost:<Port from 9091-9095>`

  - Make sure no application is running on port `9091-9095`,`27017` and `8081` :)

# How to run this application through K8s?
  - Move to K8s directory run `kubectl apply -f .` or `kubectl apply -f backend.yaml` and `kubectl apply -f frontend.yaml`
  - Run command in terminal `kubectl port-forward service/frontend 9090:8080`
  - Go to your browser and run `http:localhost:9090/hello`

# How to run this application through K8s Helm?
  - Go to directory helm and run this command in terminal `helm install app dice-project`