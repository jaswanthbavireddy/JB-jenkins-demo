pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Project files retrieved from GitHub'
            }
        }

        stage('Build') {
            steps {
                sh '''
                    mkdir -p dist
                    cp index.html style.css script.js dist/
                '''
                echo 'Website files prepared'
            }
        }

        stage('Test') {
            steps {
                sh '''
                    test -s dist/index.html
                    test -s dist/style.css
                    test -s dist/script.js
                    grep -q "Welcome to JB Jenkins Project" dist/index.html
                '''
                echo 'File checks passed'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/*', fingerprint: true
                echo 'Website files saved as build artifacts'
            }
        }
    }

    post {
        success {
            echo 'JB Jenkins pipeline completed successfully'
        }

        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}
