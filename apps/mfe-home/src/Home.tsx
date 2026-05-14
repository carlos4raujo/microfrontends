import { Button } from '@repo/ui'

export default function Home() {
  return (
    <div>
      <h1>🏠 Home MFE</h1>
      <p>This component is exposed via Module Federation from <code>mfe-home</code>.</p>
      <Button>Click me</Button>
    </div>
  )
}
