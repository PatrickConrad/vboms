const getGoogleURL = () => {
    const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
        redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        propt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ].join(" ")
    }

    const qs = new URLSearchParams(options)

    console.log("googleURL: ",  `${rootURL}?${qs.toString()}`)
    return  `${rootURL}?${qs.toString()}`
}

export default getGoogleURL