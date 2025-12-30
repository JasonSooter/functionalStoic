---
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-09-08T09:33:29-06:00
title: Docker for Developers
---
# Docker for Developers

## Changelog

## Resources

- [Install Docker](https://www.docker.com/)

## Action Items

## FAQ

---
🙋
✨
[Source]()

---

## Main Docker Components

### Docker Container

![[2022-12-29_20-53-45.png]]

### Image

- Like a Recipe
- Includes all the information that a Container needs to build
	- in exactly the same way
	- across any system

### Volumes

- Data that changes is on the volume

### Networking

- Containers are unaware and completely isolated
- Networking allows the to interact

## Build a Container

```
docker build -t jsootertwilio/<container-name> .
```

## Run a Container

```
docker run -p 4000:4000 jsootertwilio/simple-backend
```

## List Images That Are Currently Running

```
> docker ps
CONTAINER ID   IMAGE                          COMMAND                  CREATED         STATUS              PORTS                    NAMES
936c2bb07657   jsootertwilio/simple-backend   "docker-entrypoint.s…"   2 minutes ago   Up About a minute   0.0.0.0:4000-%3E4000/tcp   crazy_pike
```

## Stop a Container

- Must be performed in a separate terminal instance
- Also, Consider `docker kill` if `docker stop` doesn't work

```
docker stop 936
```
