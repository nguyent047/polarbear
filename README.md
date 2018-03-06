# Polarbear
A HTTP-server for Mr. polar bear made with Node.js

## How to install
1. `git clone git@github.com:nguyent047/polarbear.git`
2. `cd polarbear`
3. `node server.js`
4. Go to your browser and enter localhost:8000
5. Enjoy!

## About the server
1. The server responds with a 200 OK and displays content the HTML files asked are valid.
2. When asked for an image, the server returns the image with image type.
3. The server will respond with 404 not found when /nonexistent-file.html is requested.
4. When '/assets' has been asked of the server, the server will redirect you to '/assets/index.html'.
5. All images within '/images' will be displayed when there is no index.html.

## Testing
1. Go to localhost:8000/about
2. Go to localhost:8000/images/avatar.png
3. Go to localhost:8000/nonexistent-file.html
4. Go to localhost:8000/assets
5. Go to localhost:8000/images
