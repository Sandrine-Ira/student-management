
pipeline {

    // Execute this pipeline on any available Jenkins agent
    agent any

    // Define the stages of the pipeline
    stages {

        // Stage 1: Build the Docker image
        stage('Build') {
            steps {

                // Display a message in the Jenkins console
                echo 'Starting DevOps application build...'

                // Check whether Docker is available
                sh 'docker --version'

                // Build the Docker image from the Dockerfile
                // -t assigns the image name and version
                // . specifies the current project directory
                sh 'docker build -t devops-app:1.0 .'

                // Display a completion message
                echo 'Docker image build completed!'
            }
        }
    }

    // Execute these actions after the pipeline finishes
    post {

        // Display a message when the build succeeds
        success {
            echo 'SUCCESS: DevOps application built successfully.'
        }

        // Display a message when the build fails
        failure {
            echo 'FAILURE: Check the Jenkins Console Output.'
        }

        // Always execute this message
        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
