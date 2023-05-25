const readEnvValue = (key, defaultValue) => {
    const e = process.env;
    const value = e[key];

    if (!value && defaultValue === undefined) {
        throw new Error(`Environment variable ${key} is missing`);
    }

    if (!value) {
        return defaultValue;
    }

    return value;
};

const readIntegerEnvValue = (key, defaultValue) => {
    let value = readEnvValue(key, defaultValue);
    if (value) {
        value = parseInt(value, 10);
        if (!Number.isNaN(value)) {
            return value;
        }
    }
    throw new Error(`Environment variable ${key} is not an integer`);
};

const readBoolEnvValue = (key, defaultValue) => {
    const value = readEnvValue(key, defaultValue);
    return !!(value === 'true' || value === true);
};

const isDevelopment = () => {
    if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') return false;

    return true;
};

module.exports = {
    readEnvValue,
    readIntegerEnvValue,
    readBoolEnvValue,
    isDevelopment
};
