## How to run

- Clone the repository using
  `git clone https://github.com/ArturasWi/gamesweb.git`
- Run `npm install` in both `api` and `ui` folders.
- Rename `.env.example` to `.env` and replace variables with your own in both `api` and `client` folders.
- Run `npm start` in both `api` and `client` folders. (`npm run dev` in `api` for developemenet mode)

## How it works

- Steam authentication is done by `passport` and `passport-steam` libraries.
- React client opens `/auth/steam` route in a pop-up window.
- After authentication, the callback route `/auth/steam/return` renders an HTML page with a JS script.
- This script calls an event listener from the `window.opener` (React client) and sends the token through that event.
- React client waits for that event, and when it fires, it saves the token in localStorage.
