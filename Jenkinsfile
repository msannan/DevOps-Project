pipeline {
  agent any
  environment {
		registryCredential = 'dockerhub' 
	}
  stages {
    stage('Build Frontend') {
      steps {
			dir('frontend-node'){
				    sh 'docker build -t sannan1357/frontend:$GIT_COMMIT .'
                    sh 'docker container run --rm -p 9091:8080 --name frontend -d sannan1357/frontend:$GIT_COMMIT' 
				    sh 'sleep 5'
				    sh 'curl -I http://localhost:9091'
			}
		} 
	}
    stage('Publish') {
			steps{
				script {
					docker.withRegistry( '', registryCredential ) {
                        sh 'docker push sannan1357/frontend:$GIT_COMMIT'
					} 
				}
			} 
		}
	}
}