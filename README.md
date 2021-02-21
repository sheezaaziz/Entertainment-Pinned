## Live Demo
You can check and test out this project at: https://entertainment-pinned.netlify.app/

## Running on Local Machine
1. Clone the repository:

    `git clone https://github.com/sheezaaziz/Entertainment-Pinned`

2. `cd` into the `Entertainment-Pinned` folder and install the required dependencies:

    `npm install`

3. Set the environment variable:
    1. Register for an OMDb API key at: http://www.omdbapi.com/apikey.aspx
    2. Create a file `.env` in the root project directory and inside it, write:

        `REACT_APP_MOVIE_KEY="<YOUR_API_KEY>"`

        Replace `<YOUR_API_KEY>` with the API key sent to you by OMDb. E.g, 1234abcd1. Do not include the angle brackets.

4. Run on your local machine:

    `npm start`
