import sanityClient from '@sanity/client'

console.log(process.env)

const client = sanityClient({
    projectId: process.env.VUE_APP_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    token: process.env.VUE_APP_SANITY_TOKEN
})

export { client }


