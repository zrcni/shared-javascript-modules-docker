# shared dependencies between applications ran in Docker containers

Shared npm modules are installed at the root of the project, in the **node_modules** folder.   
Your own code that is shared between applications is inside the **shared** folder.

Containers that use these shared modules mount the folders like this:   
**local - container**   
\<project-root\>/shared - /shared   
\<project-root\>/node_modules - /node_modules   

Applications can install their own npm modules in addition to the npm modules at the project root.

## group and user in Dockefiles
One of these commands is required, depending on the base container, in a Dockerfile to prevent file permission issues between the container and the host.   
If my memory serves right, a Docker container is ran as root user by default, which causes issues.   

### ubuntu-based container
```Dockerfile
RUN groupadd -r -g 789 group-name && useradd -r -g app-group -u 999 user-name
```
### alpine-based container
```Dockerfile
RUN addgroup --gid 789 group-name && adduser --disabled-password --gecos "" --no-create-home --ingroup app-group --uid 999 user-name
```

## module aliases
Each application defines their own module aliases, because one application might use JS without any transpilation, another one might use Babel+Webpack and a third one might use TypeScript.   

By default, requiring shared modules would be done like this:
```js
const test = require('../../shared/utils/test')
```
By using module aliases it can be required like this:
```js
const test = require('@shared/utils/test')
```

## Alternative shared node modules
Shared node modules can be installed inside the **shared** folder. This way you wouldn't have to mount node_modules in each container, but requiring node modules from the shared folder would have to be done explicitly like this:
```js
const express = require('@shared/node_modules/express')
```

This is implemented in the branch **node-modules-in-shared-dir**.
