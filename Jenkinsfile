pipeline {
    agent any
    stages {
        stage('Example Build') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Example Deploy') {
            when {
                triggeredBy "TimerTrigger"
            }
            steps {
                echo 'Deploying'
            }
        }
    }
}