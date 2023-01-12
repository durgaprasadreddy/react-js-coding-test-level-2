import Head from 'next/head'
import AppLayout from 'layout/app.layout'
import DashboardContainer from 'containers/dashboard'
import { USER_PROFILE_URL } from 'configs'
import axios from 'axios'

export interface UserInterface {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    postcode: number
    state: string
    country: string
    coordinates: {
      latitude: string
      longitude: string
    }
  }
  dob: {
    date: string
    age: number
  }
  picture: {
    large: string
  }
  registered: {
    date: string
  }
  phone: string
  nat: string
  login: {
    username: string
  }
}

interface DashboardPageProps {
  user: UserInterface
}

const DashboardPage = ({ user }: DashboardPageProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>ACN React Test Level 2</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <DashboardContainer user={user} />
      </AppLayout>
    </div>
  )
}

DashboardPage.getInitialProps = async () => {
  const res = await axios.get(`${USER_PROFILE_URL}`)
  return { user: res.data.results[0] }
}

export default DashboardPage
