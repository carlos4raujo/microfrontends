import { Button } from '@repo/ui'

export default function Dashboard() {
  return (
    <div>
      <h1>📊 Dashboard</h1>
      <p>
        This component is exposed via Module Federation from <code>mfe-dashboard</code>.
      </p>
      <Button variant="secondary">View stats</Button>
    </div>
  )
}
