pipeline {
    agent any
    def app
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

        // stage('Build Docker Image') {
        //     steps {
        //         sh 'docker build -t shk/myob .'
        //     }
        // }   

        // stage('Test Docker Image') {
        //     steps {
        //         sh 'docker run -p 4000:3000 -d shk/myob'
        //         sh 'curl http://0.0.0.0:4000/health'    
        //     }
        // }  

        stage('Docker') {         
            environment {
                // Extract the username and password of our credentials into "DOCKER_CREDENTIALS_USR" and "DOCKER_CREDENTIALS_PSW".
                // (NOTE 1: DOCKER_CREDENTIALS will be set to "your_username:your_password".)
                // The new variables will always be YOUR_VARIABLE_NAME + _USR and _PSW.
                // (NOTE 2: You can't print credentials in the pipeline for security reasons.)
                DOCKER_CREDENTIALS = credentials('dockerHubCredentials')
            }

            steps {                           
                // Use a scripted pipeline.
                script {
                    node {
                        def app

                        stage('Clone repository') {
                            checkout scm
                        }

                        stage('Build image') {                            
                            app = docker.build("shk/myob")
                        }

                        stage('Push image') {  
                            // Use the Credential ID of the Docker Hub Credentials we added to Jenkins.
                            docker.withRegistry('https://registry.hub.docker.com', 'dockerHubCredentials') {                                
                                // Push image and tag it with our build number for versioning purposes.
                                app.push("${env.BUILD_NUMBER}")                      

                                // Push the same image and tag it as the latest version (appears at the top of our version list).
                                app.push("latest")
                            }
                        }              
                    }                 
                }
            }
        }
    }
}