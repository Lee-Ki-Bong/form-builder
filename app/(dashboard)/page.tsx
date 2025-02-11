import { GetFormStats } from "@/actions/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ReactNode, Suspense } from "react"
import { LuView } from "react-icons/lu"

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatesWrapper />
      </Suspense>
    </div>
  )
}

async function CardStatesWrapper() {
  const stats = await GetFormStats()
  return <StatsCards loading={false} data={stats} />
}

interface StatsCardProps {
  loading: boolean
  data?: Awaited<ReturnType<typeof GetFormStats>>
}

function StatsCards(props: StatsCardProps) {
  const { loading, data } = props
  return (
    <div className="grid w-full grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-blue-600" />}
        helporText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
    </div>
  )
}

function StatsCard({
  title,
  icon,
  helporText,
  value,
  loading,
  className
}: {
  title: string
  icon: ReactNode
  helporText: string
  value: string
  loading: boolean
  className?: string
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading ? (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          ) : (
            value
          )}
        </div>
        <p className="pt-1 text-xs text-muted-foreground">{helporText}</p>
      </CardContent>
    </Card>
  )
}
