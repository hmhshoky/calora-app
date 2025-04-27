# Basis-Image (aktuellste Node.js-Version)
FROM node:current

# Arbeitsverzeichnis im Container festlegen
WORKDIR /home/node

# 1. Kopiere package.json und package-lock.json (für effizientes Caching)
COPY package.json package-lock.json ./

# 2. Abhängigkeiten installieren
RUN npm install

# 3. Kopiere den RESTLICHEN App-Code (inkl. app.js)
COPY . .

# 4. Port freigeben (für Express-Server)
EXPOSE 3001

# 5. Server starten (CMD muss mit deiner app.js übereinstimmen)
CMD ["node", "app.js"]