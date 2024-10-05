# taskmaster-federation
Distributed task management system using GraphQL Federation

A distributed task management system using GraphQL Federation to handle different aspects of task management, such as user assignments, task scheduling, and project timelines. This project will consist of multiple services (subgraphs) for handling different domains, each managed in a mono-repo. The system will integrate these subgraphs using GraphQL Federation to provide a unified interface for querying and managing tasks.

Features:

    User Service (users):
        Manage user data and role-based permissions.
        Include fields like userId, name, email, and role.
        Expose mutations for creating, updating, and deleting users.

    Task Service (tasks):
        Handle core task functionalities like creating, updating, and assigning tasks to users.
        Include fields like taskId, title, description, status, dueDate, and assignee.
        Use @key and @requires directives to reference the User type for assignee information.

    Project Service (projects):
        Manage projects and associate tasks with projects.
        Include fields like projectId, name, description, tasks, and members.
        Extend User and Task types to reference users as project members and tasks as project items.

    Notification Service (notifications):
        Send notifications when tasks are assigned, updated, or completed.
        Include fields like notificationId, message, recipient, and timestamp.
        Reference the User type to identify notification recipients.

    Gateway (gateway):
        Aggregate the schemas from all services into a unified federated GraphQL schema.
        Define relationships between types like User, Task, and Project.

Tech Stack:

    Backend:
        Node.js with NestJS or Apollo Server for each service.
        PostgreSQL  for data storage.
        Redis for handling notifications.

    Monorepo Setup:
        nx to structure the monorepo.
        Sharea common types and utilities across services using a shared package.

    GraphQL Federation:
        Usea Apollo Gateway to implement the federated schema.
        Each service (user, task, project, notification) serves its own GraphQL schema and extends types from other services as needed.
