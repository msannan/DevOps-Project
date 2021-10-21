pipeline {
  agent any
  environment {
		registryCredential = 'dockerhub' 
	}
  stages {
    stage('Build Backend') {
			steps {
				dir('backend-python'){
					sh 'docker build -t sannan1357/backend .'
                    sh 'docker container run --rm -p 9090:8080 --name backend -d sannan1357/backend' 
				    sh 'sleep 5'
				    sh 'curl -I http://localhost:8080'
				}
			} 
		}
    stage('Build Frontend') {
      steps {
			dir('frontend-node'){
				    sh 'docker build -t sannan1357/frontend .'
                    sh 'docker container run --rm -p 9091:8080 --name frontend -d sannan1357/frontend' 
				    sh 'sleep 5'
				    sh 'curl -I http://localhost:9091'
			}
		} 
	}
    stage('Publish') {
			steps{
				script {
					docker.withRegistry( '', registryCredential ) {
						sh 'docker push sannan1357/backend:latest'
                        sh 'docker push sannan1357/frontend:latest'
					} 
				}
			} 
		}
	}
}