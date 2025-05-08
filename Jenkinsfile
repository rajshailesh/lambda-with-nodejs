pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install' // Or yarn install
                bat 'npm run build' // Optional: If you have a build step
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test' // Assuming your Jest test command is npm run test
                // Alternatively:
                // sh 'jest --coverage' // If you want to generate coverage reports
            }
        }
    }
    post {
        always {
            // You can add steps here to archive artifacts or send notifications
            echo 'i am in post'
        }
    }
}