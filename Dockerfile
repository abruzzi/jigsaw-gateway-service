FROM java:8

ADD build/libs/jigsaw-gateway-service-1.0.0.jar /app/jigsaw-gateway-service.jar

EXPOSE 9494

ENTRYPOINT ["java", "-jar", "/app/jigsaw-gateway-service.jar"]
