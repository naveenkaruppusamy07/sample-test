pipeline {
    agent any

    environment {
        // Define your Docker image name and the port you want to expose on the server
        IMAGE_NAME = 'testflow-react-ui'
        CONTAINER_PORT = '80'
        HOST_PORT = '8080' // Change this to 80 if you want it directly on the server's HTTP port
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Pull the latest code from your main branch
                git branch: 'main', url: 'https://github.com/naveenkaruppusamy07/sample-test.git'
            }
        }
        
        stage('Create Environment File') {
            steps {
                // In a real production setup, you should use Jenkins Credentials (Secret Text/File)
                // for security. Here we are generating the .env file dynamically before the build.
                sh '''
                    echo "VITE_BASE_URL=http://192.168.30.240" > .env
                    echo "VITE_PRODUCT_NAME=TestFlow" >> .env
                    echo "VITE_LOGO_URL=https://vitejs.dev/logo.svg" >> .env
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // This uses the Dockerfile to build your React app and package it in Nginx
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Remove any old container if it exists, ignoring errors if it doesn't
                    sh "docker rm -f ${IMAGE_NAME}-container || true"
                    
                    // Run the newly built image on the specified host port
                    sh "docker run -d --restart unless-stopped --name ${IMAGE_NAME}-container -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}:latest"
                }
            }
        }
    }
    
    post {
        success {
            echo "Deployment to 192.168.30.240 successful! Access it at http://192.168.30.240:${HOST_PORT}"
        }
        failure {
            echo "Deployment failed! Check the Jenkins logs."
        }
    }
}
