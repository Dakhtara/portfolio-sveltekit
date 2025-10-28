# Storybook Deployment

Ce dossier contient la configuration Docker optimisée pour déployer Storybook en production avec nginx.

## 🚀 Déploiement

### Option 1 : Docker Compose (Recommandé)

```bash
# Build et démarrer
docker-compose -f docker-compose.storybook.yml up -d

# Arrêter
docker-compose -f docker-compose.storybook.yml down

# Rebuild après changements
docker-compose -f docker-compose.storybook.yml up -d --build
```

### Option 2 : Docker classique

```bash
# Build l'image
docker build -f Dockerfile.storybook -t storybook-app .

# Run le conteneur
docker run -d -p 80:80 --name storybook storybook-app

# Arrêter et supprimer
docker stop storybook && docker rm storybook
```

## 🌐 Accès

Une fois déployé, Storybook est accessible sur :
- **Local** : http://localhost
- **Health check** : http://localhost/health

## 📦 Optimisations incluses

### Performance
- ✅ **nginx** : Serveur web ultra-performant
- ✅ **Gzip compression** : Réduction de 70-80% de la taille des fichiers
- ✅ **Cache intelligent** : Assets cachés 1 an, HTML non-caché
- ✅ **Multi-stage build** : Image finale légère (~50 MB)

### Sécurité
- ✅ **Security headers** : X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- ✅ **Health check** : Monitoring automatique du conteneur
- ✅ **Alpine Linux** : Image minimale et sécurisée

### Production-ready
- ✅ **CORS configuré** : Pour embedding si nécessaire
- ✅ **Restart automatique** : Le conteneur redémarre en cas d'erreur
- ✅ **Logs nginx** : Facilite le debugging

## 🔧 Configuration

### Changer le port

Modifier dans `docker-compose.storybook.yml` :
```yaml
ports:
  - "8080:80"  # Utilise le port 8080 au lieu de 80
```

### Personnaliser nginx

Modifier `nginx.storybook.conf` selon vos besoins.

## 📊 Monitoring

Vérifier les logs :
```bash
# Docker Compose
docker-compose -f docker-compose.storybook.yml logs -f

# Docker classique
docker logs -f storybook
```

Vérifier la santé du conteneur :
```bash
docker ps  # Voir le statut "healthy"
```

## 🏗️ Architecture

```
Dockerfile.storybook (Multi-stage)
├── Stage 1: Builder (node:22-alpine)
│   ├── npm ci
│   ├── npm run build-storybook
│   └── Output: /app/storybook-static
│
└── Stage 2: Production (nginx:alpine)
    ├── Copy storybook-static
    ├── Copy nginx.storybook.conf
    └── Serve on port 80
```

## 🐳 Taille de l'image

- **Builder stage** : ~500 MB (pas inclus dans l'image finale)
- **Image finale** : ~50 MB (nginx + fichiers statiques)
