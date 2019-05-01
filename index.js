const redis = require('redis')
const redisClient = redis.createClient({ retry_strategy: () => 1000 })
