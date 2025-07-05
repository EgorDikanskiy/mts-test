# MTS Test Project

## Запуск проекта

1. **Убедитесь, что установлены Docker и Docker Compose**

2. **Запустите проект:**
   ```bash
   docker-compose up --build
   ```

3. **Откройте приложение:**
   - Frontend: http://localhost
   - Backend (Strapi Admin): http://localhost:1337/admin

**Примечание:** Все настройки Strapi (контент, роли, разрешения) и данные уже включены в проект и будут автоматически загружены при первом запуске. При последующих запусках данные сохраняются благодаря Docker volumes.

## Остановка проекта

```bash
docker-compose down
``` 