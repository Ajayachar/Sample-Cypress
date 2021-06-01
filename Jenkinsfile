pipeline {
  agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }

  stages {

    stage('build') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npx cypress verify'
      }
    }

    stage('test') {
      environment {
          CYPRESS_KEY='we;flwjef;lewjf;lwe'
        }
        steps {
          echo "Running tests ${env.BUILD_ID} on ${env.JENKINS_URL}"
          sh 'npm run chrome:ci'
        }
      }
  }