import Quote from './components/Quote'

const mainStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 66px)',
  fontSize: '60px',
}

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/quotes/random`)
  const json: { quote: string } = await response.json()

  return (
    <main style={mainStyle}>
      <Quote text={json.quote} />
    </main>
  )
}
