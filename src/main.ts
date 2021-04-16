import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
const cors = require("cors");


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule, { cors: false});

    const config = new DocumentBuilder()
        .setTitle("chat server")
        .setDescription("XXX")
        .setVersion("1.0.0")
        .addTag("VLDV").build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

    app.use(cors());

    await app.listen(PORT, ()=>{console.log(`started server at port ${PORT}`)})
}

start();