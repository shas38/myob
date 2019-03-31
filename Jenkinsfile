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
        try {
          sh 'curl -i http://localhost:4000/health'
        } catch (err) {
          echo "err"
          sh 'docker stop shk/myob'
          throw
        }
         
        sh 'docker stop shk/myob'
      }
    } 

  }
}