pipeline {

    // Declare environment variable for later use
    environment {
        registry = "shahriar27/myob" // Docker hub registry for pusing images
        registryCredential = "dockerHubCredentials" // Credentials for pusing images
        dockerImage = "" // Global variable for later use
    }
    // Use any available agent
    agent any

    stages {
        // Clone git repository                
        stage('Cloning Git') {
            steps {
                git 'https://github.com/shas38/myob.git'
            }
        }
        // Install node dependencies 
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        // Unit test the node app by running the npm test command 
        stage('Unit Test') {
            steps {
                sh 'npm test'
            }
        } 
        // Build docker image from Dockerfile
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("$registry:$BUILD_NUMBER")
                }
            }
        } 
        // Push docker image to docker hub
        stage('Deploy Docker Image') {
            steps{
                script {
                    docker.withRegistry( '', 'dockerHubCredentials' ) { // Use system credentials to log in to docker hub
                        dockerImage.push("${env.BUILD_NUMBER}") // create a new tag with jenkins build number 
                        dockerImage.push("latest") // override the latest tag with the new build
                    }
                }
            }
        }   

        stage('Remove Docker Image') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER" // Remove unused docker image from the machine
            }
        }
    }
}