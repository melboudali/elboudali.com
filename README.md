# elboudali

![elboudali website](https://res.cloudinary.com/elboudali/image/upload/v1624985308/my%20images/elboudali_f9aoie.png "elboudali.com")

My personal [website](http://elboudali.com) is a digital garden and a compendium of my projects and articles that help people learn front-end and back-end development.

## Installation

1. Clone the repo
   ```
   clone https://github.com/melboudali/elboudali.com.git .
   ```
2. Create `.env` file
3. Paste and modify these env vars
   ```
   MAIL_HOST=""
   MAIL_PORT=465
   MAIL_USER=""
   MAIL_PASS=""
   GATSBY_SERVERLESS_BASE=http://localhost:8888/.netlify/functions
   ```
   > You can get the host, port, user and pass from **[Sendgrid](https://sendgrid.com/)**.

## Edit Data

add your personal informations (fullName, location and more) by editing these files:

```
src
│
└───data
    │   about.ts
    │   config.ts
    │   projects.ts

```

## Pages

- [x] Index
- [x] Projects
- [x] Blog
- [x] contact
