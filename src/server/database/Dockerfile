FROM postgres:latest
ENV POSTGRES_DB temp
ENV POSTGRES_PASSWORD snaketours
COPY schema.sql /docker-entrypoint-initdb.d/
EXPOSE 5432