# Sample-Cypress

Cypress.json has environment variables {
    "projectId": "",

    "env":{
        "UserName": "",
        "Password": "Test123"
    }

}

run locally using as-a command with environment variables(Create a file in your user's home directory .as-a.ini and add [SIT] and crednetials)

    npx as-a SIT cypress run
    
run on locally installed docker

    Looks like in windows command line it's %cd% instead of $(pwd) and in Powershell it's ${PWD}. I can boot up my windows 10 instance and see.
    docker run -it -v %cd%:/e2e -w /e2e cypress/included:3.2.0
