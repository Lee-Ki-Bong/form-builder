import { GetFormStats } from "@/actions/form"

export default function Home() {
  return <div>Hello</div>
}

function CardStatesWrapper() {
  const stats = GetFormStats()
  return <StatsCard loading={false} data={stats} />
}
