class Query {
    constructor(key, data, options, instances, status) {
        this.key = key,
        this.data = data,
        this.options = options
        this.instances = instances
        this.status = 'active' || instances<1 ? "inactive" : status
    }
}

class QueryOptions {
    constructor(hashingOptions, cachingOptions, errorOptions) {
        this.hashingOptions = hashingOptions,
        this.cachingOptions = cachingOptions
        this.errorOptions = errorOptions
    }
}

class QueryErrorOptions {
    constructor(retry, reryDelay, waitTime, ) {
        this.hashingOptions = hashingOptions,
        this.cachingOptions = cachingOptions
    }
}

class QueryHashOptions {
    constructor(hashKey, hashData, keyHashType, dataHashType, keyHashSecret, dataHashSecret, useSameHashType, useSameHashSecret, useGlobalHashType, useGlobalHashSecret) {
        this.hashKey = hashKey || false,
        this.hashData = hashData || false,
        this.keyHashType = keyHashType || '',
        this.dataHashType = dataHashType || '',
        this.keyHashSecret = keyHashSecret || '',
        this.dataHashSecret = dataHashSecret || '',
        this.useSameHashType = useSameHashType || false,
        this.useSameHashSecret = useSameHashSecret || false,
        this.useGlobalHashType = useGlobalHashType || false,
        this.useGlobalHashSecret = useGlobalHashSecret || false

    }
}

class QueryCachingOptions {
    constructor(cacheTime, ) {
        this.hashKey = hashKey || false,
        this.hashData = hashData || false,
        this.keyHashType = keyHashType || '',
        this.dataHashType = dataHashType || '',
        this.keyHashSecret = keyHashSecret || '',
        this.dataHashSecret = dataHashSecret || '',
        this.useSameHashType = useSameHashType || false,
        this.useSameHashSecret = useSameHashSecret || false,
        this.useGlobalHashType = useGlobalHashType || false,
        this.useGlobalHashSecret = useGlobalHashSecret || false

    }
}

class QueryHashOptions {
    constructor(hashKey, hashData, keyHashType, dataHashType, keyHashSecret, dataHashSecret, useSameHashType, useSameHashSecret, useGlobalHashType, useGlobalHashSecret) {
        this.hashKey = hashKey || false,
        this.hashData = hashData || false,
        this.keyHashType = keyHashType || '',
        this.dataHashType = dataHashType || '',
        this.keyHashSecret = keyHashSecret || '',
        this.dataHashSecret = dataHashSecret || '',
        this.useSameHashType = useSameHashType || false,
        this.useSameHashSecret = useSameHashSecret || false,
        this.useGlobalHashType = useGlobalHashType || false,
        this.useGlobalHashSecret = useGlobalHashSecret || false

    }
}

class QueryData {
    constructor(url, request, response) {
        this.url = url,
        this.request = request,
        this.response = response  //include a response data id number to quickly identify changes to arrays/public data
    }
}

class QueryStatus {
    static isLoading = 'loading'
    static isError = 'error'
    static isSuccess = 'success'
    static isIdle = 'idle'
    constructor(status){
        this.status = status;
        this.isFetching = status === "loading" || "idle" ? true : false
    }
}