# Nodepop


## Inicializar la base de datos

Para borrar posible contenido que se haya creado anteriormente y **reinicializar la base de datos** puedes ejectuar el siguiente comando:

```sh
npm run initDB
```

## ¿Cómo arrancar MongoDB en Mac y Linux?

**Descargamos MongoDB desde su página oficial**, descomprimimos el archivo y dentro de la carpeta descomprimida ejecutamos los siguientes comandos:

```sh
sudo mkdir -p /data/db

./bin/mongod -dbpath ./data/db
```

## La APP mongod no se puede abrir porque no se puede verificar el desarrollador

Si eres un usuario de MacOS, recuerda que tendrás que permitir la apertura de MongoDB, verificando su desarrollador desde la pestanya de Seguridad en Preferencias del Sistema.

## ¿Qué tengo que hacer para arrancar el proyecto en modo de desarollo?

```sh
npm run dev
```

Si todo ha ido bien veremos el siguiente mensaje en consola
```sh
'The application NODEAPI its now connected to a DATABASE (MongoDB)!'
```
