FROM python:3-alpine

WORKDIR /app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

CMD ["fastapi", "run", "main.py"]