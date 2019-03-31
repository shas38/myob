pipeline {
  agent any
    
node {
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
          sh 'curl http://localhost:4000/health'      
      }
    } 

  }
}