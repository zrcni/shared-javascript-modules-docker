FROM node:12.16.1

RUN groupadd -r -g 789 app-group && useradd -r -g app-group -u 999 app-two

RUN mkdir /app
WORKDIR /app

ENTRYPOINT ["npm"]
