"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  // 기본 스타일이 적용이 안되는 이슈. 아래와 같이 직접 스타일을 적용함.
  return (
    <Tabs value={theme} onValueChange={setTheme} className="w-full">
      <TabsList className="flex items-center justify-center gap-4 rounded-lg border bg-gray-100 p-2 dark:bg-gray-800">
        <TabsTrigger value="light">
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>

        <TabsTrigger value="dark">
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>

        <TabsTrigger value="system">
          <Monitor className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher
