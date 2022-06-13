## 👩‍💻 Project explanation
Examen Mercadolibre
1. Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar
contra los X-Men.
Te ha contratado a ti para que desarrolles un proyecto que detecte si un
humano es mutante basándose en su secuencia de ADN.
2. Ejemplo (Caso mutante):
String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};
En este caso el llamado a la función isMutant(dna) devuelve “true”.<br>
# Nivel 1:
Programa (en cualquier lenguaje de programación) que cumpla con el método pedido por
Magneto.
# Nivel 2:
Crear una API REST, hostear esa API en un cloud computing libre (Google App Engine,
Amazon AWS, etc), crear el servicio “/mutant/” en donde se pueda detectar si un humano es
mutante enviando la secuencia de ADN mediante un HTTP POST con un Json el cual tenga el
siguiente formato:
POST → /mutant/
{
“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
En caso de verificar un mutante, debería devolver un HTTP 200-OK, en caso contrario un
403-Forbidden
# Nivel 3:
Anexar una base de datos, la cual guarde los ADN’s verificados con la API.
Solo 1 registro por ADN.
Exponer un servicio extra “/stats” que devuelva un Json con las estadísticas de las
verificaciones de ADN: {“count_mutant_dna”:40, “count_human_dna”:100: “ratio”:0.4}

# 🚀 Environment setup
An .env file must be configured before the initialization of the database container and the API
### 🐳 Needed tools

1. [Install Docker](https://www.docker.com/get-started) 
2. Clone this project: `git clone https://github.com/camiconycb/cbustos-meli-challenge.git`
3. Move to the project folder: cd cbustos-meli-challenge

### 🌍 Application execution

1. Start the application with Docker Compose: `docker-compose up -d --build`
2. Go to [http://localhost:3000](http://localhost:3000)
3. POST /mutant <br>
    input {<br>
        "dna": <br>["ATTCGA","ATCTGA","ATCCTA","ATCGTA","ATCGGA","ATCCGA"]<br>
    }
4. GET /stats

###  ✅ Run test
1. npm install
2. npm run test
3. npm run coverage
