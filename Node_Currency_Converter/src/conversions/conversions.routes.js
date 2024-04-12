import { Router } from "express"
import { converData } from "./conversions.controller.js"

const api = Router()

api.post(
    '/',
    converData
)

export default api