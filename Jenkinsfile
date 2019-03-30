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
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
    stage('Run') {
        steps {
            echo 'Starting application...'
            sh 'npm start'
        }
    }
  }
}