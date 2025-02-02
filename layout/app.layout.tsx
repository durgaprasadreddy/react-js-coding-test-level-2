import Footer from 'components/footer'
import Header from 'components/header'
import TopHeader from 'components/topHeader'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-bg-gray">
      <TopHeader />
      <Header />
      <div className="m-auto">
        <main className="flex w-full flex-1 flex-col">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
