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


        // stage('Build Docker Image') {
        //     steps {
        //         script {
        //             dockerImage = docker.build("$registry:$BUILD_NUMBER")
        //         }
        //     }
        // } 

        // stage('Deploy Docker Image') {
        //     steps{
        //         script {
        //             docker.withRegistry( '', 'dockerHubCredentials' ) {
        //                 dockerImage.push("${env.BUILD_NUMBER}")
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


            script {
                def app
            }
            stage('Build Docker Image') {
                steps {
                    script {
                        app = docker.build("$registry:$BUILD_NUMBER")
                    }
                }
            } 

            stage('Deploy Docker Image') {
                steps{
                    script {
                        docker.withRegistry( '', 'dockerHubCredentials' ) {
                            app.push("${env.BUILD_NUMBER}")
                            app.push("latest")
                        }
                    }
                }
            }   


            stage('Remove Unused docker image') {
                steps{
                    sh "docker rmi $registry:$BUILD_NUMBER"
                }
            }
        

    }
}