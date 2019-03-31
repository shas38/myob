pipeline {
  agent any
    
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/shas38/myob.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Unit Test') {
      steps {
         sh 'npm test'
      }
    }   
    
    stage('Build Docker Image') {
      steps {
         sh 'docker build -t shk/myob .'
      }
    }    

    stage('Test Docker Image') {
      steps {
         sh 'docker run -p 4000:3000 -d shk/myob'
      }
      steps {
         sh 'curl -i localhost:4000/health'
      }
      steps {
         sh 'docker stop shk/myob'
      }
    } 

  }
}