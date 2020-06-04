# shared dependencies between applications ran in Docker containers

Shared npm modules are installed at the root of the project, in the **node_modules** folder.   
Your own code that is shared between applications is inside the **shared** folder.

Containers that use these shared modules mount the folders like this:   
**local - container**   
\<project-root\>/shared - /shared   
\<project-root\>/node_modules - /node_modules   

Applications can install their own npm modules in addition to the npm modules at the project root.

# setup

