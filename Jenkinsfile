pipeline {
    environment {
        registry = "shahriar27/myob"
        registryCredential = "dockerHubCredentials"
    }
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
                // sh 'docker build -t shk/myob .'
                docker.build registry + ":$BUILD_NUMBER"
            }
        }   

        // stage('Test Docker Image') {
        //     steps {
        //         sh 'docker run -p 4000:3000 -d shk/myob'
        //         sh 'curl http://0.0.0.0:4000/health'    
        //     }
        // }  

        // stage('Publish') {

        //     steps {
        //         sh 'docker push shk/myob shahriar27/myob:tagname'            
        //     }
        // }
    }
}