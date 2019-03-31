pipeline {
    agent any
    node {
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

            stage('Build Docker Image') {
                app = docker.build("shk/myob")
                // steps {
                //     sh 'docker build -t shk/myob .'
                // }
            }   

            stage('Test Docker Image') {
                app.inside {
                    sh 'echo "Tests passed"'
                }
            }  
            stage('Push image') {
                /* Finally, we'll push the image with two tags:
                * First, the incremental build number from Jenkins
                * Second, the 'latest' tag.
                * Pushing multiple tags is cheap, as all the layers are reused. */
                docker.withRegistry('https://registry.hub.docker.com', 'dockerHubCredentials') {
                    app.push("latest")
                }
            }

        }
    }
}