require("dotenv").config();
import express from "express";
import App from "./app";
import PythonService from "./services/PythonService";
import PythonController from "./controllers/PythonController";

const port = process.env.NODE_JS_PORT as string;

try {
  const application = new App({
    port,
    middlewares: [express.json()],
    services: [new PythonService()],
    controllers: [new PythonController()],
  });

  application.startServer();
} catch (err) {
  console.log(err);
}
