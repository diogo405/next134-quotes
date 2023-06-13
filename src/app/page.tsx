import Quote from './components/Quote'

const mainStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 66px)',
  fontSize: '60px',
}

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/quotes/random', {
    cache: 'no-store',
  })
  const json: { quote: string } = await response.json()

  return (
    <main style={mainStyle}>
      <Quote text={json.quote} />
    </main>
  )
}
