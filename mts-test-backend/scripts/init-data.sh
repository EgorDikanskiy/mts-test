#!/bin/sh

# Проверяем, существует ли уже база данных
if [ ! -f "/app/data/data.db" ]; then
    echo "Инициализация базы данных..."
    
    # Копируем начальные данные
    if [ -f "/app/data.json" ]; then
        cp /app/data.json /app/data/
        echo "Скопированы начальные данные"
    fi
    
    # Копируем загруженные файлы
    if [ -d "/app/uploads" ]; then
        cp -r /app/uploads/* /app/data/uploads/ 2>/dev/null || true
        echo "Скопированы загруженные файлы"
    fi
fi

echo "Инициализация завершена" 