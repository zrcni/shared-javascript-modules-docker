# shared dependencies between applications ran in Docker containers

Your own code that is shared between applications is inside the **shared** folder.
Shared npm modules are installed inside the **shared** folder.   

Containers that use these shared modules mount the folders like this:   
**local - container**   
\<project-root\>/shared - /shared   

Applications can install their own npm modules in addition to the shared npm modules.
