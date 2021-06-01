FROM  cypress/included

WORKDIR /app

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .
COPY reporterOptions.json .
COPY cypress.json .

RUN npx cypress verify

COPY cypress cypress
COPY cypress.json .

RUN npx cypress run cy

