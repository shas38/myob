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



        script {
            def app
            stage('Build image') {
                /* This builds the actual image; synonymous to
                * docker build on the command line */
                app = docker.build("shahriar27/myob")
            }
            stage('Push image') {
                /* Finally, we'll push the image with two tags:
                * First, the incremental build number from Jenkins
                * Second, the 'latest' tag.
                * Pushing multiple tags is cheap, as all the layers are reused. */
                docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                }
            }
        }
        

        // stage('Build Docker Image') {
        //     steps {
        //         // sh 'docker build -t shk/myob .'
        //         script {
        //             docker.build registry + ":$BUILD_NUMBER"
        //         }
        //     }
        // } 

        // stage('Deploy Docker Image') {
        //     steps{
        //         script {
        //             docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
        //                 dockerImage.push("latest")
        //             }
        //         }
        //     }
        // }  

        // stage('Remove Unused docker image') {
        //     steps{
        //         sh "docker rmi $registry:$BUILD_NUMBER"
        //     }
        // }

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