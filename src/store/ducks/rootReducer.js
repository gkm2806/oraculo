//@ts-check

import {combineReducers } from "redux";

import materias from "./materias"
import salas from "./salas"
import turmas from "./turmas"
import aulas from "./aulas"
import settings from "./settings"
import professores from "./professores"
import user from "./user"
import search from "./search"

export default combineReducers({
    materias,salas,turmas, aulas, settings, professores, user,search
})