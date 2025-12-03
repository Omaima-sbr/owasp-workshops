/* import AWS from 'aws-sdk'

const client = new AWS.SecretsManager({ region: 'us-east-1' })

interface AppSecrets {
  JWT_PUBLIC: string
  JWT_PRIVATE: string
  HMAC_KEY: string
  PREMIUM_KEY: string
}

export let publicKey = ''
export let privateKey = ''
export let hmacKey = ''
export let premiumKey = ''

export async function loadSecrets () {
  const data = await client.getSecretValue({ SecretId: 'juice-shop-keys' }).promise()

  if ('SecretString' in data) {
    if (!data.SecretString) {
  throw new Error('SecretString is undefined')
}
    const secrets: AppSecrets = JSON.parse(data.SecretString)
    publicKey = secrets.JWT_PUBLIC
    privateKey = secrets.JWT_PRIVATE
    hmacKey = secrets.HMAC_KEY
    premiumKey = secrets.PREMIUM_KEY

    console.log('Secrets loaded successfully')
  } else {
    throw new Error('SecretString is empty')
  }
}
*/
