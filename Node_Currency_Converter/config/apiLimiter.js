import rateLimit from "express-rate-limit";

export const apilimiter = rateLimit({
    windowMs: 5 * (60 * 1000),
    max: 100
}) 