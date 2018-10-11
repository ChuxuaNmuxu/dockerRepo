FROM keymetrics/pm2:latest-alpine

# Bundle APP files
ADD app.js .
ADD package.json .
ADD ecosystem.config.js .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Expose the listening port of your app
EXPOSE 8082

# SHOW current folder structure in logs
# RUN ls -al -R

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
